import scss from '../../components/vakansii/ConstVakansii.module.scss'
import { useMemo, useState } from 'react'
import { IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Image from 'next/image'
import Link from 'next/link';

interface VakansiiItem {
  title: string;
  online: string;
  name: string;
  price: string;
  place: string;
  date: string;
  time: string;
  id: number;
  selected: boolean;
}

const Vakansii: React.FC = () => {
  const { t } = useTranslation();
  const [arrVakansii, setArrVakansii] = useState<VakansiiItem[]>([
    {
      id: 1,
      title: 'Solid Academy',
      online: 'Онлайн',
      name: t("vakansii.title"),
      price: "250$ /",
      time: t("vakansii.time"),
      place: "Кыргызстан, Бишкек",
      date: '20 мая, 2023',
      selected: false
    },
    {
      id: 2,
      title: 'Solid Academy',
      online: 'Онлайн',
      name: t("vakansii.title"),
      price: "250$ /",
      time: t("vakansii.time"),
      place: "Кыргызстан, Бишкек",
      date: '20 мая, 2023',
      selected: false
    },
    {
      id: 3,
      title: 'Solid Academy',
      online: 'Онлайн',
      name: t("vakansii.title"),
      price: "250$ /",
      time: t("vakansii.time"),
      place: "Кыргызстан, Бишкек",
      date: '20 мая, 2023',
      selected: false
    },
    {
      id: 4,
      title: 'Solid Academy',
      online: 'Онлайн',
      name: t("vakansii.title"),
      price: "250$ /",
      time: t("vakansii.time"),
      place: "Кыргызстан, Бишкек",
      date: '20 мая, 2023',
      selected: false
    },
    {
      id: 5,
      title: 'Solid Academy',
      online: 'Онлайн',
      name: t("vakansii.title"),
      price: "250$ /",
      time: t("vakansii.time"),
      place: "Кыргызстан, Бишкек",
      date: '20 мая, 2023',
      selected: false
    },
    {
      id: 6,
      title: 'Solid Academy',
      online: 'Онлайн',
      name: t("vakansii.title"),
      price: "250$ /",
      time: t("vakansii.time"),
      place: "Кыргызстан, Бишкек",
      date: '20 мая, 2023',
      selected: false
    },
    {
      id: 7,
      title: 'Solid Academy',
      online: 'Онлайн',
      name: t("vakansii.title"),
      price: "250$ /",
      time: t("vakansii.time"),
      place: "Кыргызстан, Бишкек",
      date: '20 мая, 2023',
      selected: false
    },
    {
      id: 8,
      title: 'Solid Academy',
      online: 'Онлайн',
      name: t("vakansii.title"),
      price: "250$ /",
      time: t("vakansii.time"),
      place: "Кыргызстан, Бишкек",
      date: '20 мая, 2023',
      selected: false
    }
  ]);
  const handleClick = (id: number): void => {
    setArrVakansii((prevArr) =>
      prevArr.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };
  const renderVakansii = useMemo(() => (
    arrVakansii.map((e) => (
      <div className={scss.wrapper} key={e.id}>
        <div className={scss.wrapper__top}>
          <div className={scss.top__photo}>
            <label>
              <Image
                src="./images/SectionIcon/Mask group.svg"
                alt='Фото'
                width={40}
                height={40} />
              <div>
                <p>{e.title}</p>
                <span>{e.online}</span>
              </div>
            </label>
          </div>
          <IconButton
            aria-label="delete"
            size="large"
            onClick={() => handleClick(e.id)}
          >
            <Image
              key={e.id}
              src={
                e.selected
                  ? './images/SectionIcon/bookmark2.svg'
                  : './images/SectionIcon/bookmark.svg'
              }
              alt="Избранное"
              className=""
              width={20}
              height={20}
            />
          </IconButton>
        </div>
        <div className={scss.wrapper__middle}>
          <h1>{t("vakansii.title")}</h1>
          <p>{e.price} {t("vakansii.time")}</p>
          <span>{e.place}</span>
        </div>
        <div className={scss.wrapper__bottom}>
          <span>{e.date}</span>
          <Link href='/VakansiesMore' legacyBehavior>
            <button className={scss.button}>{t("vakansii.podrobnee")}</button>
          </Link>
        </div>
      </div>
    ))
  ), [arrVakansii, t]);

  return <>{renderVakansii}</>;
};

export default Vakansii;