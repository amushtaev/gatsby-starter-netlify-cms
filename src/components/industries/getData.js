import React, { useState, useEffect } from 'react';

const Tags = [
  { 'tag': 'ecommerce' },
  { 'tag': 'car dealerships' },
  { 'tag': 'real estate' },
  { 'tag': 'travel' },
  { 'tag': 'food and delivery' },
  { 'tag': 'fitness' }];

const GetData = (pageSize) => {
  const [tags] = useState(Tags);
  let postDates = [];
  let searchTags = [];
  const [postDate, setPostDate] = useState([]);

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
  //TODO
  postDates.push(postDate);
  return postDates
};

export default GetData
