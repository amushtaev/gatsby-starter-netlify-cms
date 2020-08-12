import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { useHistory } from 'react-router'
import { useKeenSlider } from 'keen-slider/react'
import {
  Arrow,
  DarkRectangle,
  Dot,
  Dots,
  KeenSlider,
  Article,
} from './pricing/styledComponents'

const BlogRollRelatedIndex = (props) => {
  const { data } = props;
  const { edges: posts } = data.allMarkdownRemark;
  const [currentSlide, setCurrentSlide] = useState(0);
  const hist = useHistory();
  const slidesPerView = 5;
  const slidesShow = 3;
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    spacing: 24,
    slidesPerView: slidesPerView,
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
        return false
    }
  }

  return (
    <>
      <section
        className="section index"
        style={{
          position: 'relative',
          overflowX: 'hidden',
          padding: '20px 0 27px 0',
          marginTop: '82px',
        }}
      >
        <KeenSlider ref={sliderRef}>
          {posts &&
            posts.map(({ node: post }, index) => {
              const isVisiblePost = getVisibleCard(index, posts.length);
              return (
                <Article
                  key={`${post.id}:blogRoll:${index + 1}`}
                  className={`blog-list-item tile is-child box notification ${
                    post.frontmatter.featuredpost ? 'is-featured' : ''
                  } keen-slider__slide number-slide${index + 1}`}
                  noShadow={!isVisiblePost}
                >
                  <DarkRectangle visible={!isVisiblePost} />
                  <header className="header article BlogRoll">
                    {post.frontmatter.featuredimage ? (
                      <div className="featured-thumbnail">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.image.publicURL,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                            srcSet:
                              post.frontmatter.featuredimage.childImageSharp
                                .fluid.srcSet,
                          }}
                        />
                      </div>
                    ) : null}
                  </header>
                  <div className="short-news-container">
                    <p className="post-meta">
                      <Link
                        className="title has-text-primary is-size-4"
                        to={post.fields.slug.replace('/blog', '')}
                      >
                        {post.frontmatter.title}
                      </Link>
                    </p>
                    <div
                      className="articl-footer"
                      style={{ gridTemplateColumns: '194px 80px' }}
                    >
                      <span className="date">{post.frontmatter.date}</span>
                      <Link
                        className="read-more"
                        to={post.fields.slug.replace('/blog', '')}
                      >
                        →
                      </Link>
                    </div>
                  </div>
                  <div className="catecory_background">
                    {post.frontmatter.categories &&
                    post.frontmatter.categories.length ? (
                      <>
                        {post.frontmatter.categories.map(
                          (category) => category
                        )}
                      </>
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
                e.stopPropagation() || slider.prev()
              }}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={(e) => {
                e.stopPropagation() || slider.next()
              }}
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
                onClick={() => {
                  slider.moveToSlideRelative(idx)
                }}
                active={currentSlide === idx}
              />
            )
          })}
        </Dots>
      )}
      <div style={{ marginBottom: '112px' }}></div>
    </>
  )
}

function ArrowLeft(props) {
  const { disabled, onClick } = props;
  const disabeld = disabled ? ' arrow--disabled' : '';
  return (
    <Arrow
      left
      onClick={onClick}
      className={`arrow arrow--left${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="52"
      viewBox="0 0 30 52"
    >
      <path
        d="M28.9701 1.01766C28.6458 0.695079 28.2605 0.439143 27.8363 0.264515C27.4122 0.0898877 26.9575 0 26.4983 0C26.0391 0 25.5843 0.0898877 25.1602 0.264515C24.736 0.439143 24.3508 0.695079 24.0265 1.01766L0.816792 24.046C0.557872 24.3023 0.352455 24.6069 0.212299 24.9421C0.0721433 25.2773 0 25.6367 0 25.9996C0 26.3626 0.0721433 26.7219 0.212299 27.0572C0.352455 27.3924 0.557872 27.6969 0.816792 27.9533L24.0265 50.9816C25.395 52.3395 27.6015 52.3395 28.9701 50.9816C30.3386 49.6237 30.3386 47.4345 28.9701 46.0767L8.74886 25.9858L28.998 5.8949C30.3386 4.56474 30.3386 2.34782 28.9701 1.01766Z"
        fill="white"
      />
    </Arrow>
  )
}

function ArrowRight(props) {
  const { disabled, onClick } = props
  const disabeld = disabled ? ' arrow--disabled' : '';
  return (
    <Arrow
      left={false}
      onClick={onClick}
      className={`arrow arrow--right${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="52"
      viewBox="0 0 30 52"
    >
      <path
        d="M1.02994 50.9823C1.35424 51.3049 1.73951 51.5609 2.16366 51.7355C2.58781 51.9101 3.04251 52 3.50173 52C3.96095 52 4.41566 51.9101 4.83981 51.7355C5.26396 51.5609 5.64922 51.3049 5.97352 50.9823L29.1832 27.954C29.4421 27.6977 29.6475 27.3931 29.7877 27.0579C29.9279 26.7227 30 26.3633 30 26.0004C30 25.6374 29.9279 25.2781 29.7877 24.9428C29.6475 24.6076 29.4421 24.3031 29.1832 24.0467L5.97352 1.0184C4.60496 -0.339472 2.39851 -0.339472 1.02994 1.0184C-0.338619 2.37626 -0.338619 4.56547 1.02994 5.92334L21.2511 26.0142L1.00201 46.1051C-0.338617 47.4353 -0.338623 49.6522 1.02994 50.9823Z"
        fill="white"
      />
    </Arrow>
  )
}

BlogRollRelatedIndex.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  categories: PropTypes.object,
  id: PropTypes.any,
};

export default () => {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollRelatedIndexQuery {
          allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
            limit: 10
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  categories
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      fluid(maxWidth: 220, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  image {
                    publicURL
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRollRelatedIndex data={data} />}
    />
  )
}
