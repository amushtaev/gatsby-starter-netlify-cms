import React from "react"
import { request } from "graphql-request"
import Pricing from "./components/Pricing";

async function GetVideo() {
  const endpoint = "https://graph.softcube.com/graphql"

  const query = /* GraphQL */`
  query getsearch($tag: String!) {
      search (
        tags: [
          {name: $tag,
          score: 1}
        ],
        page: 1,
        pageSize: 20
       ) {
        id
        project {
          id
            size {
              id
              name
            }
          video {
            urlInfo {
              accountID
              storageLevel
              fileKeyPreview
              fileKeyThumbnail
            }
          }
        }
      }
   }`

  const tags = [
    {
      tag: "ecommerce",
      classForTags: "e-commers"
    },
    {
      tag: "car",
      classForTags: "car"
    },
    {
      tag: "performance",
      classForTags: "performance"
    },
    {
      tag: "travel",
      classForTags: "travel"
    },
    {
      tag: "fooddelivery",
      classForTags: "food-delivery"
    },
    {
      tag: "fitness",
      classForTags: "fitness"
    }
  ];

  return  tags.map((tag) => {
    return request(endpoint, query, tag);
  })
}

const GetQuery  = () => {
  return GetVideo().catch((error) => console.error(error));
};

export default GetQuery
