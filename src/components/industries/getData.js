import React, { useState, useEffect } from 'react';

const Tags = [
  { 'tag': 'ecommerce',' "class"': 'e-commers' },
  { 'tag': 'car dealerships', 'class': 'car' },
  { 'tag': 'real estate', 'class': 'real-estate' },
  { 'tag': 'travel', 'class': 'travel' },
  { 'tag': 'food and delivery', 'class': 'food-delivery' },
  { 'tag': 'fitness', 'class': 'fitness' }];

const GetData = (pageSize) => {
  const [tags] = useState(Tags);
  let postDates = [];
  let searchTags = [];
  const [postDate, setPostDate] = useState([]);
  const refSlug = typeof window !== 'undefined' && window.location.href.split("#")[1];

/*  if(!refSlug) {
    tags.map((tag, index) => {
      searchTags.push(
        '{name: "' + tag.tag + '", score: ' + index +'}'
      )
    });
  } else {
    tags.map((tag, index) => {
      if(refSlug === tag.class) {
        searchTags.push(
          '{name: "' + tag.tag + '", score: ' + index +'}'
        )
      }
    });
  }*/

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
  //TODO
  postDates.push(postDate);
  return postDates
};

export default GetData
