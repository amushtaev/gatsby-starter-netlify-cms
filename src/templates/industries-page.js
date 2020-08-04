import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout'
import {
  SearchButton,
  BigSimpleTextInputStyled,
  CreateLargeHeading, InputContainer,
  PricingHeading,
  PricingPageContainer,
  SloganSmall
} from '../components/pricing/styledComponents';
import NavRight from '../components/NavRright';
import GetData from "../components/industries/getData";

const IndustriesPage = () => {
GetData();
console.log(GetData(), "GetData")
  return (
    <Layout>
      <PricingPageContainer>
        <IndustriesHead />
        <SearchYourLink />
        <div className="industries">
          <NavRight />
          <IndustriesVideo />
        </div>
      </PricingPageContainer>
    </Layout>
  );
};
export default IndustriesPage

IndustriesPage.propType = {
  stringSearch: PropTypes.string,
};

function IndustriesHead() {
  return (
    <>
      <PricingHeading>FIND THE PERFECT VIDEO TEMPLATE</PricingHeading>
    </>
  )
}

function SearchYourLink() {
  const [inputValue, setInputValue] = React.useState('');
  return (
    <div
      style={{
        width: 1068,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        margin: '32px 0 98px 0',
      }}
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

function IndustriesVideo() {
  return (
    <div className='template-directory-video-grid'></div>
  )
}
