import React, {useState} from 'react'
import { Link } from 'gatsby'
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import SliderSlick from "react-slick";
import { DarkRectangle, Dot, Dots, KeenSlider, Article} from "../pricing/styledComponents";
import ArrowRight from "../ArrowRight";
import ArrowLeft from "../ArrowLeft";
import { ShowMore } from '../pricing/styledComponents';
import useWindowSize from '../Getscreen';
import "slick-carousel/slick/slick.css"

const SliderArticlSlick = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const windowSize = useWindowSize();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    dotsClass: "slick-dots",
    className: "sliderSlick",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  };

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
        return index === 5 || index === 6 || index === 0;
      case 5:
        return index === 6 || index === 0 || index === 1;
      default:
        return false;
    }
  };

  return (
    <>
      <section className='section index'>
        <SliderSlick {...settings}>
          {props.posts && props.posts.map(({ node: post }, index) => {
            const isVisiblePost = getVisibleCard(index, props.posts.length);
            return (
              <Article
                key={`${post.id}:blogRoll:${index + 1}`}
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''} keen-slider__slide number-slide${index + 1}`}
                noShadow={windowSize.width > 780 ? !isVisiblePost : false}
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
        </SliderSlick>
      </section>
      <div className='margin' style={{marginBottom: props.margin}}></div>
    </>
  )
}

export default SliderArticlSlick
