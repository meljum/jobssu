import Button from '../../components/button/Button'
import zametki from '../../../public/images/vakansii/bookmark.svg'
import scss from './ConstVakansii.module.scss'
import { useMemo } from 'react'
import { IconButton, Stack } from '@mui/material';
import Buttonn from '@mui/material/Button';

interface VakansiiItem {
  title: string;
  online: string;
  name: string;
  price: string;
  place: string;
  date: string;
}

const Vakansii: React.FC = () => {
  const arrVakansii: VakansiiItem[] = [
    {
      title: 'Solid Academy',
      online: 'Онлайн',
      name: "Требуется уборщики в компанию",
      price: "250$ / за час",
      place: "Кыргызстан, Бишкек",
      date: '20 мая, 2023'
    },
    {
      title: 'Solid Academy',
      online: 'Онлайн',
      name: "Требуется уборщики в компанию",
      price: "250$ / за час",
      place: "Кыргызстан, Бишкек",
      date: '20 мая, 2023'
    },

    {
      title: 'Solid Academy',
      online: 'Онлайн',
      name: "Требуется уборщики в компанию",
      price: "250$ / за час",
      place: "Кыргызстан, Бишкек",
      date: '20 мая, 2023'
    },
    {
      title: 'Solid Academy',
      online: 'Онлайн',
      name: "Требуется уборщики в компанию",
      price: "250$ / за час",
      place: "Кыргызстан, Бишкек",
      date: '20 мая, 2023'
    },
    {
      title: 'Solid Academy',
      online: 'Онлайн',
      name: "Требуется уборщики в компанию",
      price: "250$ / за час",
      place: "Кыргызстан, Бишкек",
      date: '20 мая, 2023'
    },
    {
      title: 'Solid Academy',
      online: 'Онлайн',
      name: "Требуется уборщики в компанию",
      price: "250$ / за час",
      place: "Кыргызстан, Бишкек",
      date: '20 мая, 2023'
    },
    {
      title: 'Solid Academy',
      online: 'Онлайн',
      name: "Требуется уборщики в компанию",
      price: "250$ / за час",
      place: "Кыргызстан, Бишкек",
      date: '20 мая, 2023'
    },
    {
      title: 'Solid Academy',
      online: 'Онлайн',
      name: "Требуется уборщики в компанию",
      price: "250$ / за час",
      place: "Кыргызстан, Бишкек",
      date: '20 мая, 2023'
    },
  ];

  const renderVakansii = useMemo(() => (
    arrVakansii.map((e) => (
      <div className={scss.wrapper}>
        <div className={scss.wrapper__top}>
          <div className={scss.top__photo}>
            <label>
              <img src='./images/vakansii/Mask group.svg' alt="Фото" />
              <div>
                <p>{e.title}</p>
                <span>{e.online}</span>
              </div>
            </label>
          </div>
          <IconButton aria-label="delete" size="large">
            <img src="./images/vakansii/bookmark.svg" alt="" />
          </IconButton>
        </div>
        <div className={scss.wrapper__middle}>
          <h1>{e.name}</h1>
          <p>{e.price}</p>
          <span>{e.place}</span>
        </div>
        <div className={scss.wrapper__bottom}>
          <span>{e.date}</span>
          <Buttonn className={scss.button} variant="contained">Подробнее</Buttonn>
        </div>
      </div>
    ))
  ), [arrVakansii]);

  return <>{renderVakansii}</>;
};

export default Vakansii;