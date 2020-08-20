import React, {useState, lazy } from 'react'
import { Link } from 'gatsby'
import BlogRoll from '../components/blog/BlogRoll'
import BlogRollRelatedIndex from "../components/blog/BlogRollRelatedIndex";
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

import AutomaticImgRectangle from '../img/Rectangle.svg'
import Commerce from '../img/commerce.svg'
import Electronics from '../img/electronics.svg'
import Fitness from '../img/fitness.svg'
import Food from '../img/food.svg'
import Real from '../img/real.svg'
import Travel from '../img/travel.svg'
import Instagram from '../img/instagram.svg'
import YouTube from '../img/youtube.svg'
import Facebook from '../img/facebook.svg'
import {
  FastIcon,
  EasyIcon,
  EffectiveIcon,
  Crawl,
  Selecting,
  Compile,
  PlayButton,
} from '../img/icons'
import {QuestionsAnswersFirstColumn, QuestionsAnswersSecondColumn} from "../components/pricing/textContent";
import Accordion from "../components/Accordion";
import WhatOurClientSay from '../components/WhatOurClientSay'

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
  return (
    <div className="video-banner">
      <div className="video-banner--conteiner">
        <video
          className='video-item__content_banner'
          autoPlay={true}
          preload='auto'
          poster='https://s-http-public.s3.eu-central-1.amazonaws.com/ezgif.com-gif-maker.webp?1e26'
          loop={true}
          src='https://s-http-public.s3.eu-central-1.amazonaws.com/landing_7_1.mp4?1e26'
        />
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

function AutomaticCreat() {
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
        <div className='automatic-creat--content'>
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
        <img src={AutomaticImgRectangle} alt="AUTOMATICALLY CREATE & OPTIMIZE VIDEO ADS" />
      </div>
    </IncludeContainerIndex>
  )
}

function MarketingVideos() {
  return (
    <>
      <div className='marketing-videos top-marketing--videos'>
        <div className='marketing-videos--content'>
          <Link
            to={'/industries/#ecommerce'}
          >
            <img src={Commerce} alt="E-commerce" />
            <span className='marketing-videos--title'>E-commerce</span>
          </Link>
        </div>
        <div className='marketing-videos--content'>
          <Link
            to={'/industries/#food-and-delivery'}
          >
            <img src={Food} alt="Food & Delivery" />
            <span className='marketing-videos--title'>Food & Delivery</span>
          </Link>
        </div>
        <div className='marketing-videos--content'>
          <Link
            to={'/industries/#real-estate'}
          >
            <img src={Real} alt="Real Estate" />
            <span className='marketing-videos--title'>Real Estate</span>
          </Link>
        </div>
      </div>
      <div className='marketing-videos bottom-marketing--videos'>
        <div className='marketing-videos--content'>
          <Link
            to={'/industries/#fitness'}
          >
            <img src={Fitness} alt="Fitness" />
            <span className='marketing-videos--title'>Fitness</span>
          </Link>
        </div>
        <div className='marketing-videos--content'>
          <Link
            to={'/industries/#fitness'}
          >
            <img src={Electronics} alt="Electronics" />
            <span className='marketing-videos--title'>Electronics</span>
          </Link>
        </div>
        <div className='marketing-videos--content'>
          <Link
            to={'/industries/#travel'}
          >
            <img src={Travel } alt="Travel " />
            <span className='marketing-videos--title'>Travel </span>
          </Link>
        </div>
      </div>
      <AllIndustriesButton
        text='View all industries'
        onClick={() => {
          //hist.push(`/create?link=${inputValue}`);
          window.location.href = '/industries'
        }}
      />
    </>
  )
}

