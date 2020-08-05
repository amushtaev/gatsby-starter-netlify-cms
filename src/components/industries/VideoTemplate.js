import React, { useRef, useEffect, useState } from 'react';
import { VideoButton } from '../pricing/styledComponents'
import useDebounce from '../DebouncedHook'

const VideoTemplate = (props) => {
  const {video} = props;
  const itemImgSrc = 'https://s3.eu-central-1.amazonaws.com/media.softcube.com/' +
    video.project.video.urlInfo.storageLevel + '/' +
    video.project.video.urlInfo.accountID + '/' +
    video.project.video.urlInfo.fileKeyBigThumbnail;
  const itemVideoSrc = 'https://s3.eu-central-1.amazonaws.com/media.softcube.com/' +
    video.project.video.urlInfo.storageLevel + '/' +
    video.project.video.urlInfo.accountID + '/' +
    video.project.video.urlInfo.fileKeyPreview;
  const [onMouseEnterHandler, setOnMouseEnterHandler] = useState(false);
  const [onMouseLeaveHandler, setOnMouseLeaveHandler] = useState(true);

  const mouseOut = () => {
    setOnMouseEnterHandler(false);
    setOnMouseLeaveHandler(true)
  };

  const mouseOver = () => {
    setOnMouseEnterHandler(true);
    setOnMouseLeaveHandler(false)
  };

  return (
    <li className={`grid-item ${video.project.size.name}`}>
      <div className='video-item__content'
           onMouseEnter={
             () => {
               mouseOver()
             }
           }
           onMouseLeave={
             () => {
               mouseOut()
             }
           }
      >
        <VideoButton
          text='Try for free!'
          onClick={() => {
            window.location.href = 'https://app.softcube.com'
          }}
        />
        <div className='template-video-item__overlay'></div>
      </div>
      <>
      {!onMouseEnterHandler && onMouseLeaveHandler
        ? <img
          src={itemImgSrc}
          data-src={itemVideoSrc}
          //onMouseLeave={toggleHover(false)}
        />
        : null
      }
      {onMouseEnterHandler && !onMouseLeaveHandler
        ? <video autoPlay={true} preload='auto' poster={itemImgSrc} loop={true}>
          <source src={itemVideoSrc} type="video/mp4" />
        </video>
        : null
      }
      </>
    </li>
  )
};

export default VideoTemplate;
