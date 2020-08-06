import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-css';
import Layout from '../components/Layout'
import {
  SearchButton,
  BigSimpleTextInputStyled,
  InputContainer,
  PricingHeading,
  PricingPageContainer,
} from '../components/pricing/styledComponents';
import NavRight from '../components/NavRright';
import GetData from '../components/industries/getData';
import VideoTemplate from '../components/industries/VideoTemplate'

const IndustriesPage = () => {
const [videoData] = GetData(30);

console.log(videoData)

  return (
    <Layout>
      <PricingPageContainer>
        <IndustriesHead />
        <SearchYourLink />
        <div className='industries'>
          <NavRight />
          <IndustriesVideo videoData={videoData.data} />
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

function IndustriesVideo({videoData}) {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className='template-directory-video-grid'>
      <div className='templates-video-grid'>
        <div className='responsive-grid'>
          <ul className='grid'>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="industries-grid"
              columnClassName="industries-grid_column"
            >
            {videoData ?
              videoData.search
                ? videoData.search.map((video) => (
                  <VideoTemplate
                    key={video.id}
                    video={video} />
                ))
                : null
              : null
            }
            </Masonry>
          </ul>
        </div>
      </div>
    </div>
  )
}
