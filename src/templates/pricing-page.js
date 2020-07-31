import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useKeenSlider } from 'keen-slider/react';
import { useHistory } from 'react-router';
import {
  PricingLargeHeading,
  PlansIncludeContainer,
  IncludeContainer,
  KeenSlider,
  Slide,
  DarkRectangle,
  CommentCard,
  CommentContainer,
  AuthorContainer,
  AuthorPhoto,
  Author,
  Dots,
  Dot,
  TryAiButton,
  Comment,
  Arrow,
  PricingPageContainer,
  PricingHeading,
  SloganSmall,
  TumblerGrid,
  PlanType,
  TestBox,
  Check,
  Discount,
  Pricing,
  ItemsWrapper,
  PlanCardContainer,
  CardHeader,
  Tier,
  PopularLabel,
  PlanHeading,
  PlanInfo,
  CustomPricing,
  PriceContainer,
  OldPrice,
  Price,
  Per,
  BilledAnnually,
  DownloadVideos,
  ChooseButton,
  Feature,
  MediumHeading,
  AccordionWithMargin,
  QuestionPanel,
  Answer,
  CreateLargeHeading,
  InputContainer,
  BigSimpleTextInputStyled,
  softcubeDark,
  MediumSlogan,
  BigButtonStyled,
} from '../components/pricing/styledComponents';
import {
  Comments,
  Features,
  QuestionsAnswersFirstColumn,
  QuestionsAnswersSecondColumn,
} from '../components/pricing/textContent';
import {
  CheckListIcon,
  VideoContentIcon,
  ReadyMadeTemplatesIcon ,
  UnlimitedProjectsIcon,
  SoftcubeSupportIcon,
} from '../img/icons';
import { initialPlans } from '../components/pricing/stripe/plans';
import Accordion from '../components/Accordion';
import Layout from '../components/Layout'

const PricingPage = ({ isSubscribing, subscribe, subscribeResult }) => {

  return (
    <Layout>
    <PricingPageContainer>
      <PlansPricing
        isSubscribing={isSubscribing}
        subscribe={subscribe}
        subscribeResult={subscribeResult}
      />
      <AllPlansInclude />
      <WhatOurClientSay />
      <FrequentlyAskedQuestions />
      <PasteYourLink />
    </PricingPageContainer>
    </Layout>
  );
};
export default PricingPage

PricingPage.propType = {
  stringSearch: PropTypes.string,
};

function PlansPricing( props ) {
  const {isSubscribing, subscribe, subscribeResult} = props;
  const [check, setCheck] = useState(true);

  return (
    <>
      <PricingHeading>PRICING</PricingHeading>
      <SloganSmall>Plans that match your inventory volume</SloganSmall>
      <TumblerGrid>
        <PlanType checked={!check}>monthly</PlanType>
        <TestBox
          onClick={() => {
            setCheck(!check);
          }}
        >
          <Check checked={check} />
        </TestBox>
        <PlanType checked={check} style={{ position: 'relative', justifySelf: 'start' }}>
          <Discount style={{ position: 'absolute', right: 0, top: -18 }}>- 40%</Discount>
          annual
        </PlanType>
      </TumblerGrid>
      <Pricing>
        <PlansComponent
          check={check}
          isSubscribing={isSubscribing}
          subscribe={subscribe}
          subscribeResult={subscribeResult}
        />
      </Pricing>
    </>
  );
}

function PlansComponent(props) {
  const { plan, check, isSubscribing, subscribe, subscribeResult } = props;
  const [plans] = useState([initialPlans]);

  return (
    <div style={{ width: '100%' }}>
      <ItemsWrapper>
        {plans[0]
        && plans[0].map((plan) => (
          <PlanCard
            key={plan.name}
            plan={plan}
            check={check}
          />
        ))}
      </ItemsWrapper>
    </div>
  );
}

