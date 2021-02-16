import React, {useState} from 'react'
import { Link } from 'gatsby'
import {useKeenSlider} from "keen-slider/react";
import { DarkRectangle, Dot, Dots, KeenSlider, ArticleVideo} from "../pricing/styledComponents";
import ArrowRight from "../ArrowRight";
import ArrowLeft from "../ArrowLeft";
import { ShowMore } from '../pricing/styledComponents';
import useWindowSize from '../Getscreen';
import {VideoSlideItems} from '../pricing/videoContent'

const SliderVideo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const windowSize = useWindowSize();
  /*const [opacities, setOpacities] = React.useState([]);*/
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    spacing: 24,
    slidesPerView: 5,
    centered: false,
    loop: false,
    mode: 'snap',
    //duration: 1000,
    breakpoints: {
      '(min-width: 300px)': {
        slidesPerView: 1,
        mode: 'free-snap',
        centered: false,
        loop: false,
      },
      '(min-width: 520px)': {
        slidesPerView: 2,
        mode: 'free-snap',
        centered: true,
        loop: true,
      },
      '(min-width: 768px)': {
        slidesPerView: 3,
        mode: 'free-snap',
      },
      '(min-width: 1200px)': {
        slidesPerView: 5,
        mode: 'free-snap',
        loop: true,
      },
    },
  });

  const getVisibleCard = (index) => {
    switch (currentSlide) {
      case 0:
        return index === 1 || index === 2 || index === 3;
      case 1:
        return index === 2 || index === 3 || index === 4;
      case 2:
        return index === 3 || index === 4 || index === 5;
      case 3:
        return index === 4 || index === 5 || index === 6;
      case 4:
        return index === 5 || index === 6 || index === 7;
      case 5:
        return index === 6 || index === 7 || index === 8;
      case 6:
        return index === 7 || index === 8 || index === 9;
      case 7:
        return index === 8 || index === 9 || index === 10;
      case 8:
        return index === 9 || index === 10 || index === 0;
      case 9:
        return index === 10 || index === 0 || index === 1;
      case 10:
        return index === 0 || index === 1 || index === 2;
      default:
        return false;
    }
  };

  return (
    <>
      <section className='section index'>
        <KeenSlider
          ref={sliderRef}
        >
          {VideoSlideItems.map(
            (video, index) => {
            const isVisiblePost = getVisibleCard(index, VideoSlideItems.length);
            return (
              <ArticleVideo
                key={`${video.link}:link:${index + 1}`}
                className={`keen-slider__slide number-slide${index + 1}`}
                noShadow={windowSize.width > 780 ? !isVisiblePost : false}
              >
                {windowSize.width > 780 ? <DarkRectangle visible={!isVisiblePost} /> : null}
                <header className="header article video-slider">
                  {video.text ? (
                    /*<video
                      key={`${video.src}:link:${index + 1}`}
                      className='video-item__content_slider'
                      autoPlay={true}
                      preload='none'
                      poster={video.poster}
                      loop={true}
                      playsInline
                      id={`sliderVideo_${index + 1}`}
                      loading='lazy'
                      muted={true}
                    >
                      <source src={`${video.src}`} type='video/mp4'/>
                    </video>*/
                    <img width={'306'} height={'306'} key={`${video.src}:link:${index + 1}`} src={`${video.src}`} />
                  ) : null}
                </header>
                {/*<div className="short-news-container">
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary"
                      to={'#'}
                    >
                      {video.text}
                    </Link>
                  </p>
                  <div
                    className="articl-footer-video"
                    style={{gridTemplateColumns: '1fr 80px', width: 'calc(100% - 28px)'}}
                  >
                    <span className="date">
                      {'12 March 2020'}
                    </span>
                    <Link
                      className="read-more-arrow"
                      to={'#'}
                    >
                      <ShowMore />
                    </Link>
                  </div>
                </div>*/}
              </ArticleVideo>
            )
          })}
        </KeenSlider>
        {slider && (
          <>
            <ArrowLeft
              onClick={(e) => {
                e.stopPropagation() ||
                slider.prev()}}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={(e) => {
                e.stopPropagation() ||
                slider.next()}
              }
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </section>
      {slider && (
        <Dots>
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <Dot
                key={idx}
                onClick={()=> {
                  slider.moveToSlideRelative(idx);
                }}
                active={currentSlide === idx}
              />
            );
          })}
        </Dots>
      )}
      <div className='margin'></div>
    </>
  )
}

export default SliderVideo
