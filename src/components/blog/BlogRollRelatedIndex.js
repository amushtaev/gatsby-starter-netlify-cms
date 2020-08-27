import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import SliderArticl from '../SliderArticl'

const BlogRollRelatedIndex = (props) => {
  const { data} = props;
  const { edges: posts } = data.allMarkdownRemark;
  const margin = 120;

  return (
    <SliderArticl posts={posts} margin={margin} />
  )
};

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
          filter: { 
            frontmatter: { 
              templateKey: { eq: "blog-post" } 
            } 
          }, limit: 10) {
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
                    fluid(maxWidth: 120, quality: 70) {
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
)}
