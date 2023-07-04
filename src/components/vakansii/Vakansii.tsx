import React, { MouseEvent, useState } from 'react';
import scss from './Vakansii.module.scss'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ConstVakansii from '@/constants/vakansii/ConstVakansii'
import { Button } from '@mui/material';
const options = [
    'Регионы',
    'Кыргызстан',
    'Ош',
    'Нарын',
    'Иссык-Куль',
    'Джалал-Абад',
    'Баткен',
    'Талас',
];

function Vakansii() {
    const renderVakansii = ConstVakansii();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedIndex, setSelectedIndex] = useState<number>(1);
    const open = Boolean(anchorEl);

    const handleClickListItem = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event: MouseEvent<HTMLElement>, index: number) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={scss.wrapper + ' cotnainer'}>
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
                            <label >
                                <ListItemText
                                    primary="Работа и вакансии в Бишкеке"
                                />
                                <img src="./images/vakansii/Vector (2).svg" alt="" />
                            </label>
                        </ListItem>
                    </List>
                    <Menu
                        id="lock-menu"
                        className={scss.menu}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'lock-button',
                            role: 'listbox',
                        }}
                    >
                        {options.map((option, index) => (
                            <MenuItem
                                key={option}
                                style={{
                                    color: index === 0 ? 'rgba(0, 0, 0, 1)' : 'inherit' && index === selectedIndex ? '#0057FF' : 'inherit',
                                    background: index === selectedIndex ? 'none' : 'none',
                                    opacity: index === 0 ? 1 : 1,
                                    fontSize: index === 0 ? '20px' : '16px',
                                    fontWeight: index === 0 ? '700' : '400',
                                }}
                                disabled={index === 0}
                                selected={index === selectedIndex}
                                onClick={(event) => handleMenuItemClick(event, index)}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
                <Button className={scss.button} variant='contained'>Все ваканции</Button>
            </div>
            <div className={scss.wrapper__bottom}>
                {renderVakansii}
            </div>
        </div>
    );
}

export default Vakansii;