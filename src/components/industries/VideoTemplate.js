import React, { useRef, useEffect, useState } from 'react';
import { VideoButton } from '../pricing/styledComponents'

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
  const [isLoading, setLoading ]  = useState(true);
  const elementRef   = useRef(null);
  const [elementWidth, setElementWidth] = useState();
  const [elementHeight, setElementHeight] = useState();

  const mouseOut = () => {
    setOnMouseEnterHandler(false);
    setOnMouseLeaveHandler(true)
  };

  const mouseOver = () => {
    setElementHeight(elementRef.current.offsetHeight);
    setElementWidth(elementRef.current.offsetWidth);
    setOnMouseEnterHandler(true);
    setOnMouseLeaveHandler(false)
  };

  return (
    <li
      className={`grid-item ${video.project.size.name}`}
      ref = { elementRef }
      style={{width: elementWidth, height: elementHeight}}
    >
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
           style={{width: elementWidth, height: elementHeight}}
      >
        <VideoButton
          text='Try for free!'
          onClick={() => {
            window.location.href = 'https://app.softcube.com'
          }}
        />
        <div className={`template-video-item__overlay ${onMouseEnterHandler ? 'opacity_load__video' : 'opacity_null'}`}></div>
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
        ? <video
          className='video-item__content_video'
          autoPlay={true}
          preload='auto'
          poster={itemImgSrc}
          loop={true}
          onLoadStart={() => {
            console.log('...I am loading...')
            setLoading(true);
          }}
          onLoadedData={() => {
            console.log('Data is loaded!')
            setLoading(false);
          }}
          src={itemVideoSrc}
          style={{width: elementWidth, height: elementHeight}}
        />
        : null
      }
      </>
    </li>
  )
};

export default VideoTemplate;

