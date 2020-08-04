import React, { useState, useEffect } from 'react';
import axios from 'axios'

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

  tags.map((tag, index) => {
    searchTags.push(
      '{name: "' + tag.tag + '", score: ' + index +'}'
    )
  });

  postDates.push(axios.post('https://graph.softcube.com/graphql', {
    query: `query 
    {search(
      tags: [${searchTags}], page: 1, pageSize: ${pageSize}) { 
        id 
        project { 
          id 
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
        tags
      }
    }`
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  }));

  return postDates
};

export default GetData
