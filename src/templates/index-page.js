import React, {useState} from 'react'
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
  Arrow,
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
        <IndexHeading>LINK TO YOUR LISTING PAGE</IndexHeading>
        <SearchYourLink />
        <IndexHeading>AUTOMATICALLY CREATE & OPTIMIZE VIDEO ADS</IndexHeading>
        <AutomaticCreat />
        <IndexHeading>CREATE MARKETING VIDEOS FOR EVERY INDUSTRY</IndexHeading>
        <SloganSmall>Because every ad should be a video ad</SloganSmall>
        <MarketingVideos />
        <IndexHeading>HOW IT WORKS</IndexHeading>
        <HowItWorks/>
        <IndexHeading>MAXIMIZE YOUR REACH ON ANY PLATFORM</IndexHeading>
        <Maximize />
        <WhatOurClientSay/>
        <FrequentlyAskedQuestions />
        <IndexHeading>LATEST ARTICLES</IndexHeading>
        <BlogRoll />
        <IndexHeading>RELATED ARTICLES</IndexHeading>
        <BlogRollRelatedIndex />
      </PricingPageContainer>
    </Layout>
  )
};

export default IndexPageTemplate

function VideoBanner() {
  return (
    <div className="video-banner">
      <>
        <video
          className='video-item__content_banner'
          autoPlay={true}
          preload='auto'
          poster='https://s-http-public.s3.eu-central-1.amazonaws.com/ezgif.com-gif-maker.webp?1e26'
          loop={true}
          src='https://s-http-public.s3.eu-central-1.amazonaws.com/landing_7_1.mp4?1e26'
        />
      </>
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

function ArrowLeft(props) {
  const { disabled, onClick } = props;
  const disabeld = disabled ? ' arrow--disabled' : '';
  return (
    <Arrow
      left
      onClick={onClick}
      className={`arrow arrow--left${disabeld}`}
      xmlns='http://www.w3.org/2000/svg'
      width='30'
      height='52'
      viewBox='0 0 30 52'
    >
      <path
        d='M28.9701 1.01766C28.6458 0.695079 28.2605 0.439143 27.8363 0.264515C27.4122 0.0898877 26.9575 0 26.4983 0C26.0391 0 25.5843 0.0898877 25.1602 0.264515C24.736 0.439143 24.3508 0.695079 24.0265 1.01766L0.816792 24.046C0.557872 24.3023 0.352455 24.6069 0.212299 24.9421C0.0721433 25.2773 0 25.6367 0 25.9996C0 26.3626 0.0721433 26.7219 0.212299 27.0572C0.352455 27.3924 0.557872 27.6969 0.816792 27.9533L24.0265 50.9816C25.395 52.3395 27.6015 52.3395 28.9701 50.9816C30.3386 49.6237 30.3386 47.4345 28.9701 46.0767L8.74886 25.9858L28.998 5.8949C30.3386 4.56474 30.3386 2.34782 28.9701 1.01766Z'
        fill='white'
      />
    </Arrow>
  );
}

function ArrowRight(props) {
  const { disabled, onClick } = props;
  const disabeld = disabled ? ' arrow--disabled' : '';
  return (
    <Arrow
      left={false}
      onClick={onClick}
      className={`arrow arrow--right${disabeld}`}
      xmlns='http://www.w3.org/2000/svg'
      width='30'
      height='52'
      viewBox='0 0 30 52'
    >
      <path
        d='M1.02994 50.9823C1.35424 51.3049 1.73951 51.5609 2.16366 51.7355C2.58781 51.9101 3.04251 52 3.50173 52C3.96095 52 4.41566 51.9101 4.83981 51.7355C5.26396 51.5609 5.64922 51.3049 5.97352 50.9823L29.1832 27.954C29.4421 27.6977 29.6475 27.3931 29.7877 27.0579C29.9279 26.7227 30 26.3633 30 26.0004C30 25.6374 29.9279 25.2781 29.7877 24.9428C29.6475 24.6076 29.4421 24.3031 29.1832 24.0467L5.97352 1.0184C4.60496 -0.339472 2.39851 -0.339472 1.02994 1.0184C-0.338619 2.37626 -0.338619 4.56547 1.02994 5.92334L21.2511 26.0142L1.00201 46.1051C-0.338617 47.4353 -0.338623 49.6522 1.02994 50.9823Z'
        fill='white'
      />
    </Arrow>
  );
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
