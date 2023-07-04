import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../i18next/i18next";
import Image from "next/image";
import Link from "next/link";
import scss from "./Header.module.scss";
import { links } from "../../constants/header";
import masseges from "../../constants/masseges";
import dropdownItems from "@/constants/dropdownItems";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOp, setIsDropdownOp] = useState(false);
  const [isSeeker, setIsSeeker] = useState(false);
  const [isEmployer, setIsEmployer] = useState(false);
  const handleClick = (lang: string | undefined) => {
    i18n.changeLanguage(lang);
  };

  const handleLogout = () => {
    setIsDropdownOpen(false);
  };

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    setIsDropdownOpen(false);
    setIsDropdownOp(false);
  };

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
    setIsOpen(false);
    setIsDropdownOp(false);
  };

  const handleToggleDrop = () => {
    setIsDropdownOp((prevIsDropdownOp) => !prevIsDropdownOp);
    setIsOpen(false);
    setIsDropdownOpen(false);
  };
  const handleToggleUserType = (
    isEmployerClicked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setIsEmployer(isEmployerClicked);
    setIsSeeker(!isEmployerClicked);
  };
  const renderLinks = useMemo(() => {
    return links.map((item) => (
      <Link key={item.id} href={item.to} legacyBehavior>
        <a className={scss.navLink}>{t(item.label) || ""}</a>
      </Link>
    ));
  }, [t]);

  const renderMasseges = useMemo(
    () =>
      masseges.map((item) => (
        <div key={item.id} title={item.title} className={scss.divMasseges}>
          <Image
            src="/images/header/Frame 50.svg"
            alt={item.title}
            width={24}
            height={24}
          />
          {item.title}
        </div>
      )),
    []
  );

  const dropdownItemsJSX = useMemo(() => {
    return dropdownItems.map((item, index) => (
      <Link key={index} href={item.href} passHref>
        <p>{item.label}</p>
      </Link>
    ));
  }, [dropdownItems]);
  return (
    <div className={scss.header}>
      <div className={scss.container}>
        <Link href="/" passHref>
          <p>compas</p>
        </Link>
        <div className={scss.dropdown}>
          <Image
            className={scss.burger}
            src="/images/header/Group 8.svg"
            alt="Header Image"
            width={21}
            height={10}
            onClick={handleToggle}
          />
          {isOpen && (
            <>
              <div className={scss.hr}></div>
              <div className={scss.dropdown_content}>{renderLinks}</div>
            </>
          )}
        </div>
        <Link href="/JobsPage" legacyBehavior>
          <a className={`${scss.vak} ${scss.blackText}`}>
            {t("header.title4")}
          </a>
        </Link>
        <Link href="/ContestsPage" legacyBehavior>
          <a className={`${scss.konk} ${scss.blackText}`}>
            {t("header.title6")}
          </a>
        </Link>
        <div className={scss.input}>
          <img
            src="/images/header/search.svg"
            className={scss.main__icon}
            alt="search"
          />
          <input
            className={scss.place}
            placeholder={t("header.plaseholder") || ""}
          />
          <select className={scss.sel}>
            <option>{t("header.title4")}</option>
            <option>Резюме</option>
            <option>Компания</option>
          </select>
          <div className={scss.serch}>
            <a>{t("header.plaseholder1") || ""}</a>
          </div>
        </div>
        <span
          onClick={() => handleClick(i18n.language === "ru" ? "kg" : "ru")}
          className={scss.translate}
        >
          рус/кыр
        </span>
        <div className={scss.dropdownMassege}>
          <Image
            src={
              isDropdownOp
                ? "/images/header/notificationActiv.svg"
                : "/images/header/notification.svg"
            }
            className={scss.notific}
            alt="Notification"
            width={25}
            height={25}
            onClick={handleToggleDrop}
          />
          {isDropdownOp && (
            <>
              <div className={scss.hr1}></div>
              <div className={scss.dropdownMassege_content}>
                <div className={scss.dropMassege}>{renderMasseges}</div>
                <div className={scss.btn}>
                  <Link href="/NotificationsPage" passHref legacyBehavior>
                    <a>Посмотрите все</a>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
        <Image
          src="/images/header/messages-2.svg"
          className={scss.masseges}
          alt="Messages"
          width={25}
          height={25}
        />
        <Image
          src="/images/header/archive-tick.svg"
          className={scss.archive}
          alt="Archive"
          width={25}
          height={25}
        />
        <div className={scss.dropdown_user}>
          <Image
            src={
              isDropdownOpen
                ? "/images/header/GroupActiv 179.svg"
                : "/images/header/Group 179.svg"
            }
            className={scss.group179}
            alt="Group 179"
            width={35}
            height={45}
            onClick={handleToggleDropdown}
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />

          {isDropdownOpen && (
            <div className={scss.dropdownUser_content}>
              <div className={scss.dropdownUser_header}>
                <p>User_name</p>
                <a
                  className={isEmployer ? scss.employerActive : ""}
                  onClick={() => handleToggleUserType(true)}
                >
                  Работодатель
                </a>{" "}
                <hr className={scss.verticalLine} />{" "}
                <a
                  className={isSeeker ? scss.seekerActive : ""}
                  onClick={() => handleToggleUserType(false)}
                >
                  Соискатель
                </a>
                <hr />
              </div>
              <div className={isSeeker ? scss.dropdown_add : scss.dropdown_add}>
                {dropdownItemsJSX}
              </div>
              <div className={scss.btn}>
                <a onClick={handleLogout}>Выйти</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
