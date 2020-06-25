import React from "react"
import PropTypes from 'prop-types'
import GetVideo from '../resolvers'

export const IndustriesVideo = () => {
  const imageUrl = "https://s3.eu-central-1.amazonaws.com/media.softcube.com/protected/eu-central-1:d96d60d3-54f1-476c-9203-4f3c160288b5/1872:682c8f53-e86f-455e-b66d-b25ee494d493_big_thumbnail.jpg"
  const videoUrl = "https://s3.eu-central-1.amazonaws.com/media.softcube.com/protected/eu-central-1:d96d60d3-54f1-476c-9203-4f3c160288b5/1872:682c8f53-e86f-455e-b66d-b25ee494d493_preview.mp4"
  console.log(GetVideo)
  return (
    <div title={videoUrl} className={imageUrl}>GetVideo</div>
  )
}

IndustriesVideo.prototype = {
  videoUrl: PropTypes.string,
  imageUrl: PropTypes.string,
}

export default IndustriesVideo
