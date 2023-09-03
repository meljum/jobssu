import React, { useEffect, useMemo, useState } from "react";
import scss from "./NewVakansies.module.scss";
import {
  VakansiesCardArr,
  VakansiesCardArrProps,
} from "../../constants/VakansiesCardArr";
import Card from "../../components/Card/Card";
import { useTranslation } from "react-i18next";
import Filtration from "../Filtration/Filtration";
import {
  sortByPriceAsc,
  sortByPriceDesc,
} from "../FilterExpands/filterFunctions";
interface NewVakansiesProps {
  filteredData: VakansiesCardArrProps[];
}
const NewVakansies: React.FC<NewVakansiesProps> = ({ filteredData }) => {
  const [isFilteringActive, setIsFilteringActive] = useState(false);
  const [selectedSort, setSelectedSort] = useState("default");
  const [filteredVakansies, setFilteredVakansies] = useState(filteredData);
  const [searchText, setSearchText] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("default");
  const { t } = useTranslation();

  const handleSortBySalaryAsc = () => {
    setSelectedSort("salaryAsc");
    setSortOrder("salaryAsc");
    setIsFilteringActive(false);
    const sortedAscending = sortByPriceAsc([...filteredVakansies]);
    setFilteredVakansies(sortedAscending);
    const newNumberOfVakansies = isFilteringActive
      ? filteredVakansies.length
      : VakansiesCardArr.length;
  };
  const handleSortBySalaryDesc = () => {
    setSelectedSort("salaryDesc");
    setSortOrder("salaryDesc");
    setIsFilteringActive(false);
    const sortedDescending = sortByPriceDesc([...filteredVakansies]);
    setFilteredVakansies(sortedDescending);
    const newNumberOfVakansies = isFilteringActive
      ? filteredVakansies.length
      : VakansiesCardArr.length;
  };
  const handleSortByDefault = () => {
    setSelectedSort("default");
    setSortOrder("default");
    setIsFilteringActive(false);
    setFilteredVakansies(VakansiesCardArr);
  };
  const applySortAndFilter = (
    data: VakansiesCardArrProps[],
    sortOrder: string,
    searchText: string
  ) => {
    let sortedData = [...data];
    if (sortOrder === "salaryAsc") {
      sortedData = sortByPriceAsc(sortedData);
    } else if (sortOrder === "salaryDesc") {
      sortedData = sortByPriceDesc(sortedData);
    }
    if (searchText.trim() !== "") {
      sortedData = sortedData.filter((item: VakansiesCardArrProps) =>
        item.zagalovok.includes(searchText)
      );
    }
    return sortedData;
  };
  
  const sortedVakansies = useMemo(() => {
    return applySortAndFilter(filteredVakansies, sortOrder, searchText);
  }, [searchText, sortOrder, filteredVakansies]);
  console.log("Melis", filteredVakansies);
  const renderVakansiesCard = useMemo(
    () =>
      filteredVakansies.length > 0 ? (
        filteredVakansies.map((item: VakansiesCardArrProps) => (
          <Card
            key={item.id}
            id={item.id}
            img={item.img}
            zagalovok={item.zagalovok}
            staj_raboty={item.staj_raboty}
            grafik_raboty={item.grafik_raboty}
            specialization={item.specialization}
            location={item.location}
            time={item.time}
            price_from={item.price_from}
            price_before={item.price_before}
            currency={item.currency}
          />
        ))
      ) : (
        <p>No matching vacancies found.</p>
      ),
    [filteredVakansies]
  );
  return (
    <div className="container">
      <div className={scss.vak}>
        <div className={scss.vak_left}>
          <Filtration
            filteredData={VakansiesCardArr}
            setFilteredVakansies={(filteredVakansies) => {
              setFilteredVakansies(filteredVakansies);
              setIsFilteringActive(true);
            }}
          />
        </div>
        <div className={scss.vak_container}>
          <div className={scss.vak_cont}>
            <h1 className={scss.vak__h1}>{t("newVakansies.newVak")}</h1>
            <div className={scss.vak_wrap}>
              <div className={scss.vak_inp}>
                <p>
                  {t("newVakansies.naideno")}
                  {renderVakansiesCard instanceof Array
                    ? renderVakansiesCard.length
                    : 0}
                </p>
              </div>
              <p className={scss.vak_title}>{t("newVakansies.sort")}</p>
              <div
                className={`${scss.vak_inp1} ${
                  selectedSort === "default" ? scss.active : ""
                }`}
                onClick={handleSortByDefault}
              >
                <p>{t("newVakansies.default")}</p>
              </div>
              <div
                className={`${scss.vak_inp2} ${
                  selectedSort === "salaryAsc" ? scss.active : ""
                }`}
                onClick={handleSortBySalaryAsc}
              >
                <p>{t("newVakansies.ascending")}</p>
              </div>
              <div
                className={`${scss.vak_inp3} ${
                  selectedSort === "salaryDesc" ? scss.active : ""
                }`}
                onClick={handleSortBySalaryDesc}
              >
                <p>{t("newVakansies.descending")}</p>
              </div>
            </div>
          </div>
          <div className={scss.cont__coursesCard}>
            {isFilteringActive
              ? renderVakansiesCard
              : sortedVakansies.map((item: VakansiesCardArrProps) => (
                  <Card
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    zagalovok={item.zagalovok}
                    staj_raboty={item.staj_raboty}
                    grafik_raboty={item.grafik_raboty}
                    specialization={item.specialization}
                    location={item.location}
                    time={item.time}
                    price_from={item.price_from}
                    price_before={item.price_before}
                    currency={item.currency}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewVakansies;
