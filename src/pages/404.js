import React from 'react'
import Layout from '../components/Layout'
import {
  IndexHeading,
  PricingHeading,
  PricingPageContainer,
  SloganSmall,
  TryAiButton
} from "../components/pricing/styledComponents";
import BlogRoll from "../components/blog/BlogRoll";
import BlogRollRelatedIndex from "../components/blog/BlogRollRelatedIndex";

const NotFoundPage = () => (
  <Layout>
    <PricingPageContainer>
      <PricingHeading>NOT FOUND</PricingHeading>
      <SloganSmall>You just hit a route that doesn&#39;t exist... the sadness.</SloganSmall>
      <IndexHeading top={'138px'}>LATEST ARTICLES</IndexHeading>
      <BlogRoll />
      <IndexHeading top={'132px'}>RELATED ARTICLES</IndexHeading>
      <BlogRollRelatedIndex />
      <h3 className='title-try--white' style={{paddingTop: '117px'}}>
        MAKE VIDEO ADS IN TWO CLICKS
      </h3>
      <TryAiButton
        text='Try AI video ad maker'
        onClick={() => {
          //hist.push('/create');
          window.location.href = 'https://app.softcube.com'
        }}
        margin={'52px 0 70px 0'}
      />
    </PricingPageContainer>
  </Layout>
);

export default NotFoundPage
