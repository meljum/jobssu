import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import "../../i18next/i18next";
import Image from "next/image";
import Link from "next/link";
import scss from "./Header.module.scss";
import { links } from "../../constants/header";
import masseges from "../../constants/masseges";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOp, setIsDropdownOp] = useState(false);
  const [isDropdOp, setIsDropdOp] = useState(false);
  const [isSeeker, setIsSeeker] = useState(false);
  const [isEmployer, setIsEmployer] = useState(false);
  const [isSelDropdownOpen, setIsSelDropdownOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("/images/header/messages-1.svg");
  const [image1Src, setImage1Src] = useState(
    "/images/header/archive-tick1.svg"
  );

  function change1Image(event: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    event.currentTarget.src = "/images/header/archive-tick1.svg";
  }

  function restore1Image(
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) {
    event.currentTarget.src = "/images/header/archive-tick.svg";
  }
  function changeImage(event: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    event.currentTarget.src = "/images/header/messages-1.svg";
  }

  function restoreImage(event: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    event.currentTarget.src = "/images/header/messages-2.svg";
  }

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
  const dropdownItems = [
    {
      href: "/JobsPage",
      label: isSeeker ? " Добавить резюме" : "Добавить вакансию",
    },
    { href: "/Profile", label: "Профиль" },
    { href: "/HelpPage", label: "Помощь" },
    { href: "/Settings", label: "Настройки" },
  ];

  const dropdownItemsJSX = useMemo(() => {
    return dropdownItems.map((item, index) => (
      <Link key={index} href={item.href} passHref>
        <p>{item.label}</p>
      </Link>
    ));
  }, [dropdownItems]);

  const toggleDropdown = () => {
    setIsSelDropdownOpen((prevState) => !prevState);
  };

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
            {t("header.heder_jobs")}
          </a>
        </Link>
        <Link href="/ContestsPage" legacyBehavior>
          <a className={`${scss.konk} ${scss.blackText}`}>
            {t("header.heder_contests")}
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
            placeholder={t("header.header_plaseholder") || ""}
          />
          <div className={scss.sel}>
            <div className={scss.selectedOption} onClick={toggleDropdown}>
              <a>{t("header.heder_jobs")}</a>
              <Image
                className={scss.ArrowDr}
                src="/images/header/ArrowDropDownIcon.svg"
                alt="Dropdown Icon"
                width={11}
                height={11}
              />
            </div>
            {isSelDropdownOpen && (
              <div className={scss.dropdownOptions}>
                <div className={scss.dropdownOptions_a}>
                  <Link href="/JobsPage" passHref legacyBehavior>
                    <a>Резюме</a>
                  </Link>
                </div>
                <div className={scss.dropdownOptionsA}>
                  <Link href="/CompaniesPage" passHref legacyBehavior>
                    <a>Компания</a>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className={scss.serch}>
            <a>{t("header.header_search") || ""}</a>
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
        <Link href="/NotificationsPage" passHref>
          <div>
            <Image
              src="/images/header/messages-2.svg"
              className="messages"
              alt="Messages"
              width={25}
              height={25}
              onMouseOver={changeImage}
              onMouseOut={restoreImage}
            />
          </div>
        </Link>

        <Link href="/FavoritesPage" passHref>
          <div>
            <Image
              src="/images/header/archive-tick.svg"
              alt="Archive"
              width={25}
              height={25}
              onMouseOver={change1Image}
              onMouseOut={restore1Image}
            />
          </div>
        </Link>
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
            style={{
              objectFit: "contain",
              // width: "auto",
              // height: "auto",
            }}
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
