import React, { useState, useMemo } from "react";
import scss from "./Section.module.scss";
import { SectionData } from "../../constants/SectionData";
import { SectionData2 } from "../../constants/SectionData2";

import Image from "next/image";

const Section = () => {
  const [data, setData] = useState(SectionData);

  const getData = useMemo(
    () =>
      data.map((item) => (
        <div className={scss.card} key={item.id}>
          <div className={scss.card__item}>
            <Image src={item.image} alt="Icon" />
            <div className={scss.text}>
              <div className={scss.line}></div>
              <p>{item.title}</p>
            </div>
          </div>
        </div>
      )),
    [data]
  );

  const handleHover = () => {
    setData(isHovered ? SectionData : SectionData2);
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container">
      <div className={scss.wrapper}>
        <h2>Выберите раздел</h2>
        <div
          className={scss.cards}
          onMouseEnter={() => {
            setIsHovered(true);
            handleHover();
          }}
          onMouseLeave={() => {
            setIsHovered(false);
            handleHover();
          }}
        >
          {getData}
        </div>
      </div>
    </div>
  );
};

export default Section;

// const Section = () => {
//   const getData = useMemo(
//     () =>
//       SectionData.map((item) => (
//         <div className={scss.card} key={item.id}>
//           <div className={scss.card__item}>
//             <Image src={item.image} alt="Icon" />
//             <div className={scss.text}>
//               <div className={scss.line}></div>
//               <p>{item.title}</p>
//             </div>
//           </div>
//         </div>
//       )),
//     []
//   );

//   return (
//     <div className="container">
//       <div className={scss.wrapper}>
//         <h2>Выберите раздел</h2>
//         <div className={scss.cards}>{getData}</div>
//       </div>
//     </div>
//   );
// };

// export default Section;
