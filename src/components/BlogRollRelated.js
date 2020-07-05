import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImageRelated from './PreviewCompatibleImageRelated'

class BlogRollRelated extends React.Component {

  render() {
    const { data, count, categoriesRelated} = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    //TODO
    console.log(posts, "posts BlogRollRelated",  categoriesRelated, count)
    return (
      <div className="columns is-multiline BlogRollPosts" style={{marginTop: `10px`}}>
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-4" key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification with_background ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header className="header article BlogRollRelated">
                  {post.frontmatter.featuredimage ? (
                    <div className="image_related">
                      <PreviewCompatibleImageRelated
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                </header>
                <div className="short-news-container_related">
                  <p className="post-meta">
                    <Link
                      className="title_related"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                  </p>
                  <div className="articl-footer_related">
                    <span className="date white">
                      {post.frontmatter.date}
                    </span>
                    <Link className="read-more" to={post.fields.slug} style={{color: `#fff`}}>
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

BlogRollRelated.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  categoriesRelated: PropTypes.array
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollRelatedQuery {
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
          }
        }
      }
    `}
    render={(data, count) => <BlogRollRelated data={data} count={1} />}
  />
)
