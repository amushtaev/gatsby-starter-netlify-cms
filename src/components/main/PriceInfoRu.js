import React from 'react'
import {
  BilledAnnually, CardHeaderRu, FeatureRu,
  IncludeContainerIndexRu,
  MediumHeadingLeftRu,
  MediumSloganLeft, Per, PlanCardContainerRu, PlanHeadingRu, Price, PriceContainer,
  Tier, TryButtonPriceCard
} from "../pricing/styledComponents";
import {
  CheckListIcon,
  ReadyTemplates,
  SupportSoftcube,
  VideoContent
} from "../../img/icons";

const AutomaticCreat = () => {
  return (
    <IncludeContainerIndexRu>
      <div className='automatic-creat--ru'>
        <div className='automatic-creat--content'>
          <VideoContent/>
          <MediumHeadingLeftRu>HD видео контент</MediumHeadingLeftRu>
          <MediumSloganLeft>
            Получите лучшую видеорекламу с высококачественными клипами из нашей видеотеки
          </MediumSloganLeft>
        </div>
        <div className='automatic-creat--content'>
          <ReadyTemplates/>
          <MediumHeadingLeftRu>Готовые шаблоны</MediumHeadingLeftRu>
          <MediumSloganLeft>
            Экономьте время на редактировании с помощью профессионально разработанных шаблонов
          </MediumSloganLeft>
        </div>
        <div className='automatic-creat--content'>
          <ReadyTemplates/>
          <MediumHeadingLeftRu>Неограниченное количество проектов</MediumHeadingLeftRu>
          <MediumSloganLeft>
            Попробуйте разные шаблоны и платите только тогда, когда ваше видео будет готово
          </MediumSloganLeft>
        </div>
        <div className='automatic-creat--content last'>
        <SupportSoftcube/>
        <MediumHeadingLeftRu>Поддержка Softcube</MediumHeadingLeftRu>
        <MediumSloganLeft>
          Наши технические специалисты и маркетологи всегда готовы помочь
        </MediumSloganLeft>
      </div>
      </div>
      <div className='price-video' style={{ maxWidth: '416px', margin: '0 auto', order: '2'}}>
        <PlanCardContainerRu style={{position: 'relative',}}>
          <Tier>
            <CardHeaderRu>
              <PlanHeadingRu>{'PRICE'}</PlanHeadingRu>
            </CardHeaderRu>
            <PriceContainer>
              <div style={{position: 'relative',}}>
                <Price>
                  {'11$'}
                </Price>
                <Per>{' в месяц'}</Per>
              </div>
              <BilledAnnually>
                {'$132 ежегодно '}
              </BilledAnnually>
              <div
                style={{ display: 'flex', flexDirection: 'row', margin: '43px 0 14px 48px' }}
              >
                <div style={{ minHeight: 24, minWidth: 24 }}>
                  <CheckListIcon fill='#fff' height={24} width={24} />
                </div>
                <FeatureRu>{'до 1000 видео в месяц'}</FeatureRu>
              </div>
              <div
                style={{ display: 'flex', flexDirection: 'row', margin: '0 0 14px 48px' }}
              >
                <div style={{ minHeight: 24, minWidth: 24 }}>
                  <CheckListIcon fill='#fff' height={24} width={24} />
                </div>
                <FeatureRu>{'доступ ко всем возможностям видеоредактора'}</FeatureRu>
              </div>
              <div
                style={{ display: 'flex', flexDirection: 'row', margin: '0 0 14px 48px' }}
              >
                <div style={{ minHeight: 24, minWidth: 24 }}>
                  <CheckListIcon fill='#fff' height={24} width={24} />
                </div>
                <FeatureRu>{'создавай и публикуй в два клика!'}</FeatureRu>
              </div>
              <TryButtonPriceCard
                text='Узнать больше'
                onClick={() => {
                  document.getElementById("videoEmail").scrollIntoView();
                }}
              />
            </PriceContainer>
          </Tier>
        </PlanCardContainerRu>
      </div>
    </IncludeContainerIndexRu>
  )
};

export default AutomaticCreat;
