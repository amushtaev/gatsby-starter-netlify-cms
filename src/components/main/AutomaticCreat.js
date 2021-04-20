import React from 'react'
import {IncludeContainerIndex, MediumHeadingLeft, MediumSloganLeft, softcubeDark} from "../pricing/styledComponents";
import {EasyIcon, EffectiveIcon, FastIcon} from "../../img/icons";
import AutomaticImgRectangle from "../../img/Rectangle.svg";

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
          <MediumHeadingLeft>Fast</MediumHeadingLeft>
          <MediumSloganLeft>
            Save time on editing and optimizing video ads
          </MediumSloganLeft>
        </div>
        <div className='automatic-creat--content'>
          <EasyIcon
            height={82}
            width={82}
            fill={softcubeDark.global.colors['sc-yellow-3']}
          />
          <MediumHeadingLeft>Easy</MediumHeadingLeft>
          <MediumSloganLeft>
            Just paste your link and get a video ad. No editing required
          </MediumSloganLeft>
        </div>
        <div className='automatic-creat--content last'>
          <EffectiveIcon
            height={82}
            width={82}
            fill={softcubeDark.global.colors['sc-yellow-3']}
          />
          <MediumHeadingLeft>Effective</MediumHeadingLeft>
          <MediumSloganLeft>
            Get more leads with engaging videos
          </MediumSloganLeft>
        </div>
      </div>
      <div className='automatic-creat-img'>
        <img width='600' height='370' src={AutomaticImgRectangle} alt="AUTOMATICALLY CREATE & OPTIMIZE VIDEO ADS" loading="lazy" />
      </div>
    </IncludeContainerIndex>
  )
};

export default AutomaticCreat;
