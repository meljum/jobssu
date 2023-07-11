import React from 'react'
import scss from './Section.module.scss'
import { SectionData } from '../../constants/SectionData'
import Image from 'next/image'
import { useMemo } from 'react'

const Section = () => {
    const getData = useMemo(() => SectionData.map(item => (
        <div className={scss.card} key={item.id}>
            <div className={scss.card__item}>
                <Image src={item.image} alt='Icon' />
                <div className={scss.text}>
                    <div className={scss.line}></div>
                    <p>{item.title}</p>
                </div>
            </div>
        </div>
    )), [])

    return (
        <div className="container">
            <div className={scss.wrapper}>
                <h2>Выберите раздел</h2>
                <div className={scss.cards}>
                    {getData}
                </div>
            </div>
        </div>
    )
}

export default Section