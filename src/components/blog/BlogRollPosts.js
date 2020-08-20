import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import BlogRollTamplate from "./BlogRollTamplate";

class BlogRollPosts extends React.Component {

  render() {
    const { data, search } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <BlogRollTamplate posts={posts} search={search} />
    )
  }
}

BlogRollPosts.propTypes = {
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
      query BlogRollPostsQuery($regex: String) {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" }, title: {regex: $regex} } }
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
         <BlogRollPosts data={data} search={search} />
     }
  />
)
