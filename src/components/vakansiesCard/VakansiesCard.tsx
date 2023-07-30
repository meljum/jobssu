import React from "react";
import scss from "./VakansiesCard.module.scss";
import Image from "next/image";

interface VakansiesCardProps {
  id: number;
  foto: string;
  title: string;
  salary: string;
}

const VakansiesCard: React.FC<VakansiesCardProps> = ({
  id,
  foto,
  title,
  salary,
}) => {
  return (
    <div className={scss.wrapper}>
      <div className={scss.wrapper__foto}>
        <Image src={foto} alt="foto" width={272} height={240} />
      </div>
      <div className={scss.wrapper__right}>
        <div className={scss.wrapper__title}>
          <h2 className={scss.title} >{title}</h2>
          <p className={scss.salary}>{salary}</p>
        </div>
      </div>
    </div>
  );
};

export default VakansiesCard;
