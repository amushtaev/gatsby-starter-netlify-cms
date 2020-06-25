import React from "react"
import { request } from "graphql-request"

async function GetVideo() {
  const endpoint = "https://graph.softcube.com/graphql";

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

  return tags.map((tag) => {
    //request(endpoint, query, tag).then((data) => console.log(data.search))
    let d = request(endpoint, query, tag).then((response) => {
      return response.search
    });
    console.log(d, "data.search")
  })
}

export default GetVideo();
