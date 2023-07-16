import React, { MouseEvent, useState, useEffect } from 'react';
import scss from './Vakansii.module.scss';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ConstVakansii from '../../constants/Vakansii/ConstVakansii';
import { useTranslation } from 'react-i18next';
import Image from "next/image";
import Link from 'next/link';

let options = [
  'Регионы',
  'Кыргызстан',
  'Ош',
  'Нарын',
  'Иссык-Куль',
  'Джалал-Абад',
  'Баткен',
  'Талас',
  'Показать все'
];

let additionalOptionsAdded = false;

function Vakansii() {
  const { t, i18n } = useTranslation();
  const renderVakansii = ConstVakansii(arguments);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1); // Updated initial state
  const [showScrollbar, setShowScrollbar] = useState<boolean>(false);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event: MouseEvent<HTMLElement>, index: number) => {
    if (index === options.length - 1 && !additionalOptionsAdded) {
      const additionalOptions = ['Нью Йорк', 'Лос Вегас', 'Америка'];
      options.splice(options.length - 1, 0, ...additionalOptions);
      additionalOptionsAdded = true;
      setShowScrollbar(true);
      setSelectedIndex(-1); // Reset the selected index
    } else {
      handleClose();
      setSelectedIndex(index);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (open) {
        setAnchorEl(null);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [open]);

  useEffect(() => {
    if (showScrollbar && anchorEl) {
      const menuElement = anchorEl.querySelector('.MuiMenu-paper');
      if (menuElement) {
        menuElement.classList.add(scss.menu__paper);
      }
    }
  }, [showScrollbar, anchorEl]);

  return (
    <div className={scss.wrapper + ' container'}>
      <div className={scss.wrapper__top}>
        <div className={scss.top__photo}>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{ bgcolor: 'background.paper' }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClickListItem}
            >
              <label>
                <ListItemText primary={t("vakansii.rabota")} />
                <Image
                  src="/images/SectionIcon/Vector.svg"
                  alt="Header Image"
                  width={16}
                  height={16}
                />
              </label>
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            className={scss.menu}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              className: showScrollbar ? scss.menu__paper : '',
            }}
          >
            <div className={scss.menu__content}>
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  className={index === options.length - 1 ? scss.lastItem : ''}
                  style={{
                    color: index === 0 ? 'rgba(0, 0, 0, 1)' : 'inherit' && index === selectedIndex ? '#0057FF' : 'none' && index === options.length - 1 ? '#0057FF' : 'none',
                    background: index === selectedIndex ? 'none' : 'none',
                    opacity: index === 0 ? 1 : 1,
                    fontSize: index === 0 ? '20px' : '16px',
                    fontWeight: index === 0 ? '700' : '400',
                    fontFamily: "Arial",
                    padding: '0px 16px',
                    paddingBottom: index === options.length - 1 ? '0px' : '',
                  }}
                  disabled={index === 0}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </div>
          </Menu>
        </div>
        <Link href='/VakansiesMore' legacyBehavior>
          <button className={scss.button}>{t("vakansii.vakansii")}</button>
        </Link>
      </div>
      <div className={scss.wrapper__bottom}>{renderVakansii}</div>
    </div>
  );
}

export default Vakansii;