import React from 'react'
import scss from './Card.module.scss'
import icon1 from '../../images/CardIcon/bag.svg'
import icon2 from '../../images/CardIcon/calendar.svg'
import icon3 from '../../images/CardIcon/houses.svg'
import icon4 from '../../images/CardIcon/location.svg'
import icon5 from '../../images/CardIcon/time.svg'
import vector from '../../images/CardIcon/Vector (1).svg'
import { CardData } from '../../constants/CardData'

function Card() {
    return (
        <div className={scss.cards}>
        {
            CardData.map((item) => (
                <div className={scss.wrapper} key={item.id}>
                    <div className={scss.card_info} >
                        <img className={scss.logo} src={item.img} alt="Logo" />
                        <div className={scss.text}>
                            <div className={scss.text_top}>
                                <div className={scss.top__h5}>
                                    <h5>{item.zagalovok}</h5>
                                    <img src={vector} alt="" />
                                </div>
                                <div className={scss.description}>
                                    <div className={scss.description_left}>
                                        <div className={scss.left_top}>
                                            <img src={icon1} alt="icon" />
                                            <div className={scss.left_text}>
                                                <p>Стаж работы</p>
                                                <span>{item.staj_raboty}</span>
                                            </div>
                                        </div>
                                        <div className={scss.left_bottom}>
                                            <img src={icon2} alt="Icon" />
                                            <div className={scss.bottom_text}>
                                                <p>График работы</p>
                                                <span>{item.grafik_raboty}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={scss.description_right}>
                                        <div className={scss.right_top}>
                                            <img src={icon3} alt="" />
                                            <p>Evyap group</p>
                                        </div>
                                        <div className={scss.right_middle}>
                                            <img src={icon4} alt="" />
                                            <p>{item.location}</p>
                                        </div>
                                        <div className={scss.right_bottom}>
                                            <img src={icon5} alt="" />
                                            <p>{item.time}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={scss.button}>
                                <div className={scss.button_text}>
                                    <div className={scss.number}>
                                        <span className={scss.from_sub}>От</span>
                                        <h5 className={scss.from}>{item.price_from}</h5>
                                    </div>
                                    <div className={scss.number}>
                                        <span className={scss.before_sub}>До</span>
                                        <h5 className={scss.before}>{item.price_before}</h5>
                                        <span className={scss.som}>сом</span>
                                    </div>
                                </div>
                                <button>Отправить резюме</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
        </div>
    )
}

export default Card