import React, { useEffect, useMemo, useState } from "react";
import scss from "./FilterExpansds.module.scss";
import Button from "../button/Button";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { VakansiesCardArrProps } from "../../constants/VakansiesCardArr";
import {
  filterOptionsData,
  filterOptions,
  FilterOptionType,
  OptionType,
} from "../../constants/filterOptionsData";
import { selectedFilters, setFilteredVakansies } from "./types";
import {
  handleFilterByExperienceRange,
  handleFilterByLocation,
  handleFilterByPriceRange,
  handleFilterBySchedule,
  handleFilterBySpecial,
  handleFilterBySpecialization,
  handleFilterByTime,
} from "./filterFunctions";
interface FilterExpandsProps {
  numberOfVakansies: number;
  VakansiesCardArr: VakansiesCardArrProps[];
  setFilteredVakansies: (filteredVakansies: VakansiesCardArrProps[]) => void;
}
const FilterExpands: React.FC<FilterExpandsProps> = ({
  numberOfVakansies,
  VakansiesCardArr,
  setFilteredVakansies,
}: FilterExpandsProps) => {
  const { t, i18n } = useTranslation();
  const [buttonDropdown, setButtonDropdown] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [filteredData, setFilteredData] = useState<VakansiesCardArrProps[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<selectedFilters>({});
  const [activeOptions, setActiveOptions] = useState({});
  const [checkboxStates, setCheckboxStates] = useState(
    Object.fromEntries(filterOptions.map((category) => [category.title, false]))
  );
  const [selectedZagalovok, setSelectedZagalovok] = useState<string | null>(
    null
  );
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  useEffect(() => {
    VakansiesCardArr.forEach((card) => {
      console.log("staj_raboty:", card.staj_raboty);
    });
  }, [VakansiesCardArr]);
  useEffect(() => {
    handleFilterButtonClick();
  }, [VakansiesCardArr]);

  const handlePodropbostiButtonClick = (index: number) => {
    setButtonDropdown((prev) =>
      prev.map((value, i) => (i === index ? !value : value))
    );
  };
  const handleZagalovokChange = (newZagalovok: string) => {
    setSelectedZagalovok(newZagalovok);
  };
  const handleCheckboxChange = (categoryTitle: string, optionText: string) => {
    const updatedStates = { ...checkboxStates };
    updatedStates[optionText] = !checkboxStates[optionText];
    setCheckboxStates(updatedStates);
    Object.keys(updatedStates).forEach((key) => {
      if (key !== optionText) {
        updatedStates[key] = false;
      }
    });
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [categoryTitle]: optionText,
    }));
    if (selectedZagalovok) {
      handleFilterButtonClick();
    }
    if (categoryTitle === "Последние вакансии") {
      setSelectedTime(optionText);
      console.log("Selected Time:", optionText);
    }
    if (categoryTitle === "Зарплата") {
      let minPrice: number | undefined,
        maxPrice: number | undefined,
        currency: string | undefined;
      switch (optionText) {
        case "до 30000сом":
          minPrice = 0;
          maxPrice = 30000;
          currency = "сом";
          break;
        case "30000 - 50000сом":
          minPrice = 30000;
          maxPrice = 50000;
          currency = "сом";
          break;
        case "50000 - 80000сом":
          minPrice = 50000;
          maxPrice = 80000;
          currency = "сом";
          break;
        case "выше 80000сом":
          minPrice = 80000;
          maxPrice = Infinity;
          currency = "сом";
          break;
        case "В долларах":
          minPrice = undefined;
          maxPrice = undefined;
          currency = "доллар";
          break;
        default:
          minPrice = undefined;
          maxPrice = undefined;
          currency = undefined;
          break;
      }
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        Зарплата: { minPrice, maxPrice, currency },
      }));
    }
  };
  const handleFilterButtonClick = () => {
    let filteredData = [...VakansiesCardArr];
    filterOptions.forEach((category, index) => {
      if (buttonDropdown[index]) {
        const category: FilterOptionType = filterOptions[index];
        if (buttonDropdown[index]) {
          const categoryTitle = category.title;

          const selectedOption = selectedFilters[categoryTitle];
          console.log("Selected Salary Option:", selectedOption);
          console.log("Filtering category:", categoryTitle);
          switch (category.title) {
            case "Последние вакансии":
              if (selectedOption) {
                filteredData = handleFilterByTime(selectedTime, filteredData);
              }
              break;
            case "Зарплата":
              if (selectedOption) {
                if (selectedOption.text === "В долларах") {
                  filteredData = VakansiesCardArr;
                } else {
                  const { minPrice, maxPrice, currency } =
                    selectedFilters[categoryTitle] || {};
                  filteredData = handleFilterByPriceRange(
                    minPrice,
                    maxPrice,
                    currency,
                    VakansiesCardArr
                  );
                }
              }
              break;
            case "Города":
              if (selectedOption) {
                filteredData = handleFilterByLocation(
                  selectedOption,
                  VakansiesCardArr
                );
              }
              break;
            case "График работы":
              if (selectedOption) {
                console.log("Selected schedule:", selectedOption);
                filteredData = handleFilterBySchedule(
                  selectedOption,
                  VakansiesCardArr
                );
              }
              break;
            case "Специализация":
              if (selectedZagalovok) {
                filteredData = handleFilterBySpecialization(
                  selectedZagalovok,
                  VakansiesCardArr
                );
              }
              break;
            case "Стаж работы":
              if (typeof selectedOption === "string") {
                if (selectedOption === "Не имеет значения") {
                  filteredData = VakansiesCardArr;
                } else {
                  const selectedExperienceOption = category.options.find(
                    (option: OptionType) => option.text === selectedOption
                  );

                  if (
                    selectedExperienceOption &&
                    "minExperience" in selectedExperienceOption &&
                    "maxExperience" in selectedExperienceOption
                  ) {
                    const minExperience = parseInt(
                      selectedExperienceOption.minExperience || "0"
                    );
                    const maxExperience = parseInt(
                      selectedExperienceOption.maxExperience || "Infinity",
                      10
                    );

                    filteredData = VakansiesCardArr.filter((card) => {
                      const cardExperience = parseInt(
                        card.staj_raboty.split(" ")[0],
                        10
                      );
                      return (
                        cardExperience >= minExperience &&
                        cardExperience <= maxExperience
                      );
                    });
                  } else {
                    console.error(`No matching option for ${selectedOption}`);
                  }
                }
              } else {
                console.error(
                  `selectedOption is not a string: ${selectedOption}`
                );
              }
              break;
            case "Специальное":
              const selectedSpecialization = selectedFilters["Специальное"];
              if (selectedSpecialization) {
                filteredData = handleFilterBySpecial(
                  selectedSpecialization,
                  VakansiesCardArr
                );
              }
              break;
          }
        }
      }
    });
    setFilteredData(filteredData);
    setFilteredVakansies(filteredData);
    const newNumberOfVakansies = filteredData.length;
    console.log("Filtered Data:", filteredData);
  };
  return (
    <div className={scss.wrapper}>
      <div className={scss.wrapper_top}>
        {filterOptions.map((category, index) => {
          const categoryTitle = category.title;
          return (
            <div key={index} className={scss.top_checkboxes}>
              <label onClick={() => handlePodropbostiButtonClick(index)}>
                <Button text={categoryTitle} />
                <Image
                  style={{
                    transform: `rotate(${
                      buttonDropdown[index] ? "180" : "0"
                    }deg)`,
                    transition: "transform 0.3s ease",
                    width: "auto",
                    height: "auto",
                  }}
                  src="/images/filter/Vector (3).svg"
                  alt={"bird"}
                  width={13}
                  height={13}
                />
              </label>
              {buttonDropdown[index] && (
                <div className={scss.podropbosti__buttons}>
                  {category.options.map((option, optionIndex) => (
                    <label key={optionIndex} className={scss.checkboxLabel}>
                      <div className={scss.checkboxAndText}>
                        <input
                          type="checkbox"
                          checked={Boolean(checkboxStates[option.text])}
                          onClick={() => {
                            if ("zagalovok" in option) {
                              handleZagalovokChange(option.zagalovok);
                            }
                          }}
                          onChange={() => {
                            console.log("Checkbox label clicked");
                            handleCheckboxChange(categoryTitle, option.text);
                          }}
                        />
                        <div className={scss.option_text}>
                          <span className={scss.leftAlign}>
                            {t(option.text)}
                          </span>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div>
          );
        })}
        <button
          className={scss.bottom_filterbtn}
          onClick={handleFilterButtonClick}
        >
          {t("filtation.special.button2")}
        </button>
      </div>
    </div>
  );
};

export default FilterExpands;
