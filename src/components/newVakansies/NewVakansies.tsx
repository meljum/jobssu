import React, { useMemo, useState } from "react";
import scss from "./NewVakansies.module.scss";
import {
  VakansiesCardArr,
  VakansiesCardArrProps,
} from "../../constants/VakansiesCardArr";
import VakansiesCard from "../vakansiesCard/VakansiesCard";

function NewVakansies() {
  const [searchText, setSearchText] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("default");

  const handleSortByDefault = () => {
    setSortOrder("default");
  };

  const handleSortBySalaryAsc = () => {
    setSortOrder("salaryAsc");
  };

  const handleSortBySalaryDesc = () => {
    setSortOrder("salaryDesc");
  };

  const filteredVakansies = useMemo(() => {
    let sortedVakansies = [...VakansiesCardArr];

    if (sortOrder === "salaryAsc") {
      sortedVakansies = sortedVakansies.sort((a, b) => {
        const salaryA = parseFloat(a.salary.replace(/[^\d.-]/g, ""));
        const salaryB = parseFloat(b.salary.replace(/[^\d.-]/g, ""));
        return salaryA - salaryB;
      });
    } else if (sortOrder === "salaryDesc") {
      sortedVakansies = sortedVakansies.sort((a, b) => {
        const salaryA = parseFloat(a.salary.replace(/[^\d.-]/g, ""));
        const salaryB = parseFloat(b.salary.replace(/[^\d.-]/g, ""));
        return salaryB - salaryA;
      });
    }

    return sortedVakansies.filter((item: VakansiesCardArrProps) =>
      item.salary.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, sortOrder]);

  const numberOfVakansies = useMemo(() => filteredVakansies.length, [
    filteredVakansies,
  ]);

  const renderVakansiesCard = useMemo(
    () =>
      filteredVakansies.map((item: VakansiesCardArrProps) => (
        <VakansiesCard
          key={item.id}
          id={item.id}
          foto={item.foto}
          title={item.title}
          salary={item.salary}
        />
      )),
    [filteredVakansies]
  );

  return (
    <div className={scss.vak}>
      <h1 className={scss.vak__h1}> Новые вакансии </h1>
      <div className={scss.vak_wrap}>
        <div className={scss.vak_inp}>
          <p> Найдено:{numberOfVakansies}</p>
        </div>
        <p className={scss.vak_title}>Сортировать:</p>
        <div
          className={`${scss.vak_inp1} ${
            sortOrder === "default" ? scss.active : ""
          }`}
          onClick={handleSortByDefault}
        >
          <p> По умолчанию</p>
        </div>
        <div
          className={`${scss.vak_inp2} ${
            sortOrder === "salaryAsc" ? scss.active : ""
          }`}
          onClick={handleSortBySalaryAsc}
        >
          <p>По возрастанию зарплат</p>
        </div>
        <div
          className={`${scss.vak_inp3} ${
            sortOrder === "salaryDesc" ? scss.active : ""
          }`}
          onClick={handleSortBySalaryDesc}
        >
          <p>По убыванию зарплат</p>
        </div>
      </div>
      <div className={scss.cont__coursesCard}>{renderVakansiesCard}</div>
    </div>
  );
}

export default NewVakansies;
