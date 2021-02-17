import React, {useState, useEffect} from 'react'
import SliderSlick from "react-slick";
import {DarkRectangle, ArticleVideo, DarkRectangleRu} from "../pricing/styledComponents";
import ArrowRight from "../ArrowRight";
import ArrowLeft from "../ArrowLeft";
import useWindowSize from '../Getscreen';
import "../slick.min.css";
import {VideoSlideItems} from '../pricing/videoContent'
import {SlickArrowLeft, SlickArrowRight} from "../../img/icons";

const SliderVideo = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() =>{
    /*for (let i = 0; document.querySelectorAll(".slick-slide").length; i++){
      document.querySelectorAll(".slick-slide video")[i].pause();
    }*/
    document.querySelector('.slick-center video').play();
  });
  const windowSize = useWindowSize();
/*  useEffect(() => {
    document.querySelectorAll(".slick-active")[0].style.transform = 'scale(1)';
    document.querySelectorAll(".slick-active")[1].style.transform = 'scale(1.2)';
    document.querySelectorAll(".slick-active")[2].style.transform = 'scale(1.5)';
    document.querySelectorAll(".slick-active")[4].style.transform = 'scale(1)';
    document.querySelectorAll(".slick-active")[3].style.transform = 'scale(1.2)';
  })*/

  const onBeforeChange = (oldIndex, newIndex) => {
    document.querySelector('.slick-center video').pause()
    //this.setState({ foo: "bar" });
  };
  const onafterChange = (oldIndex, newIndex) => {
    document.querySelector('.slick-center video').pause()
    document.querySelector('.slick-center video').play()
    //this.setState({ foo: "bar" });
  };
  const settings = {
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 5,
    arrows: true,
    dots: true,
    infinite: true,
    //speed: 1500,
    slidesToScroll: 1,
    dotsClass: "slick-dots",
    className: "sliderSlick",
    beforeChange: onBeforeChange,
    afterChange: onafterChange,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          centerPadding: '0',
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '0px',
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  };

  return <>
    <section className='section index video'>
      <SlickArrowRight />
      <SlickArrowLeft />
      <SliderSlick {...settings}>
        {VideoSlideItems.map(
          (video, index) => {
            return (
              <ArticleVideo
                key={`${video.link}:link:${index + 1}`}
                className={`keen-slider__slide number-slide${index + 1}`}
              >
                <div key={`${video.link}:dark:${index + 1}`} className='dark-rectangle'></div>
                <header className="header article video-slider">
                  {video.text ? (
                    <video
                      key={`${video.src}:link:${index + 1}`}
                      className='video-item__content_slider'
                      autoPlay={false}
                      preload='none'
                      poster={video.poster}
                      loop={true}
                      playsInline
                      id={`sliderVideo_${index + 1}`}
                      loading='lazy'
                      muted={true}
                      width='370'
                      height='370'
                    >
                      <source src={`${video.video}`} type='video/mp4'/>
                    </video>
                    /*<img width={'306'} height={'306'} key={`${video.src}:link:${index + 1}`} src={`${video.src}`}/>*/
                  ) : null}
                  {/*{video.text ? (
                    <img width={'306'} height={'306'} key={`${video.poster}:poster:${index + 1}`} src={`${video.poster}`}/>
                  ) : null}*/}
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
      </SliderSlick>
    </section>
    <div className='margin'></div>
  </>
};

export default SliderVideo
