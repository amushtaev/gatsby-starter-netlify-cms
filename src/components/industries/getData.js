import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Tags = [
  { 'tag': 'ecommerce',' "class"': 'e-commers' },
  { 'tag': 'car dealerships', 'class': 'car' },
  { 'tag': 'real estate', 'class': 'real-estate' },
  { 'tag': 'travel', 'class': 'travel' },
  { 'tag': 'food and delivery', 'class': 'food-delivery' },
  { 'tag': 'fitness', 'class': 'fitness' }];

const GetData = () => {
  const [tags] = useState(Tags)
  let postDatas = [];
  tags.map((tag, index) => {
    console.log(tag.tag, "tag.tag")
    postDatas.push(axios.post('https://graph.softcube.com/graphql', {
      query: `query {search(tags: [{name: "${tag.tag}", score: 1}], page: 1, pageSize: 20) { id project { id size { id name } video { urlInfo { accountID storageLevel fileKeyPreview fileKeyBigThumbnail} } }}}`
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }))
  });
  return postDatas
};

export default GetData