function HowItWorks() {
  return (
    <>
      <div className='marketing-videos' style={{marginTop: '62px'}}>
        <div className='marketing-videos--content'>
          <Crawl
            height={82}
            width={82}
            fill={softcubeDark.global.colors['sc-yellow-3']}
          />
          <div className='works-text--inner'>
            <span className='marketing-videos--title'>Crawl your listing page</span>
            <span className='marketing-videos--text'>
              The Softcube AI scans your listing page and gets important information for creating your video ad
            </span>
          </div>
        </div>
        <div className='marketing-videos--content'>
          <Selecting
            height={82}
            width={82}
            fill={softcubeDark.global.colors['sc-yellow-3']}
          />
          <div className='works-text--inner'>
            <span className='marketing-videos--title'>Selecting footage</span>
            <span className='marketing-videos--text'>
              The AI algorithm picks the best-suited scenes from
              Softcube's product video library of over 2 million clips
            </span>
          </div>
        </div>
        <div className='marketing-videos--content'>
          <Compile
            height={82}
            width={82}
            fill={softcubeDark.global.colors['sc-yellow-3']}
          />
          <div className='works-text--inner'>
            <span className='marketing-videos--title'>Compile the video ad</span>
            <span className='marketing-videos--text'>
              Softcube customizes a template with product- or industry-specific videos,
              text from the listing page, your logo, and your brand colors
            </span>
          </div>
        </div>
        <VideoHowItWorks />
      </div>
    </>
  )
}

function VideoHowItWorks() {
  return (
    <div className="video-banner">
      <PlayButton
        onClick={() => {
          window.location.href = 'https://app.softcube.com'
        }}
      />
      <video
        className='video-item__content_banner'
        autoPlay={true}
        preload='auto'
        poster='https://s-http-public.s3.eu-central-1.amazonaws.com/ezgif.com-gif-maker.webp?1e26'
        loop={true}
        src='https://s-http-public.s3.eu-central-1.amazonaws.com/landing_7_1.mp4?1e26'
      />
    </div>
  )
}

function Maximize() {
  return (
    <>
      <div className='marketing-videos' style={{marginTop: '82px'}}>
        <div className='marketing-videos--content'>
          <div className='maximize-text--inner' style={{display: 'grid', gridTemplateRows: '303px 56px 183px 74px'}}>
            <img src={Instagram} alt="Instagram" style={{margin: 'auto'}} />
            <span className='marketing-videos--title'>Instagram Stories ads</span>
            <span className='marketing-videos--text'>
              Launch an advertising campaign in Facebook Ads Manager or in Page ads
              (using the Promote button on your Instagram Page) and show your ads on Instagram
            </span>
            <BigButtonStyled
              text='Learn more'
              onClick={() => {
                window.location.href = '/industries/#vertical'
              }}
            />
          </div>
        </div>
        <div className='marketing-videos--content'>
          <div className='maximize-text--inner' style={{display: 'grid', gridTemplateRows: '303px 56px 183px 74px'}}>
            <img src={YouTube} alt="YouTube" style={{margin: 'auto'}} />
            <span className='marketing-videos--title'>YouTube ads</span>
            <span className='marketing-videos--text'>
              Let people find you with YouTube and Google Display Network ads
            </span>
            <BigButtonStyled
              text='Learn more'
              component={Link}
              to="/industries/#wide"
              onClick={() => {
                window.location.href = '/industries/#wide'
              }}
            />
          </div>
        </div>
        <div className='marketing-videos--content'>
          <div className='maximize-text--inner' style={{display: 'grid', gridTemplateRows: '303px 56px 183px 74px'}}>
            <img src={Facebook} alt="Facebook" style={{margin: 'auto'}} />
            <span className='marketing-videos--title'>Facebook video ads</span>
            <span className='marketing-videos--text'>
              Run an advertising campaign in Facebook Ads Manager and show your ads on Facebook and the Audience Network
            </span>
            <BigButtonStyled
              text='Learn more'
              onClick={() => {
                window.location.href = '/industries/#square'
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

function PanelLabel(props) {
  const {text} = props;
  return <span style={{ width: '440px', textAlign: 'left' }}>{text}</span>;
}

function FrequentlyAskedQuestions() {
  const [QuestionsAnswersFirst] = useState([QuestionsAnswersFirstColumn]);
  const [QuestionsAnswersSecond] = useState([QuestionsAnswersSecondColumn]);

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
          text='Search'
          onClick={() => {
            window.location.href = 'https://app.softcube.com'
          }}
        />
      </InputContainer>
    </div>
  );
}
