import React, { useMemo, useState } from "react";
import scss from "./NewVakansies.module.scss";
import { VakansiesCardArr, VakansiesCardArrProps } from "../../constants/VakansiesCardArr";
import Card from "../../components/Card/Card";
import Filtration from "../Filtration/Filtration";

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
      sortedVakansies = sortedVakansies.sort((a, b) => parseFloat(a.salary) - parseFloat(b.salary));
    } else if (sortOrder === "salaryDesc") {
      sortedVakansies = sortedVakansies.sort((a, b) => parseFloat(b.salary) - parseFloat(a.salary));
    }

    if (searchText.trim() === "") {
      return sortedVakansies;
    }

    return sortedVakansies.filter((item: VakansiesCardArrProps) =>
      item.salary.includes(searchText)
    );
  }, [searchText, sortOrder]);

  const numberOfVakansies = filteredVakansies.length;

  const renderVakansiesCard = useMemo(() =>
    filteredVakansies.map((item: VakansiesCardArrProps) => (
      <Card
        key={item.id}
        id={item.id}
        img={item.img}
        zagalovok={item.zagalovok}
        staj_raboty={item.staj_raboty}
        grafik_raboty={item.grafik_raboty}
        location={item.location}
        time={item.time}
        price_before={item.price_before}
        salary={item.salary}
      />
    )),
    [filteredVakansies]
  );

  return (
    <div className="container">
      <div className={scss.vak}>
          <div className={scss.vak_left}>
          <Filtration />
        </div>
        <div className={scss.vak_container}>
          <div className={scss.vak_cont}>
            <h1 className={scss.vak__h1}> Новые вакансии </h1>
            <div className={scss.vak_wrap}>
              <div className={scss.vak_inp}>
                <p> Найдено:{numberOfVakansies}</p>
              </div>
              <p className={scss.vak_title}>Сортировать:</p>
              <div
                className={`${scss.vak_inp1} ${sortOrder === "default" ? scss.active : ""}`}
                onClick={handleSortByDefault}
              >
                <p> По умолчанию</p>
              </div>
              <div
                className={`${scss.vak_inp2} ${sortOrder === "salaryAsc" ? scss.active : ""}`}
                onClick={handleSortBySalaryAsc}
              >
                <p>По возрастанию зарплат</p>
              </div>
              <div
                className={`${scss.vak_inp3} ${sortOrder === "salaryDesc" ? scss.active : ""}`}
                onClick={handleSortBySalaryDesc}
              >
                <p>По убыванию зарплат</p>
             </div>
          </div>
          <div className={scss.cont__coursesCard}>{renderVakansiesCard}</div>
       </div>
    </div>
  );
}

export default NewVakansies;
