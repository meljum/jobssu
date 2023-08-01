import React from "react";
import scss from "./Card.module.scss";
import icon1 from "../../../public/images/CardIcon/bag.svg";
import icon2 from "../../../public/images/CardIcon/calendar.svg";
import icon3 from "../../../public/images/CardIcon/houses.svg";
import icon4 from "../../../public/images/CardIcon/location.svg";
import icon5 from "../../../public/images/CardIcon/time.svg";
import vector from "../../../public/images/CardIcon/Vector.svg";
import Image from "next/image";

interface CardItem {
  id: number;
  img: string;
  zagalovok: string;
  staj_raboty: string;
  grafik_raboty: string;
  location: string;
  time: string;
  salary: string;
  price_before: string;
}

const Card: React.FC<CardItem> = (props) => {
  const {
    id,
    img,
    zagalovok,
    staj_raboty,
    grafik_raboty,
    location,
    time,
    price_before,
    salary,
  } = props;

  return (
    <div className={scss.cards}>
      <div className={scss.wrapper} key={id.toString()}>
        <div className={scss.card_info}>
          <Image
            className={scss.logo}
            src={img}
            alt="Logo"
            width={272}
            height={240}
          />
          <div className={scss.text}>
            <div className={scss.text_top}>
              <div className={scss.top__h5}>
                <h5>{zagalovok}</h5>
                <Image className={scss.vector} src={vector} alt="vector" width={15.5} height={20} />
              </div>
              <div className={scss.description}>
                <div className={scss.description_left}>
                  <div className={scss.left_top}>
                    <Image src={icon1} alt="icon" width={13} height={13.33} />
                    <div className={scss.left_text}>
                      <p>Стаж работы</p>
                      <span>{staj_raboty}</span>
                    </div>
                  </div>
                  <div className={scss.left_bottom}>
                    <Image src={icon2} alt="Icon" width={14.7} height={13.3} />
                    <div className={scss.bottom_text}>
                      <p>График работы</p>
                      <span>{grafik_raboty}</span>
                    </div>
                  </div>
                </div>
                <div className={scss.description_right}>
                  <div className={scss.right_top}>
                    <Image src={icon3} alt="Icon" width={16} height={16} />
                    <p>Evyap group</p>
                  </div>
                  <div className={scss.right_middle}>
                    <Image src={icon4} alt="Icon" width={11.5} height={13.35} />
                    <p>{location}</p>
                  </div>
                  <div className={scss.right_bottom}>
                    <Image src={icon5} alt="Icon" width={14} height={14} />
                    <p>{time}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={scss.button}>
              <div className={scss.button_text}>
                <div className={scss.number}>
                  <span className={scss.from_sub}>От</span>
                  <h5 className={scss.from}>{salary}</h5>
                </div>
                <div className={scss.number}>
                  <span className={scss.before_sub}>До</span>
                  <h5 className={scss.before}>{price_before}</h5>
                  <span className={scss.som}>сом</span>
                </div>
              </div>
              <button>Отправить резюме</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
