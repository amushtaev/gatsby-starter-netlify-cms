import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImageRelated from '../PreviewCompatibleImageRelated'

class BlogRollRelated extends React.Component {

  render() {
    const { data, category, id} = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const maxCountPosts = 4;
    let count = 0;

    return (
      <div key={count} className="columns is-multiline BlogRollPosts" style={{marginTop: `10px`}}>
        {posts &&
          posts.map(({ node: post }, index) => (
            <React.Fragment key={index}>
              {post.frontmatter.categories[0] === category[0] && post.id !== id && count++ < maxCountPosts ? (
                <div className="is-parent column is-4" key={post.fields.slug + `related`} id={post.id}>
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
                          to={post.fields.slug.replace("/blog", "")}
                        >
                          {post.frontmatter.title}
                        </Link>
                      </p>
                      <div className="articl-footer_related">
                        <span className="date white">
                          {post.frontmatter.date}
                        </span>
                        <Link className="read-more" to={post.fields.slug.replace("/blog", "")} style={{color: `#fff`}}>
                          →
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              ) : null}
            </React.Fragment>
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
  categories: PropTypes.object,
  id: PropTypes.any,
};

export default ({ categories, id }) => {

  return (
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
    render={(data, count) => <BlogRollRelated data={data} count={count} category={categories} id={id} />}
  />
)}
