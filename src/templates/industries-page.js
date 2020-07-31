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

const IndustriesPage = ({ isSubscribing, subscribe, subscribeResult }) => {

  return (
    <Layout>

    </Layout>
  );
};
export default IndustriesPage

IndustriesPage.propType = {
  stringSearch: PropTypes.string,
};
