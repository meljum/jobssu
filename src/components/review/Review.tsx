import React from 'react'
import css from './ReviewT.module.scss'
import useReviewCard from './ReviewCard'
import { useTranslation } from 'react-i18next';

const Review:React.FC = () => {
  const renderReviewCard = useReviewCard("")
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