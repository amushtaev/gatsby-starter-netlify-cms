import React, {useEffect, useState} from 'react'
import loadable from '@loadable/component'
import { Link } from 'gatsby'
import Layout from '../components/Layout';
import {
  BigSimpleTextInputStyled,
  IncludeContainerIndex,
  InputContainer,
  MediumHeadingLeft,
  MediumSloganLeft,
  IndexHeading,
  PricingHeading,
  PricingPageContainer,
  SloganSmall,
  softcubeDark,
  TryButton,
  AllIndustriesButton,
  BigButtonStyled,
  DivAskedQuestions,
  PricingLargeHeading,
  DivAccordion,
  AccordionWithMargin,
  QuestionPanel,
  Answer,
  SearchButton,
} from '../components/pricing/styledComponents';
import {
  QuestionsAnswersFirstColumnIndex,
  QuestionsAnswersSecondColumnIndex
} from '../components/pricing/textContent';
const BlogRoll = loadable(() => import('../components/blog/BlogRoll'));
const BlogRollRelatedIndex = loadable(() => import('../components/blog/BlogRollRelatedIndex'));
const Accordion = loadable(() => import('../components/Accordion'));
const WhatOurClientSay = loadable(() => import('../components/WhatOurClientSay'));
const HowItWorks = loadable(() => import('../components/main/HowItWorks'));
const AutomaticCreat = loadable(() => import('../components/main/AutomaticCreat'));
const MarketingVideos = loadable(() => import('../components/main/MarketingVideos'));
const Maximize = loadable(() => import('../components/main/Maximize'));

const IndexPageTemplate = () => {
  return (
    <Layout>
      <PricingPageContainer>
        <PricingHeading>CREATE VIDEO ADS IN TWO CLICKS</PricingHeading>
        <SloganSmall>Paste your link and the Softcube AI will automatically create video ads that convert</SloganSmall>
        <VideoBanner/>
        <IndexHeading top={'132px'}>LINK TO YOUR LISTING PAGE</IndexHeading>
        <SearchYourLink />
        <IndexHeading top={'152px'}>AUTOMATICALLY CREATE & OPTIMIZE VIDEO ADS</IndexHeading>
        <AutomaticCreat />
        <IndexHeading top={'152px'}>CREATE MARKETING VIDEOS FOR EVERY INDUSTRY</IndexHeading>
        <SloganSmall>Because every ad should be a video ad</SloganSmall>
        <MarketingVideos />
        <IndexHeading top={'142px'}>HOW IT WORKS</IndexHeading>
        <HowItWorks/>
        <IndexHeading top={'152px'}>MAXIMIZE YOUR REACH ON ANY PLATFORM</IndexHeading>
        <Maximize />
        <WhatOurClientSay/>
        <FrequentlyAskedQuestions />
        <IndexHeading top={'138px'}>LATEST ARTICLES</IndexHeading>
        <BlogRoll />
        <IndexHeading top={'132px'}>RELATED ARTICLES</IndexHeading>
        <BlogRollRelatedIndex />
      </PricingPageContainer>
    </Layout>
  )
};

export default IndexPageTemplate

function VideoBanner() {
  useEffect(() => {
    document.querySelector("#mainVideo").play()
  }, [typeof document !== 'undefined' && document.querySelector("#mainVideo")]);

  return (
    <div className="video-banner">
      <div className="video-banner--conteiner">
        <video
          className='video-item__content_banner'
          autoPlay={true}
          preload='auto'
          poster='../img/comp_1_4_2.webp?1e26'
          loop={true}
          playsInline
          id='mainVideo'
          loading="lazy"
          muted={true}
        >
          <source src='../img/comp_1_4_2.webm?1e26' type='video/webm; codecs=vp9,vorbis' />
          <source src='../img/comp_1_4_2.mp4?1e26' type='video/mp4' />
          {/*<img loading="lazy" src="../img/comp_1_4_2.gif?1e26" />*/}
        </video>
      </div>
      <TryButton
        text='Try for free!'
        onClick={() => {
          window.location.href = 'https://app.softcube.com'
        }}
      />
    </div>
  )

}

/*function VideoHowItWorks() {
  return (
    <div className="video-banner-bottom">
      <PlayButton
        onClick={() => {
          window.location.href = 'https://app.softcube.com'
        }}
      />
      <video
        className='video-item__content_banner'
        autoPlay={true}
        preload='auto'
        poster='../img/ezgif.com-gif-maker.webp?1e26'
        loop={true}
        src='../img/landing_7_1.mp4?1e26'
      />
    </div>
  )
}*/

function PanelLabel(props) {
  const {text} = props;
  return <span style={{ width: '440px', textAlign: 'left' }}>{text}</span>;
}

function FrequentlyAskedQuestions() {
  const [QuestionsAnswersFirst] = useState([QuestionsAnswersFirstColumnIndex]);
  const [QuestionsAnswersSecond] = useState([QuestionsAnswersSecondColumnIndex]);

  return (
    <DivAskedQuestions>
      <PricingLargeHeading style={{ margin: '130px 0 82px 0' }}>
        FREQUENTLY ASKED QUESTIONS
      </PricingLargeHeading>
      <DivAccordion>
        <AccordionWithMargin animate={false} gap='24px' multiple>
          {QuestionsAnswersFirst[0].map((qa) => (
            <QuestionPanel
              key={`question:${qa.question}`}
              label={<PanelLabel text={qa.question} />}
              activeColor={softcubeDark.global.colors['sc-yellow-3']}
            >
              <Answer>{qa.answer}</Answer>
            </QuestionPanel>
          ))}
        </AccordionWithMargin>
        <Accordion animate={false} gap='24px' multiple>
          {QuestionsAnswersSecond[0].map((qa) => (
            <QuestionPanel
              key={`question:${qa.question}`}
              label={<PanelLabel text={qa.question} />}
              activeColor={softcubeDark.global.colors['sc-yellow-3']}
            >
              <Answer>{qa.answer}</Answer>
            </QuestionPanel>
          ))}
        </Accordion>
      </DivAccordion>
    </DivAskedQuestions>
  );
}

function SearchYourLink() {
  const [inputValue, setInputValue] = React.useState('');
  return (
    <div
      className='SearchYourLink'
    >
      <InputContainer>
        <BigSimpleTextInputStyled
          name='product-link'
          defaultValue={inputValue}
          placeholder='Paste your link, e.g., bestservice.com/bestoffer.html'
          onChange={(value) => {
            setInputValue(value);
          }}
        />
        <SearchButton
          text='Create Video'
          onClick={() => {
            window.location.href = 'https://app.softcube.com'
          }}
        />
      </InputContainer>
    </div>
  );
}
