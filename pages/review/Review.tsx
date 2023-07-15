import React from 'react'
import css from './Review.module.scss'
import useReviewCard from '../review/Review'
import { useTranslation } from 'react-i18next';

function Review() {
  const renderReviewCard = useReviewCard()
  const { t } = useTranslation();

  return (
    <div className={css.main}>
      <div className='container'>
        <h1 className={css.title}>{t("review.title")}</h1>
        <div className={css.wrapper}>
          {renderReviewCard}
        </div>
      </div>

    </div>
  )
}

export default Review