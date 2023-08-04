import React from 'react'
import scss from './Main.module.scss'
import first__cercle from "../../../public/images/main/cercle11.svg"
import second__cercle from "../../../public/images/main/cercle22.svg"
import third__cercle from "../../../public/images/main/cercle33.svg"
import Image from 'next/image'
import { MainDataArr } from '@/constants/Main'
import { useTranslation } from 'react-i18next'
export interface mainTitleProps {
    id: number,
    title: string,
};
interface IMain {
    array: mainTitleProps[];
};
const Main: React.FC<IMain> = ({ array }) => {
    const { t } = useTranslation();
    const renderData_Main = React.useMemo(
        () =>
            MainDataArr.map((item) => (
                <div key={item.id} className={scss.cercle}>
                    <h2>{item.quantity}</h2>
                    <p>{t(item.title)}</p>
                </div>
            )), [t]);
    const render = React.useMemo(() => (
        array.map(({ id, title }) => (
            <div key={id} className={scss.wrapper}>
                <h1>{t(title)}</h1>
                <div className={scss.wrapper__cercles}>
                    <Image src={first__cercle} width={173} height={173} alt='cercle_image' />
                    <Image src={second__cercle} width={173} height={173} alt='cercle_image' />
                    <Image src={third__cercle} width={173} height={173} alt='cercle_image' />
                </div>
                <div className={scss.wrapper__text}>
                    {renderData_Main}
                </div>
                <div className={scss.wrapper__wave}>
                    <div className={scss.wrapper__wave_one}></div>
                    <div className={scss.wrapper__wave_two}></div>
                    <div className={scss.wrapper__wave_three}></div>
                </div>
            </div>
        ))
    ), [t]);
    return (
        render
    );
};

export default Main;
