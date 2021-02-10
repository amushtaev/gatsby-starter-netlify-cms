import React, {useEffect} from 'react'
import loadable from '@loadable/component'
import Layout from '../components/Layout';
import {
  BigSimpleTextInputStyled,
  InputContainer,
  IndexHeading,
  PricingHeading,
  PricingPageContainer,
  SloganSmall,
  TryButton,
  SearchButton,
} from '../components/pricing/styledComponents';

const BlogRoll = loadable(() => import('../components/blog/BlogRoll'));
const BlogRollRelatedIndex = loadable(() => import('../components/blog/BlogRollRelatedIndex'));
const WhatOurClientSay = loadable(() => import('../components/WhatOurClientSay'));
const HowItWorks = loadable(() => import('../components/main/HowItWorks'));
const AutomaticCreat = loadable(() => import('../components/main/AutomaticCreat'));
const MarketingVideos = loadable(() => import('../components/main/MarketingVideos'));
const Maximize = loadable(() => import('../components/main/Maximize'));
const FrequentlyAskedQuestions = loadable(() => import('../components/main/FrequentlyAskedQuestions'));
const ScCookie = loadable(() => import('../components/Cookies'));

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
      <ScCookie />
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
          poster='../img/comp 1_4_2.webp?1e26'
          loop={true}
          playsInline
          id='mainVideo'
          loading="lazy"
          muted={true}
        >
          <source src='../img/comp_1_4_2.webm?1e26' type='video/webm; codecs=vp9,vorbis' />
          <source src='../img/comp_1_4_2.mp4?1e26' type='video/mp4' />
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
          onClick={(e) => {
            e.preventDefault();
            window.location.href = 'https://app.softcube.com?link=' + inputValue
          }}
        />
      </InputContainer>
    </div>
  );
}
