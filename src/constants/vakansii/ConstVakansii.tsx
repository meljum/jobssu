import scss from './ConstVakansii.module.scss'
import { useMemo, useTransition } from 'react'
import { IconButton, Stack } from '@mui/material';
import Buttonn from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import Image from 'next/image'

interface VakansiiItem {
  title: string;
  online: string;
  name: string;
  price: string;
  place: string;
  date: string;
  time: string;
  id: number;
}

const Vakansii: React.FC = () => {
  const { t } = useTranslation();
  const arrVakansii: VakansiiItem[] = [
    {
      id: 1,
      title: 'Solid Academy',
      online: 'Онлайн',
      name: t("vakansii.title"),
      price: "250$ /",
      time: t("vakansii.time"),
      place: "Кыргызстан, Бишкек",
      date: '20 мая, 2023'
    },
    {
      id: 2,
      title: 'Solid Academy',
      online: 'Онлайн',
      name: t("vakansii.title"),
      price: "250$ /",
      time: t("vakansii.time"),
      place: "Кыргызстан, Бишкек",
      date: '20 мая, 2023'
    },
    {
      id: 3,
      title: 'Solid Academy',
      online: 'Онлайн',
      name: t("vakansii.title"),
      price: "250$ /",
      time: t("vakansii.time"),
      place: "Кыргызстан, Бишкек",
      date: '20 мая, 2023'
    },
    {
      id: 4,
      title: 'Solid Academy',
      online: 'Онлайн',
      name: t("vakansii.title"),
      price: "250$ /",
      time: t("vakansii.time"),
      place: "Кыргызстан, Бишкек",
      date: '20 мая, 2023'
    },
    {
      id: 5,
      title: 'Solid Academy',
      online: 'Онлайн',
      name: t("vakansii.title"),
      price: "250$ /",
      time: t("vakansii.time"),
      place: "Кыргызстан, Бишкек",
      date: '20 мая, 2023'
    },
    {
      id: 6,
      title: 'Solid Academy',
      online: 'Онлайн',
      name: t("vakansii.title"),
      price: "250$ /",
      time: t("vakansii.time"),
      place: "Кыргызстан, Бишкек",
      date: '20 мая, 2023'
    },
    {
      id: 7,
      title: 'Solid Academy',
      online: 'Онлайн',
      name: t("vakansii.title"),
      price: "250$ /",
      time: t("vakansii.time"),
      place: "Кыргызстан, Бишкек",
      date: '20 мая, 2023'
    },
    {
      id: 8,
      title: 'Solid Academy',
      online: 'Онлайн',
      name: t("vakansii.title"),
      price: "250$ /",
      time: t("vakansii.time"),
      place: "Кыргызстан, Бишкек",
      date: '20 мая, 2023'
    }
  ];

  const renderVakansii = useMemo(() => (
    arrVakansii.map((e) => (
      <div className={scss.wrapper} key={e.id}>
        <div className={scss.wrapper__top}>
          <div className={scss.top__photo}>
            <label>
              <Image
              src="./images/vakansii/Mask group.svg"
              alt='Фото'
              width={40}
              height={40}/>
              <div>
                <p>{e.title}</p>
                <span>{e.online}</span>
              </div>
            </label>
          </div>
          <IconButton aria-label="delete" size="large">
            <Image
              src="/images/vakansii/bookmark.svg"
              alt='Избранное'
              className=''
              width={20}
              height={20} />
          </IconButton>
        </div>
        <div className={scss.wrapper__middle}>
          <h1>{e.name}</h1>
          <p>{e.price} {e.time}</p>
          <span>{e.place}</span>
        </div>
        <div className={scss.wrapper__bottom}>
          <span>{e.date}</span>
          <Buttonn className={scss.button} variant="contained">{t("vakansii.podrobnee")}</Buttonn>
        </div>
      </div>
    ))
  ), [arrVakansii]);

  return <>{renderVakansii}</>;
};

export default Vakansii;