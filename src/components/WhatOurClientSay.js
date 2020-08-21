import React, {useState} from "react";
import {useKeenSlider} from "keen-slider/react";
import {
  Author,
  AuthorContainer, AuthorPhoto,
  Comment,
  CommentCard,
  CommentContainer,
  DarkRectangle, Dot, Dots,
  IndexHeading,
  KeenSlider,
  Slide, TryAiButton
} from "./pricing/styledComponents";
import {Comments} from "./pricing/textContent";
import ArrowLeft from "../components/ArrowLeft";
import ArrowRight from "./ArrowRight";

const WhatOurClientSay = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    spacing: 24,
    slidesPerView: 6,
    centered: false,
    loop: true,
    mode: 'snap',
    breakpoints: {
      '(min-width: 300px)': {
        slidesPerView: 1,
        mode: 'free-snap',
        centered: false,
        loop: true,
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
        slidesPerView: 6,
        mode: 'free-snap',
      },
    },
  });

  const getVisibleCard = (index) => {
    switch (currentSlide) {
      case 0:
        return index === 1 || index === 2 || index === 3 || index === 4;
      case 1:
        return index === 2 || index === 3 || index === 4 || index === 5;
      case 2:
        return index === 3 || index === 4 || index === 5 || index === 6;
      case 3:
        return index === 4 || index === 5 || index === 6 || index === 0;
      case 4:
        return index === 5 || index === 6 || index === 0 || index === 1;
      case 5:
        return index === 6 || index === 0 || index === 1 || index === 2;
      case 6:
        return index === 0 || index === 1 || index === 2 || index === 3;
      default:
        return false;
    }
  };

  return (
    <>
      <IndexHeading
        top={'152px'}
        bottom={true}
      >
        WHAT OUR CLIENT SAY
      </IndexHeading>
      <div className='clients-say'>
        <KeenSlider
          // @ts-ignore
          ref={sliderRef}
        >
          {Comments.map(
            (comment, index) => {
              const isVisibleCard = getVisibleCard(index);
              return (
                <Slide
                  key={`${comment.author}:comment:${index + 1}`}
                  className={`keen-slider__slide number-slide${index + 1}`}
                >
                  <DarkRectangle visible={!isVisibleCard} />
                  <CommentCard noShadow={!isVisibleCard}>
                    <CommentContainer noShadow={!isVisibleCard}>
                      <Comment>{comment.text}</Comment>
                    </CommentContainer>
                    <AuthorContainer>
                      <AuthorPhoto>
                        <img
                          style={{
                            width: '56px',
                            height: '56px',
                            margin: '-2px 0 0 -2px',
                          }}
                          src={comment.photo}
                          alt=''
                        />
                      </AuthorPhoto>
                      <Author>{comment.author}</Author>
                    </AuthorContainer>
                  </CommentCard>
                </Slide>
              );
            }
          )}
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
      </div>
      {slider && (
        <Dots>
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              // eslint-disable-next-line jsx-a11y/control-has-associated-label,react/button-has-type
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
      <TryAiButton
        text='Try AI video ad maker'
        onClick={() => {
          //hist.push('/create');
          window.location.href = 'https://app.softcube.com'
        }}
        margin={'102px 0 0 0'}
      />
    </>
  );
};

export default WhatOurClientSay
