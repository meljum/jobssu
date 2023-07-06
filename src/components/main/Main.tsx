import React from 'react'
import scss from './Main.module.scss'

const Main = () => {
    return (
        <div className={scss.wrapper}>
            <h1>Нанимайте онлай для <br />
                любой работы</h1>

            <div className={scss.cercles}>
                <img src="/images/main/cercle1.svg" alt="" />
                <img src="/images/main/cercle2.svg" alt="" />
                <img src="/images/main/cercle3.svg" alt="" />
            </div>

            <div className={scss.text}>
                <div>
                    <h2>860</h2>
                    <p>Вакансии</p>
                </div>
                <div>
                    <h2>29 345</h2>
                    <p>Резюме</p>
                </div>
                <div>
                    <h2>1 987</h2>
                    <p>Компаний </p>
                </div>
            </div>

            <div className={scss.wave}>
                <div className={scss.wave__one}></div>
                <div className={scss.wave__two}></div>
                <div className={scss.wave__three}></div>
            </div>
        </div>
    )
}

export default Main
