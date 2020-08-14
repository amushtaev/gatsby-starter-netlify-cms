import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import { kebabCase } from 'lodash'
import BlogRollTamplate from "./BlogRollTamplate";

class BlogRollPostsLatest extends React.Component {

  render() {
    const { data, search } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <BlogRollTamplate posts={posts} search={search} />
    )
  }
}

BlogRollPostsLatest.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default ({search}) => (
  <StaticQuery
    $regex={search}
    query={graphql`
      query BlogRollPostsLatestQuery($regex: String) {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" }, title: {regex: $regex} } }, limit: 3
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
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
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                image {
                  publicURL
                }
              }
            }
            next {
              fields {
                slug
              }
            }
            previous {
              fields {
                slug
              }
            }
          }
        }
      }
    `}
     render={
       (data, count) =>
         <BlogRollPostsLatest data={data} search={search} />
     }
  />
)