function PlanCard(props) {
  const { plan, check, isSubscribing, subscribe, subscribeResult } = props;
  const [featuresList, setFeaturesList] = useState([]);
  const [isCheckoutForm, setIsCheckoutForm] = useState(false);

  console.log(plan, check)

  useEffect(() => {
    if (plan.name === 'BASIC') {
      setFeaturesList(Features.basic);
    }
    if (plan.name === 'PRO') {
      setFeaturesList(Features.pro);
    }
    if (plan.name === 'CUSTOM') {
      setFeaturesList(Features.custom);
    }
  }, [plan]);

  return (
    <div style={{ maxWidth: '306px' }}>
      <PlanCardContainer>
        <Tier>
          <CardHeader pro={plan.name === 'PRO'}>
            {plan.name === 'PRO' && <PopularLabel>Popular</PopularLabel>}
            <PlanHeading>{plan.name}</PlanHeading>
            <PlanInfo>{plan.sub}</PlanInfo>
          </CardHeader>

          {plan.name === 'CUSTOM' && <CustomPricing>Custom pricing</CustomPricing>}
          {plan.name !== 'CUSTOM' && (
            <PriceContainer>
              <OldPrice check={check}>{`$ ${plan.pricing.monthly.mon}`}</OldPrice>
              <div>
                <Price>
                  {`$ ${
                    check ? plan.pricing.annual.mon : plan.pricing.monthly.mon
                  }`}
                </Price>
                <Per>{' / MO'}</Per>
              </div>
              <BilledAnnually>
                {`$${
                  check ? plan.pricing.annual.ann : plan.pricing.monthly.ann
                } / billed annually`}
              </BilledAnnually>
              <DownloadVideos>
                {!check ? plan.videosCount.annual : plan.videosCount.monthly}
              </DownloadVideos>
            </PriceContainer>
          )}
          <ChooseButton
            text={
              // eslint-disable-next-line no-nested-ternary
              plan.name === 'CUSTOM'
                ? 'Contact us'
                : plan.name === 'PRO'
                ? 'Choose Pro'
                : 'Choose Basic'
            }
            onClick={() => {
              plan.name !== 'CUSTOM' && setIsCheckoutForm(true);
            }}
          />
        </Tier>
      </PlanCardContainer>
      <div style={{ margin: '42px 26px 0 26px' }}>
        {featuresList.map((feature) => (
          <div
            key={`key:${feature}`}
            style={{ display: 'flex', flexDirection: 'row', margin: '0 0 14px 0' }}
          >
            <div style={{ minHeight: 24, minWidth: 24 }}>
              <CheckListIcon fill='#fff' height={24} width={24} />
            </div>
            <Feature>{feature}</Feature>
          </div>
        ))}
      </div>
    </div>
  );
}

