import React, { useState } from 'react';
import scss from './FilterExpands.module.scss';
import Button from '../button/Button';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

interface CardItem {
    id: number;
    img: string;
    zagalovok: string;
    staj_raboty: string;
    grafik_raboty: string;
    location: string;
    time: string;
    price_from: string;
    price_before: string;
  }
  
  interface FilterExpandsProps {
    cardData: CardItem[];
  }
  
  function FilterExpandsds({ cardData }: FilterExpandsProps) {
    const { t } = useTranslation();
  
    const [buttonDropdown, setButtonDropdown] = useState([false, false, false, false, false, false]);
  
    const handlePodropbostiButtonClick = (index: number) => {
      setButtonDropdown((prev) =>
        prev.map((value, i) => (i === index ? !value : value))
      );
    };
  
    const handleFilterByPrice = (price: number) => {
      const filteredCards: CardItem[] = cardData.filter(
        (card) => parseInt(card.price_before.replace(/\s+/g, '')) < price
      );
      console.log(filteredCards)
    };
    
    return (
        <div className={scss.wrapper}>
            <div className={scss.wrapper_top}>
                <Button text={t("filtation.lastone")} />
                <div className={scss.top_checkboxes}>
                    <label>
                        <input type="checkbox" />
                        <span>{t("filtation.all")}</span>
                    </label>
                </div>
                <div className={scss.top_checkboxes}>
                    <label>
                        <input type="checkbox" />
                        <span>{t("filtation.24")}</span>
                    </label>
                </div>
                <div className={scss.top_checkboxes}>
                    <label>
                        <input type="checkbox" />
                        <span>{t("filtation.thirdday")}</span>
                    </label>
                </div>
                <div className={scss.top_checkboxes}>
                    <label>
                        <input type="checkbox" />
                        <span>{t("filtation.nedely")}</span>
                    </label>
                </div>
                <div className={scss.top_checkboxes}>
                    <label>
                        <input type="checkbox" />
                        <span>{t("filtation.mesac")}</span>
                    </label>
                </div>
            </div>
            <div className={scss.wrapper_bottom}>
                <div className={scss.bottom_podrobnosti}>
                    <div className={scss.podrobnosti_title}>
                        <label
                            className={scss.title_label}
                            onClick={() => handlePodropbostiButtonClick(0)}
                        >
                            <Button text='Зарплата' />
                            <Image
                                style={{
                                    transform: `rotate(${buttonDropdown[0] ? '180' : '0'}deg)`,
                                    transition: 'transform 0.3s ease',
                                }}
                                src="/images/filter/Vector (3).svg"
                                alt={'bird'}
                                width={13}
                                height={13}
                            />
                        </label>
                        {buttonDropdown[0] && (
                            <div className={scss.podropbosti__buttons}>
                                <label onClick={() => handleFilterByPrice(30000)}>
                                    <input type="checkbox" />
                                    <span>{t('filtation.zarplata.30')}</span>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <span>30 000 - 50 000 сом</span>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <span>50 000 - 80 000 сом</span>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <span>{t("filtation.zarplata.vyse")}</span>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <span>{t("filtation.zarplata.dollar")}</span>
                                </label>
                            </div>
                        )}
                    </div>
                    <div className={scss.podrobnosti_title}>
                        <label className={scss.title_label}
                            onClick={() => handlePodropbostiButtonClick(1)}>
                            <Button text='Города' />
                            <Image
                                style={{
                                    transform: `rotate(${buttonDropdown[1] ? '180' : '0'}deg)`,
                                    transition: 'transform 0.3s ease',
                                }}
                                src="/images/filter/Vector (3).svg"
                                alt={'bird'}
                                width={13}
                                height={13}
                            />
                        </label>
                        {buttonDropdown[1] && (
                            <div className={scss.podropbosti__buttons}>
                                <label>
                                    <input type="checkbox" />
                                    <span>Кыргызстан</span>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <span>Ош</span>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <span>Бишкек</span>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <span>Джалал-Абад</span>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <span>Нарын</span>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <span>Ыссык-Куль</span>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <span>Баткен</span>
                                </label>
                            </div>
                        )}
                    </div>
                    <div className={scss.podrobnosti_title}>
                        <label className={scss.title_label}
                            onClick={() => handlePodropbostiButtonClick(2)}>
                            <Button text='График работы' />
                            <Image
                                style={{
                                    transform: `rotate(${buttonDropdown[2] ? '180' : '0'}deg)`,
                                    transition: 'transform 0.3s ease',
                                }}
                                src="/images/filter/Vector (3).svg"
                                alt={'bird'}
                                width={13}
                                height={13}
                            />
                        </label>
                        {buttonDropdown[2] && (
                            <div className={scss.podropbosti__buttons}>
                                <label>
                                    <input type="checkbox" />
                                    <span>{t("filtation.schedule.fullDay")}</span>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <span>{t("filtation.schedule.shifDay")}</span>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <span>{t("filtation.schedule.DistantWork")}</span>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <span>{t("filtation.schedule.FlexibleWork")} </span>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <span>{t("filtation.schedule.shitMetod")}</span>
                                </label>
                            </div>
                        )}
                    </div>
                    <div className={scss.podrobnosti_title}>
                        <label className={scss.title_label} onClick={() => handlePodropbostiButtonClick(3)}>
                            <Button text={t("filtation.specializatiion2")} />
                            <Image
                                style={{
                                    transform: `rotate(${buttonDropdown[3] ? '180' : '0'}deg)`,
                                    transition: 'transform 0.3s ease',
                                }}
                                src="/images/filter/Vector (3).svg"
                                alt={'bird'}
                                width={13}
                                height={13}
                            />
                        </label>
                        {buttonDropdown[3] && (
                            <div className={scss.podropbosti__buttons}>
                                <label id={scss.buttons_flexStart}>
                                    <input type="checkbox" />
                                    <span>{t("filtation.specialization.meneger")}</span>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <span>Бухгалтер</span>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <span>{t("filtation.specialization.seller")}</span>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <span>Администратор</span>
                                </label>
                            </div>
                        )}
                    </div>
                    <div className={scss.podrobnosti_title}>
                        <label className={scss.title_label} onClick={() => handlePodropbostiButtonClick(4)}>
                            <Button text={t("filtation.stazh")} />
                            <Image
                                style={{
                                    transform: `rotate(${buttonDropdown[4] ? '180' : '0'}deg)`,
                                    transition: 'transform 0.3s ease',
                                }}
                                src="/images/filter/Vector (3).svg"
                                alt={'bird'}
                                width={13}
                                height={13}
                            />
                        </label>
                        {buttonDropdown[4] && (
                            <div className={scss.podropbosti__buttons}>
                                <label>
                                    <input type="checkbox" />
                                    <span>{t("filtation.experience.dontMetter")} </span>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <span>{t("filtation.experience.from1")}</span>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <span>{t("filtation.experience.nohave")}</span>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <span>{t("filtation.experience.from3")}</span>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <span>{t("filtation.experience.from7")}</span>
                                </label>
                            </div>
                        )}
                    </div>
                    <div className={scss.podrobnosti_title}>
                        <label className={scss.title_label} onClick={() => handlePodropbostiButtonClick(5)}>
                            <Button text={t("filtation.spec")} />
                            <Image
                                style={{
                                    transform: `rotate(${buttonDropdown[5] ? '180' : '0'}deg)`,
                                    transition: 'transform 0.3s ease',
                                }}
                                src="/images/filter/Vector (3).svg"
                                alt={'bird'}
                                width={13}
                                height={13}
                            />
                        </label>
                        {buttonDropdown[5] && (
                            <div className={scss.podropbosti__buttons}>
                                <label>
                                    <input type="checkbox" />
                                    <span>{t("filtation.special.students")} </span>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <span>{t("filtation.special.pensioner")}</span>
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    <span>{t("filtation.special.disable")}</span>
                                </label>
                            </div>
                        )}
                    </div>
                </div>
                <button className={scss.bottom_filterbtn}>{t("filtation.special.button2")}</button>
            </div>
        </div>
    );
}

export default FilterExpandsds;