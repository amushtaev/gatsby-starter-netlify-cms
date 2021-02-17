import React from 'react'
import {
  BilledAnnually, CardHeaderRu, FeatureRu,
  IncludeContainerIndexRu,
  MediumHeadingLeftRu,
  MediumSloganLeft, MediumSloganLeftRu, Per, PlanCardContainerRu, PlanHeadingRu, Price, PriceContainer,
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
          <div>
            <MediumHeadingLeftRu>HD видео контент</MediumHeadingLeftRu>
            <MediumSloganLeftRu>
              Получите лучшую видеорекламу с высококачественными клипами из нашей видеотеки
            </MediumSloganLeftRu>
          </div>
        </div>
        <div className='automatic-creat--content'>
          <ReadyTemplates/>
          <div>
            <MediumHeadingLeftRu>Готовые шаблоны</MediumHeadingLeftRu>
            <MediumSloganLeftRu>
              Экономьте время на редактировании с помощью профессионально разработанных шаблонов
            </MediumSloganLeftRu>
          </div>
        </div>
        <div className='automatic-creat--content'>
          <ReadyTemplates/>
          <div>
            <MediumHeadingLeftRu>Неограниченное количество проектов</MediumHeadingLeftRu>
            <MediumSloganLeftRu>
              Попробуйте разные шаблоны и платите только тогда, когда ваше видео будет готово
            </MediumSloganLeftRu>
          </div>
        </div>
        <div className='automatic-creat--content last'>
        <SupportSoftcube/>
        <div>
          <MediumHeadingLeftRu>Поддержка Softcube</MediumHeadingLeftRu>
          <MediumSloganLeftRu>
            Наши технические специалисты и маркетологи всегда готовы помочь
          </MediumSloganLeftRu>
        </div>
      </div>
      </div>
      <div className='price-video'>
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
