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
  'Области',
  'Кыргызстан',
  'Ош',
  'Бишкек',
  'Иссык-Куль',
  'Джалал-Абад',
  'Баткен',
  'Талас',
  'Нарын'
];


function Vakansii() {
  const { t } = useTranslation();
  const renderVakansii = ConstVakansii(arguments);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [selectedOption, setSelectedOption] = useState<string>('Бишкек');
  const [disableSoftSign, setDisableSoftSign] = useState<boolean>(false);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event: MouseEvent<HTMLElement>, index: number) => {
    let selectedOptionWithoutSoftSign = options[index].replace("ь", "");

    if (selectedOptionWithoutSoftSign === t("vakansii.rabota")) {
      setDisableSoftSign(true);
      selectedOptionWithoutSoftSign = t("vakansii.rabota");
    } else {
      setDisableSoftSign(false);
    }

    setSelectedIndex(index);
    setSelectedOption(selectedOptionWithoutSoftSign);

    handleClose();
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
              >
              <label>
                <ListItemText
                  primary={t("vakansii.rabota")}
                  secondary={disableSoftSign ? selectedOption : `${selectedOption}e`}
                  />
                <Image
                  src="/images/SectionIcon/Vector.svg"
                  alt="Header Image"
                  onClick={handleClickListItem}
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
          >
            <div className={scss.menu__content}>
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  className={scss.menu__modal}
                  style={{
                    color: index === 0 ? 'rgba(0, 0, 0, 1)' : 'inherit' && index === selectedIndex ? '#0057FF' : "none",
                    background: 'none',
                    opacity: index === 0 ? 1 : 1,
                    fontSize: index === 0 ? '20px' : '16px',
                    fontWeight: index === 0 ? '700' : '400',
                    fontFamily: "Arial",
                    gap: '20px',
                    display: 'grid',
                    padding: '0px'
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
        <Link href='/JobsPage' legacyBehavior>
          <button className={scss.button}>{t("vakansii.vakansii")}</button>
        </Link>
      </div>
      <div className={`${scss.selectedOption} ${selectedOption && scss.selectedOptionActive}`}>
        {selectedOption}
      </div>
      <div className={scss.wrapper__bottom}>{renderVakansii}</div>
    </div>
  );
}

export default Vakansii;
