import React from "react";
import scss from "./Footer.module.scss";
import { footerData } from "@/constants/footer";
import Image from "next/image";
import google from "../../../public/images/footer/google.svg";
import facebook from "../../../public/images/footer/facebook.svg";
import inst from "../../../public/images/footer/inst.svg";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

const Footer: React.FC = () => {
  const chunkSize = [3, 2, 4];
  const { t } = useTranslation();
  const router = useRouter();

  const chunks = React.useMemo(() => {
    let start = 0;
    return chunkSize.map((size) => {
      const chunk = footerData.slice(start, start + size);
      start += size;
      return chunk;
    });
  }, [footerData, chunkSize]);

  const getData = React.useMemo(() => {
    return chunks.map((chunk, index) => (
      <div key={index} className={scss.content}>
        {index === 0 && <h2>compas</h2>}
        {index === 1 && <h3>{t("footer.employers_title")}</h3>}
        {index === 2 && <h3>{t("footer.applicants_title")}</h3>}
        {chunk.map((item) => (
          <h3 className={scss.txt} key={item.id} onClick={() => {
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
      <div className="container">
        <div className={scss.box_content}>
          <div className={scss.box}>{getData}</div>
          <div className={scss.img}>
            <h4>compas</h4>
            <div className={scss.line2}></div>
            <div>
              <Image src={google} width={24} height={24} alt="google_icon" />
              <Image src={facebook} width={21} height={21} alt="facebook_icon" />
              <Image src={inst} width={20} height={20} alt="instagram_icon" />
            </div>
          </div>
        </div>
      </div>
      <div className={scss.line}></div>
    </div>
  );
};

export default Footer;
