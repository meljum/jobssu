import React, { useMemo } from 'react'
import Slider from 'react-slick';
import css from './NewsSlider.module.scss'
import { useTranslation } from 'react-i18next';
import { SliderData } from '@/constants/Slider';
import Image from 'next/image';
import pic from '../../../public/images/pic2.svg'
import prev from '../../../public/images/Vector.svg'
import next from '../../../public/images/Vector (1).svg'          
import 'slick-carousel/slick/slick.css';
import Link from 'next/link'
import 'slick-carousel/slick/slick-theme.css';

const NewsSlider: React.FC = () => {
  const { t } = useTranslation();
  const sliderSettings = {    

    Infinite:true,
    speed: 500,
    slidesToShow: 2.3334,
    slidesToScroll: 1,
    prevArrow: <button className={css.arr1}><Image className={css.arr} src={prev} width={15} height={59} alt='img'/></button>,
    nextArrow: <button className={css.arr2}><Image className={css.arr}  src={next} width={15} height={59} alt='img'/></button>
  }
  const renderSlider = useMemo(() => {
    return SliderData.map((e) => (
      <div key={e.id} className={css.wrapper}>
        <div className={css.right}>

          <div key={e.id}  className={css.card}>
            <Image src={pic} width={286} height={164} alt='img' />
            <p>{t(e.text)}</p>
          </div>
        </div>
      </div>
    ))
  }, [t])
  return (
    <div className= ' container'>
      <div className={css.wrap}>
        <div className={css.left}>
          <h1>{t("slider.title")}</h1>
          <p>{t("slider.text")}</p>
          <Link href='/NewsPage'>
          <button>{t("slider.btn")}</button>
          </Link>
        </div>
        <div className={css.slider}>
          <Slider {...sliderSettings}>
            {renderSlider}
            {renderSlider}
            {renderSlider}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default NewsSlider