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
import NavIndustries from '../components/NavIndustries';
import VideoTemplate from '../components/industries/VideoTemplate'

const Tags = [
  { 'tag': 'ecommerce' },
  { 'tag': 'car dealerships' },
  { 'tag': 'real estate' },
  { 'tag': 'travel' },
  { 'tag': 'food and delivery' },
  { 'tag': 'fitness' }];

const GetData = () => {
  const [tags] = useState(Tags);
  let postDates = [];
  let searchTags = [];
  const [postDate, setPostDate] = useState([]);
  const pageSize = 30;

  tags.map((tag, index) => {
    searchTags.push(
      '{name: "' + tag.tag + '", score: ' + index +'}'
    )
  });

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify
      (
        {
          query: `query 
          {search(
            tags: [${searchTags}], page: 1, pageSize: ${pageSize}) { 
              id
              templateType
              tags
              project { 
                id 
                name
                size { id name } 
                video { 
                  urlInfo { 
                    accountID 
                    storageLevel 
                    fileKeyPreview 
                    fileKeyBigThumbnail
                  } 
                }
              }
            }
          }`
        }
      )
    };
    fetch('https://graph.softcube.com/graphql', requestOptions)
      .then((response) => response.json())
      .then((responseJSON) => {
        setPostDate( responseJSON )
      });
  }, []);

  postDates.push(postDate);
  return IndustriesPage(postDates)
};

export default GetData

const IndustriesPage = (props) => {
  const [videoData] = props;
  let videoDatas = [];
  const refSlug = typeof window !== 'undefined' && window.location.href.split("#")[1];

  if(videoData.data) {
    if (refSlug) {
      videoData.data.search.map((edge, index) => {
        if(edge.tags[0].replace(/ /g, '-') === refSlug) {
          videoDatas = videoDatas.concat(edge)
        }
      })
    } else {
      videoDatas = videoData.data.search
    }
    console.log(videoDatas, "videoDatas")

    return (
      <Layout>
        <PricingPageContainer>
          <IndustriesHead />
          <SearchYourLink />
          <div className='industries'>
            <NavIndustries />
            <IndustriesVideo videoDatas={videoDatas} />
          </div>
        </PricingPageContainer>
      </Layout>
    );
  } else {
    return null
  }
};


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

function IndustriesVideo(videoData) {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  console.log(videoData.videoDatas, "IndustriesVideo")

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
              {videoData.videoDatas.map((video) => (
              <VideoTemplate
                key={video.id}
                video={video} />
              ))}
            </Masonry>
          </ul>
        </div>
      </div>
    </div>
  )
}
