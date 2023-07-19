import React, { useState } from 'react'
import css from './ReviewCard.module.scss'
import { useTranslation } from 'react-i18next';
import { useMemo } from "react"
import profilePic from '../../public/images/profilePic.svg'
import Image from "next/image";

interface reviewCardItem {
    text: string,
    btn: string,
    name: string,
    info: string,
    id: number
}
const ReviewCard: React.FC = () => {
    const { t } = useTranslation();
    const arrReviewCard: reviewCardItem[] = [
        {
            id: 1,
            text: t("review.text"),
            btn: t("review.btn"),
            name: t("review.name"),
            info: t("review.info")
        },
        {
            id: 2,

            text: t("review.text"),
            btn: t("review.btn"),
            name: t("review.name"),
            info: t("review.info")
        },
        {
            id: 3,

            text: t("review.text"),
            btn: t("review.btn"),
            name: t("review.name"),
            info: t("review.info")
        },
        {
            id: 4,
            text: t("review.text"),
            btn: t("review.btn"),
            name: t("review.name"),
            info: t("review.info")
        }
    ]
    const buttons = useMemo(() => { }, [])
    const renderReview = useMemo(() => (
        arrReviewCard.map((e) => (
            <div className={css.card} key={e.id} >
                <h1 className={css.text}>{e.text}</h1>
                <div className={css.btn}>
                    <button>{e.btn}</button>
                </div>
                <div className={css.profile}>
                    <Image src={profilePic} width={48} height={48} alt='profile' />
                    <div className={css.user}>
                        <h1>{e.name}</h1>
                        <p>{e.info}</p>
                    </div>
                </div>
            </div>
        )
        )), [arrReviewCard])
    return <>{renderReview}</>
}


export default ReviewCard