import React from 'react'
import LayoutBlog from '../components/LayoutBlog'
import NavRoll from "../components/NavRoll";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import {Link} from "gatsby";

class CategoriesRoute extends React.Component {
  render() {
    const refSlug = typeof window !== 'undefined' && window.location.href.split("/category/")[1];
    const data = this.props.data.allMarkdownRemark.group;

    console.log(data)

    return (
      <LayoutBlog>
        <div
          className="index Blog Category"
        >
          <h1 className="h1-title" >
            SOFTCUBE BLOG
          </h1>
          <h2 className="h2-subtitle">News, guides, and updates on Google and Facebook marketing</h2>
        </div>
        <NavRoll active={refSlug} />
        <section className="section index Category">
          <div className="container">
            <div className="content">
              <div className="columns is-multiline BlogRollPosts">
                {data.map((posts, index) => (
                  <React.Fragment key={`${index}category`}>
                    {posts.fieldValue === refSlug ? (
                      <React.Fragment key={index}>
                        {posts.edges.map((post) => (
                          <div className="is-parent column is-4" key={post.node.id}>
                            <article
                              className={`blog-list-item tile is-child box notification ${
                                post.node.frontmatter.featuredpost ? 'is-featured' : ''
                              }`}
                            >
                              <header className="header article Category">
                                {post.node.frontmatter.featuredimage ? (
                                  <div className="featured-thumbnail">
                                    <PreviewCompatibleImage
                                      imageInfo={{
                                        image: post.node.frontmatter.featuredimage.publicURL,
                                        alt: `featured image thumbnail for post ${post.node.frontmatter.title}`,
                                      }}
                                    />
                                  </div>
                                ) : null}
                              </header>
                              <div className="short-news-container">
                                <p className="post-meta">
                                  <Link
                                    className="title has-text-primary is-size-4"
                                    to={post.node.fields.slug.replace("/blog", "")}
                                  >
                                    {post.node.frontmatter.title}
                                  </Link>
                                </p>
                                <div className="articl-footer">
                                  <span className="date">
                                    {post.node.frontmatter.date}
                                  </span>
                                  <Link className="read-more" to={post.node.fields.slug.replace("/blog", "")}>
                                    →
                                  </Link>
                                </div>
                              </div>
                              <div className="catecory_background">
                                {post.node.frontmatter.categories && post.node.frontmatter.categories.length ? (
                                  <>
                                    {post.node.frontmatter.categories.map((category) => (category))}
                                  </>
                                ) : null}
                              </div>
                            </article>
                          </div>
                        ))}
                      </React.Fragment>
                    ) : null}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>
      </LayoutBlog>
    )
  }
}

export default CategoriesRoute

export const categoryPageQuery = graphql`
  query CategoriesPage {
  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(limit: 1000, sort: {order: DESC, fields: [frontmatter___date]}) {
    group(field: frontmatter___categories_slug) {
      fieldValue
      totalCount
      edges {
        node {
          id
          frontmatter {
            categories
            categories_slug
            image {
              publicURL
            }
            title
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage {
              publicURL
              childImageSharp {
                fluid(maxWidth: 220, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
}
`;