function AllPlansInclude() {
  return (
    <div
      style={{
        width: 1068,
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <PricingLargeHeading>ALL PLANS INCLUDE</PricingLargeHeading>
      <PlansIncludeContainer>
        <div style={{ flex: '0 0 40%' }}>
          <IncludeContainer>
            <div style={{ margin: '0 auto' }}>
              <VideoContentIcon
                height={82}
                width={82}
                fill={softcubeDark.global.colors['sc-yellow-3']}
              />
            </div>
            <MediumHeading>HD video content</MediumHeading>
            <MediumSlogan>
              Get top video ads with high-quality clips from our video library
            </MediumSlogan>
          </IncludeContainer>
        </div>
        <div style={{ flex: '0 0 40%' }}>
          <IncludeContainer>
            <div style={{ margin: '0 auto' }}>
              <ReadyMadeTemplatesIcon
                height={82}
                width={82}
                fill={softcubeDark.global.colors['sc-yellow-3']}
              />
            </div>
            <MediumHeading>Ready-made templates</MediumHeading>
            <MediumSlogan>
              Save time on editing with professionally designed templates
            </MediumSlogan>
          </IncludeContainer>
        </div>
        <div style={{ flex: '0 0 40%' }}>
          <IncludeContainer>
            <div style={{ margin: '0 auto' }}>
              <UnlimitedProjectsIcon
                height={82}
                width={82}
                fill={softcubeDark.global.colors['sc-yellow-3']}
              />
            </div>
            <MediumHeading>Unlimited projects</MediumHeading>
            <MediumSlogan>
              Try different templates and pay only when your video is ready
            </MediumSlogan>
          </IncludeContainer>
        </div>
        <div style={{ flex: '0 0 40%' }}>
          <IncludeContainer>
            <div style={{ margin: '0 auto' }}>
              <SoftcubeSupportIcon
                height={82}
                width={82}
                fill={softcubeDark.global.colors['sc-yellow-3']}
              />
            </div>
            <MediumHeading>Softcube support</MediumHeading>
            <MediumSlogan>
              Our tech and marketing specialists are always ready to help
            </MediumSlogan>
          </IncludeContainer>
        </div>
      </PlansIncludeContainer>
    </div>
  );
}

function WhatOurClientSay() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const hist = useHistory();
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    spacing: 24,
    slidesPerView: 6,
    centered: false,
    loop: true,
    mode: 'snap',
    breakpoints: {
      '(min-width: 768px)': {
        slidesPerView: 3,
        mode: 'free-snap',
      },
      '(min-width: 1200px)': {
        slidesPerView: 6,
        mode: 'free-snap',
      },
    },
  });

  const getVisibleCard = (index) => {
    switch (currentSlide) {
      case 0:
        return index === 1 || index === 2 || index === 3 || index === 4;
      case 1:
        return index === 2 || index === 3 || index === 4 || index === 5;
      case 2:
        return index === 3 || index === 4 || index === 5 || index === 6;
      case 3:
        return index === 4 || index === 5 || index === 6 || index === 0;
      case 4:
        return index === 5 || index === 6 || index === 0 || index === 1;
      case 5:
        return index === 6 || index === 0 || index === 1 || index === 2;
      case 6:
        return index === 0 || index === 1 || index === 2 || index === 3;
      default:
        return false;
    }
  };

  return (
    <>
      <PricingLargeHeading style={{ margin: '40px auto 62px auto' }}>
        WHAT OUR CLIENT SAY
      </PricingLargeHeading>
      <div style={{ position: 'relative', overflowX: 'hidden', padding: '20px 0 27px 0' }}>
        <KeenSlider
          // @ts-ignore
          ref={sliderRef}
        >
          {Comments.map(
            (comment, index) => {
              const isVisibleCard = getVisibleCard(index);
              return (
                <Slide
                  key={`${comment.author}:comment:${index + 1}`}
                  className={`keen-slider__slide number-slide${index + 1}`}
                >
                  <DarkRectangle visible={!isVisibleCard} />
                  <CommentCard noShadow={!isVisibleCard}>
                    <CommentContainer noShadow={!isVisibleCard}>
                      <Comment>{comment.text}</Comment>
                    </CommentContainer>
                    <AuthorContainer>
                      <AuthorPhoto>
                        <img
                          style={{
                            width: '56px',
                            height: '56px',
                            margin: '-2px 0 0 -2px',
                          }}
                          src={comment.photo}
                          alt=''
                        />
                      </AuthorPhoto>
                      <Author>{comment.author}</Author>
                    </AuthorContainer>
                  </CommentCard>
                </Slide>
              );
            }
          )}
        </KeenSlider>
        {slider && (
          <>
            <ArrowLeft
              onClick={(e) => {
                e.stopPropagation() ||
                slider.prev()}}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={(e) => {
                e.stopPropagation() ||
                slider.next()}
              }
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </div>
      {slider && (
        <Dots>
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              // eslint-disable-next-line jsx-a11y/control-has-associated-label,react/button-has-type
              <Dot
                key={idx}
                onClick={()=> {
                  slider.moveToSlideRelative(idx);
                }}
                active={currentSlide === idx}
              />
            );
          })}
        </Dots>
      )}
      <TryAiButton
        text='Try AI video ad maker'
        onClick={() => {
          hist.push('/create');
        }}
      />
    </>
  );
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
    <div
      style={{
        width: 1068,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <PricingLargeHeading style={{ margin: '130px 0 82px 0' }}>
        FREQUENTLY ASKED QUESTIONS
      </PricingLargeHeading>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
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
      </div>
    </div>
  );
}

function PasteYourLink() {
  const [inputValue, setInputValue] = React.useState('');
  const hist = useHistory();
  return (
    <div
      style={{
        width: 1068,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 0 98px 0',
      }}
    >
      <CreateLargeHeading style={{ margin: '130px 0 0 0' }}>
        PASTE YOUR LINK
      </CreateLargeHeading>
      <SloganSmall>Get AI-generated videos that convert</SloganSmall>
      <InputContainer>
        <BigSimpleTextInputStyled
          name='product-link'
          defaultValue={inputValue}
          placeholder='Paste your link, e.g., https://bestservice.com/bestoffer.html'
          onChange={(value) => {
            setInputValue(value);
          }}
        />
        <BigButtonStyled
          text='Create video'
          onClick={() => {
            hist.push(`/create?link=${inputValue}`);
          }}
        />
      </InputContainer>
    </div>
  );
}
