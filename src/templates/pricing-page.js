import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby'
import loadable from '@loadable/component';
import PropTypes from 'prop-types';
import {
  PricingLargeHeading,
  PlansIncludeContainer,
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
  DivAllPlansInclude,
  DivAskedQuestions,
  DivPasteYourLink,
  DivAccordion,
} from '../components/pricing/styledComponents';
import {
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
import Layout from '../components/Layout';
import { initialPlans } from '../components/pricing/stripe/plans';
import Helmet from "react-helmet";
const Accordion = loadable(() => import('../components/Accordion'));
const WhatOurClientSay = loadable(() => import('../components/WhatOurClientSay'));
const ScCookie = loadable(() => import('../components/Cookies'));

const PricingPage = ({ isSubscribing, subscribe, subscribeResult }) => {
  return (
    <Layout>
      <Helmet>
        <title>Pricing | Softcube</title>
      </Helmet>
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
      <ScCookie />
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
        <PlanType
          checked={!check}
          style={{cursor: 'pointer'}}
          onClick={() => {
            setCheck(!check);
          }}
        >monthly</PlanType>
        <TestBox
          onClick={() => {
            setCheck(!check);
          }}
        >
          <Check checked={check} />
        </TestBox>
        <PlanType
          checked={check}
          style={{ position: 'relative', justifySelf: 'start', cursor: 'pointer' }}
          onClick={() => {
            setCheck(!check);
          }}
        >
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
  const { check } = props;
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
  const { plan, check } = props;
  const [featuresList, setFeaturesList] = useState([]);

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
    <div className='PlanCard' style={{ maxWidth: '306px', margin: '0 auto' }}>
      <PlanCardContainer>
        <Tier>
          <Link to={'https://app.softcube.com'} style={{display: 'contents'}}>
            <CardHeader pro={plan.name === 'PRO'}>
              {plan.name === 'PRO' && <PopularLabel>Popular</PopularLabel>}
              <PlanHeading>{plan.name}</PlanHeading>
              <PlanInfo>{plan.sub}</PlanInfo>
            </CardHeader>
          </Link>
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
              //plan.name !== 'CUSTOM' && setIsCheckoutForm(true);
              window.location.href = 'https://app.softcube.com'
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
    <DivAllPlansInclude
      className='all-plans-include'
    >
      <PricingLargeHeading>ALL PLANS INCLUDE</PricingLargeHeading>
      <PlansIncludeContainer>
        <div className='all-plans'>
          <div className='IncludeContainer'>
            <div style={{ margin: '0 auto' }}>
              <VideoContentIcon
                height={82}
                width={82}
                fill={softcubeDark.global.colors['sc-yellow-3']}
              />
            </div>
            <MediumHeading>HD video content</MediumHeading>
            <MediumSlogan paddingBottom={'0'}>
              Get top video ads with high-quality clips from our video library
            </MediumSlogan>
          </div>
        </div>
        <div className='all-plans'>
          <div className='IncludeContainer'>
            <div style={{ margin: '0 auto' }}>
              <ReadyMadeTemplatesIcon
                height={82}
                width={82}
                fill={softcubeDark.global.colors['sc-yellow-3']}
              />
            </div>
            <MediumHeading>Ready-made templates</MediumHeading>
            <MediumSlogan paddingBottom={'0'}>
              Save time on editing with professionally designed templates
            </MediumSlogan>
          </div>
        </div>
        <div className='all-plans'>
          <div className='IncludeContainer p-bottom'>
            <div style={{ margin: '0 auto' }}>
              <UnlimitedProjectsIcon
                height={82}
                width={82}
                fill={softcubeDark.global.colors['sc-yellow-3']}
              />
            </div>
            <MediumHeading>Unlimited projects</MediumHeading>
            <MediumSlogan paddingBottom={'0'}>
              Try different templates and pay only when your video is ready
            </MediumSlogan>
          </div>
        </div>
        <div className='all-plans'>
          <div className='IncludeContainer p-bottom last'>
            <div style={{ margin: '0 auto' }}>
              <SoftcubeSupportIcon
                height={82}
                width={82}
                fill={softcubeDark.global.colors['sc-yellow-3']}
              />
            </div>
            <MediumHeading>Softcube support</MediumHeading>
            <MediumSlogan paddingBottom={'0'}>
              Our tech and marketing specialists are always ready to help
            </MediumSlogan>
          </div>
        </div>
      </PlansIncludeContainer>
    </DivAllPlansInclude>
  );
}

function PanelLabel(props) {
  /*const {text} = props;*/
  return <span style={{ width: '440px', textAlign: 'left' }}>{props.text}</span>;
}

function FrequentlyAskedQuestions() {
  const [QuestionsAnswersFirst] = useState([QuestionsAnswersFirstColumn]);
  const [QuestionsAnswersSecond] = useState([QuestionsAnswersSecondColumn]);

  return (
    <DivAskedQuestions>
      <PricingLargeHeading>
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
        <Accordion animate={false} gap='24px' multiple className='secondAccordion'>
          {QuestionsAnswersSecond[0].map((qa, index) => (
            <QuestionPanel
              key={`question:${qa.question}`}
              label={<PanelLabel text={qa.question} />}
              activeColor={softcubeDark.global.colors['sc-yellow-3']}
              bottom={index !== 3 ? '24px' : '0'}
            >
              <Answer>{qa.answer}</Answer>
            </QuestionPanel>
          ))}
        </Accordion>
      </DivAccordion>
    </DivAskedQuestions>
  );
}

function PasteYourLink() {
  const [inputValue, setInputValue] = React.useState('');
  return (
    <DivPasteYourLink margin={'128px 0 122px 0'}>
      <CreateLargeHeading>
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
            //hist.push(`/create?link=${inputValue}`);
            window.location.href = 'https://app.softcube.com'
          }}
        />
      </InputContainer>
    </DivPasteYourLink>
  );
}
