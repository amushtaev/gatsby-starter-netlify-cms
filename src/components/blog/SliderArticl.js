import React, {useState} from 'react'
import { Link } from 'gatsby'
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import {useKeenSlider} from "keen-slider/react";
import { DarkRectangle, Dot, Dots, KeenSlider, Article} from "../pricing/styledComponents";
import ArrowRight from "../ArrowRight";
import ArrowLeft from "../ArrowLeft";
import { ShowMore } from '../pricing/styledComponents';
import useWindowSize from '../Getscreen'

const SliderArticl = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const windowSize = useWindowSize();
  const slidesPerView = 5;
  const [opacities, setOpacities] = React.useState([]);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    spacing: 24,
    slidesPerView: slidesPerView,
    centered: false,
    loop: true,
    mode: 'snap',
    duration: 1000,
    breakpoints: {
      '(min-width: 300px)': {
        slidesPerView: 1,
        mode: 'free',
        centered: false,
        loop: false,
        move(s) {
          const new_opacities = s.details().positions.map(slide => slide.portion);
          setOpacities(new_opacities);
        }
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
        slidesPerView: slidesPerView,
        mode: 'free-snap',
      },
    },
  });

  const getVisibleCard = (index, lengthSlide) => {
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
        return index === 8 || index === 9 || index === 0;
      case 8:
        return index === 9 || index === 0 || index === 1;
      case 9:
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
          {props.posts && props.posts.map(({ node: post }, index) => {
            const isVisiblePost = getVisibleCard(index, props.posts.length);
            return (
              <Article
                key={`${post.id}:blogRoll:${index + 1}`}
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''} keen-slider__slide number-slide${index + 1}`}
                noShadow={!isVisiblePost}
                style={{ opacity: opacities[index] }}
              >
                {windowSize.width > 780 ? <DarkRectangle visible={!isVisiblePost} /> : null}
                <header className="header article BlogRoll">
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <Link
                        className="title has-text-primary"
                        to={post.fields.slug.replace("/blog", "")}
                      >
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `image for post ${post.frontmatter.title}`,
                            srcSet: post.frontmatter.featuredimage.childImageSharp.fluid.srcSet,
                          }}
                        />
                      </Link>
                    </div>
                  ) : null}
                </header>
                <div className="short-news-container">
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary"
                      to={post.fields.slug.replace("/blog", "")}
                    >
                      {post.frontmatter.title}
                    </Link>
                  </p>
                  <div
                    className="articl-footer"
                    style={{gridTemplateColumns: '1fr 80px', width: 'calc(100% - 28px)'}}
                  >
                    <span className="date">
                      {post.frontmatter.date}
                    </span>
                    <Link
                      className="read-more-arrow"
                      to={post.fields.slug.replace("/blog", "")}
                    >
                      <ShowMore />
                    </Link>
                  </div>
                </div>
                <div className="catecory_background">
                  {post.frontmatter.categories && post.frontmatter.categories.length ? (
                    <Link
                      style={{textDecoration: 'none'}}
                      to={`category/${post.frontmatter.categories_slug}/`}
                    >
                      {post.frontmatter.categories.map((category) => (category))}
                    </Link>
                  ) : null}
                </div>
              </Article>
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
      <div className='margin' style={{marginBottom: props.margin}}></div>
    </>
  )
}

export default SliderArticl
