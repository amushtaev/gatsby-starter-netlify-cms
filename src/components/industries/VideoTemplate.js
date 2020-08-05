import React from 'react';
import { Link } from 'gatsby'
import { VideoButton } from '../pricing/styledComponents'

const VideoTemplate = (props) => {
  const {video} = props;
  const itemClassName = 'grid-item '+ video.project.size.name;
  const itemImgSrc = 'https://s3.eu-central-1.amazonaws.com/media.softcube.com/' +
    video.project.video.urlInfo.storageLevel + '/' +
    video.project.video.urlInfo.accountID + '/' +
    video.project.video.urlInfo.fileKeyBigThumbnail;

  return (
    <li className={itemClassName}>
      <div className='video-item__content'>
        <VideoButton
          text='Try for free!'
          onClick={() => {
            window.location.href = 'https://app.softcube.com'
          }}
        />
        <div className='template-video-item__overlay'></div>
      </div>
      <img
        src={itemImgSrc} />
    </li>
  )
};

export default VideoTemplate;
