import { useTranslation } from "react-i18next";
import scss from "./Filtration.module.scss";
import Button from "../button/Button";
import {
  VakansiesCardArr,
  VakansiesCardArrProps,
} from "../../constants/VakansiesCardArr";
import { useState } from "react";
import FilterExpands from "../FilterExpands/FilterExpansds";
import { selectedFilters, setFilteredVakansies } from "../FilterExpands/types";

interface FiltrationProps {
  filteredData: VakansiesCardArrProps[];
  setFilteredVakansies: (filteredVakansies: VakansiesCardArrProps[]) => void;
}
const Filtration: React.FC<FiltrationProps> = ({
  filteredData,
  setFilteredVakansies,
}) => {
  const { t } = useTranslation();
  const [selectedFilters, setSelectedFilters] = useState<selectedFilters>({});
  const setFilter = (filterName: string, params: any) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: params,
    }));
  };

  return (
    <div className={scss.wrapper}>
      <div className={scss.wrapper__left}>
        <div className={scss.left__add}>
          <Button text={t("filtation.soiscatel")}></Button>
          <button>{t("filtation.resume")}</button>
          <button>{t("filtation.razdel")}</button>
          <button>{t("filtation.kompanii")}</button>
        </div>
        <div className={scss.left__resume}>
          <Button text={t("filtation.rabotadatel")}></Button>
          <button>{t("filtation.dobavitRezume")}</button>
          <button>{t("filtation.razdelbolueme")}</button>
        </div>
        <div className={scss.left__filters}>
          <button>{t("filtation.button")}</button>
        </div>
        <FilterExpands
          VakansiesCardArr={filteredData}
          setFilteredVakansies={setFilteredVakansies}
          numberOfVakansies={0}
        />
      </div>
    </div>
  );
};
export default Filtration;
