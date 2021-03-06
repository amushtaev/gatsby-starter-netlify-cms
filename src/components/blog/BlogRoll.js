import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import SliderArticl from './SliderArticl'
//import SliderArticlSlick from './SliderArticlSlick'

const BlogRoll = (props) => {
  const { data} = props;
  const { edges: posts } = data.allMarkdownRemark;
  const margin = 0;

  return (
    <SliderArticl posts={posts} margin={margin} />
  )
};

BlogRoll.propTypes = {
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
      query BlogRoll {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { 
            frontmatter: { 
              templateKey: { eq: "blog-post" } 
            } 
          }, limit: 6) {
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
                    fluid(maxWidth: 290, quality: 75) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                image {
                  publicURL
                }
                categories_slug
                tags
              }
            }
          }
        }
      }
    `}
      render={(data, count) => <BlogRoll data={data} />}
    />
  )}
