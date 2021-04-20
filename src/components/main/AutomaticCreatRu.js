import React from 'react'
import {
  IncludeContainerRu,
  MediumHeadingLeftRu,
  MediumSloganLeftRu,
  softcubeDark
} from "../pricing/styledComponents";
import {EasyIcon, EffectiveIcon, FastIcon} from "../../img/icons";
import AutomaticImgRectangle from "../../img/Rectangle.svg";

const AutomaticCreat = () => {
  return (
    <IncludeContainerRu>
      <div className='automatic-creat '>
        <div className='automatic-creat--content video'>
          <FastIcon
            height={82}
            width={82}
            fill={softcubeDark.global.colors['sc-yellow-3']}
          />
          <div>
            <MediumHeadingLeftRu>Быстро</MediumHeadingLeftRu>
            <MediumSloganLeftRu>
              Экономь время на редактирование видео
            </MediumSloganLeftRu>
          </div>

        </div>
        <div className='automatic-creat--content video'>
          <EasyIcon
            height={82}
            width={82}
            fill={softcubeDark.global.colors['sc-yellow-3']}
          />
          <div className='automatic-one-stroke'>
            <MediumHeadingLeftRu>Просто</MediumHeadingLeftRu>
            <MediumSloganLeftRu>
              Выбери анимацию – получи видео
            </MediumSloganLeftRu>
          </div>
        </div>
        <div className='automatic-creat--content video last'>
          <EffectiveIcon
            height={82}
            width={82}
            fill={softcubeDark.global.colors['sc-yellow-3']}
          />
          <div>
            <MediumHeadingLeftRu>Эффективно</MediumHeadingLeftRu>
            <MediumSloganLeftRu>
              Получи высокий CTR и увеличь продажи товаров
            </MediumSloganLeftRu>
          </div>

        </div>
      </div>
      <div className='automatic-creat-img'>
        <img src={AutomaticImgRectangle} alt="AUTOMATICALLY CREATE & OPTIMIZE VIDEO ADS" loading="lazy" />
      </div>
    </IncludeContainerRu>
  )
};

export default AutomaticCreat;



