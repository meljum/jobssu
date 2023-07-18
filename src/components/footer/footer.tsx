import React, { useMemo } from "react";
import scss from "./footer.module.scss";
import { footerData } from "@/constants/footer";
import Image from "next/image";
import google from "../../../public/images/footer/google.svg";
import facebook from "../../../public/images/footer/facebook.svg";
import inst from "../../../public/images/footer/inst.svg";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Router, useRouter } from "next/router";

const Footer = () => {
  const chunkSize = [3, 3, 4];
  const { t } = useTranslation();

  const chunks = useMemo(() => {
    let start = 0;
    return chunkSize.map((size) => {
      const chunk = footerData.slice(start, start + size);
      start += size;
      return chunk;
    });
  }, [footerData, chunkSize]);
  const router = useRouter();

  const getData = useMemo(() => {
    return chunks.map((chunk, index) => (
      // <div key={item.id} onClick={() => {
      //   router.push(${item.link})
      // }}>
      //   <h6 className={scss.mainBtns}>{t(item.title)}</h6>
      // </div>
      <div key={index} className={scss.content}>
        {index === 0 && <h2>compas</h2>}
        {chunk.map((item) => (
          <h3 className={scss.txt} key={item.id}  onClick={() => {
            router.push(`${item.link}`)
          }}>
            {t(item.title)}
          </h3>
        ))}
      </div>
    ));
  }, [chunks]);

  return (
    <div className={scss.wrapper}>
      <div className={scss.box_content}>
        <div className={scss.box}>{getData}</div>
        <div className={scss.img}>
          <h4>compas</h4>
          <div className={scss.line2}></div>
          <div>
            <Image src={google} alt="" />
            <Image src={facebook} alt="" />
            <Image src={inst} alt="" />
          </div>
        </div>
      </div>
      <div className={scss.line}></div>
    </div>
  );
};

export default Footer;
