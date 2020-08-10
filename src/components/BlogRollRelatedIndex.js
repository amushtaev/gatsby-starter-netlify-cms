import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImageRelated from './PreviewCompatibleImageRelated'
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class BlogRollRelatedIndex extends React.Component {

  render() {
    const { data} = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    let count = 0;

    return (
      <div className="columns is-multiline BlogRoll">
        {posts &&
        posts.map(({ node: post }) => (
          <div className="is-parent column is-4" key={post.id}>
            <article
              className={`blog-list-item tile is-child box notification ${
                post.frontmatter.featuredpost ? 'is-featured' : ''
              }`}
            >
              <header className="header article BlogRoll">
                {post.frontmatter.featuredimage ? (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  </div>
                ) : null}
              </header>
              {post.frontmatter.categories && post.frontmatter.categories.length ? (
                <h3>Categories:
                  {post.frontmatter.categories.map((category, index) => (
                    <div key={category + index}>{category}</div>
                  ))}
                </h3>
              ) : null}
              <div className="short-news-container">
                <p className="post-meta">
                  <Link
                    className="title has-text-primary is-size-4"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                </p>
                <div className="articl-footer">
                    <span className="date">
                      {post.frontmatter.date}
                    </span>
                  <Link className="read-more" to={post.fields.slug}>
                    →
                  </Link>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    )
  }
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
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
)}
