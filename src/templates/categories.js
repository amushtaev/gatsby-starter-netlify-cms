import React from 'react'
import Layout from '../components/Layout'
import BlogRollPosts from "../components/BlogRollPosts";
import NavRoll from "../components/NavRoll";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import {Link} from "gatsby";

class CategoriesRoute extends React.Component {
  render() {
    const slugs = this.props.data.allMarkdownRemark.group;
    const refSlug = window.location.href.split("/category/")[1];

    console.log(slugs[3].fieldValue, "slugs")

    return (
      <Layout>
        <section className="section index Posts">
          <div
            className="index Blog"
          >
            <h1 className="h1-title" >
              SOFTCUBE BLOG
            </h1>
            <h2 className="h2-subtitle">News, guides, and updates on Google and Facebook marketing</h2>
          </div>
          <NavRoll />
          <div className="container">
            <div className="content">
              <div className="columns is-multiline BlogRollPosts">
                {slugs.map((slug) => (
                  <>
                    {slug.fieldValue === refSlug ? (
                      <>
                        {slug.edges.map((post) => (
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
                                    to="{post.fields.slug}"
                                  >
                                    {post.node.frontmatter.title}
                                  </Link>
                                </p>
                                <div className="articl-footer">
                      <span className="date">
                        {post.node.frontmatter.date}
                      </span>
                                  <Link className="read-more" to="{post.node.fields.slug}">
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
                      </>
                    ) : null}
                  </>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Layout>
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
            }
          }
        }
      }
    }
  }
}
`;
