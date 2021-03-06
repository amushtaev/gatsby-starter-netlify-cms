import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import SliderArticl from './SliderArticl'

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
  category_slug: PropTypes.string,
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
                categories_slug
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
                tags
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRollRelatedIndex data={data} />}
  />
)}
