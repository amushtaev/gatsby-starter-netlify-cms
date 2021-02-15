import React, {useState} from 'react'
import {
  IncludeContainerIndex, ItemsWrapper,
  MediumHeadingLeftRu,
  MediumSloganLeft,
  softcubeDark
} from "../pricing/styledComponents";
import {EasyIcon, EffectiveIcon, FastIcon} from "../../img/icons";
import AutomaticImgRectangle from "../../img/Rectangle.svg";
import {initialPlans} from "../pricing/stripe/plans";

const AutomaticCreat = () => {
  return (
    <IncludeContainerIndex>
      <div className='automatic-creat '>
        <div className='automatic-creat--content'>
          <FastIcon
            height={82}
            width={82}
            fill={softcubeDark.global.colors['sc-yellow-3']}
          />
          <MediumHeadingLeftRu>Быстро</MediumHeadingLeftRu>
          <MediumSloganLeft>
            Экономь время на редактирование видео
          </MediumSloganLeft>
        </div>
        <div className='automatic-creat--content'>
          <EasyIcon
            height={82}
            width={82}
            fill={softcubeDark.global.colors['sc-yellow-3']}
          />
          <MediumHeadingLeftRu>Просто</MediumHeadingLeftRu>
          <MediumSloganLeft>
            Выбери анимацию – получи видео
          </MediumSloganLeft>
        </div>
        <div className='automatic-creat--content last'>
          <EffectiveIcon
            height={82}
            width={82}
            fill={softcubeDark.global.colors['sc-yellow-3']}
          />
          <MediumHeadingLeftRu>Эффективно</MediumHeadingLeftRu>
          <MediumSloganLeft>
            Получи высокий CTR и увеличь продажи товаров
          </MediumSloganLeft>
        </div>
      </div>
      <div className='automatic-creat-img'>
        <img src={AutomaticImgRectangle} alt="AUTOMATICALLY CREATE & OPTIMIZE VIDEO ADS" loading="lazy" />
      </div>
    </IncludeContainerIndex>
  )
};

export default AutomaticCreat;



