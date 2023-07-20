import React from 'react'
import css from './Review.module.scss'
import useReviewCard from '../review/ReviewCard'
import { useTranslation } from 'react-i18next';

function Review() {
  const renderReviewCard = useReviewCard(arguments)
  const { t } = useTranslation();

  return (
    <div className='container'>
    <div className={css.main}>
      
        <h1 className={css.title}>{t("review.title")}</h1>
        <div className={css.wrapper}>
          {renderReviewCard}
        </div>
      </div>

    </div>
  )
}

export default Review