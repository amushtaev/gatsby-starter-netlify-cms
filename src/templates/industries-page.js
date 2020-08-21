import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-css';
import Layout from '../components/Layout'
import {
  SearchButton,
  BigSimpleTextInputStyled,
  InputContainer,
  PricingHeading,
  PricingPageContainer, IndexHeading,
} from '../components/pricing/styledComponents';
import NavIndustries from '../components/NavIndustries';
import VideoTemplate from '../components/industries/VideoTemplate'
import BlogRoll from "../components/blog/BlogRoll";
import BlogRollRelatedIndex from "../components/blog/BlogRollRelatedIndex";

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
  const pageSize = 100;

  tags.map((tag, index) => {
    return(
      searchTags.push(
        '{name: "' + tag.tag + '", score: ' + index +'}'
      )
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
  const [videoDataProps] = props;
  let videoData = [];
  const refSlug = typeof window !== 'undefined' && window.location.href.split("#")[1];

  if(videoDataProps.data) {
    if (refSlug) {
      videoDataProps.data.search.map((edge) => {
        if(edge.tags[0].replace(/ /g, '-') === refSlug || edge.project.size.name === refSlug) {
          return videoData = videoData.concat(edge)
        } else {
          return null
        }
      })
    } else {
      videoData = videoDataProps.data.search
    }

    return (
      <Layout>
        <PricingPageContainer>
          <IndustriesHead />
          <SearchYourLink />
          <div className='industries'>
            <NavIndustries />
            <IndustriesVideo videoData={videoData} />
          </div>
          <IndexHeading top={'138px'}>LATEST ARTICLES</IndexHeading>
          <BlogRoll />
          <IndexHeading top={'132px'}>RELATED ARTICLES</IndexHeading>
          <BlogRollRelatedIndex />
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
    <div className='SearchYourLink'
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
    1640: 3,
    1440: 2,
    700: 2,
    570: 1
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
              {videoData.videoData.map((video) => (
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
