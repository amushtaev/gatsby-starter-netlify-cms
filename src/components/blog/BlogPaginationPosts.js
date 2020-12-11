import React from 'react'
import { Link } from 'gatsby'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import { ShowMore } from '../pricing/styledComponents';

export default class BlogPaginationPosts extends React.Component {
  render() {
    const { pageContext } = this.props;
    const posts = pageContext.nodes;

    return (
      <div className="columns is-multiline BlogPaginationPosts" itemScope itemType="http://schema.org/Blog">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-4" key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
                itemScope
                itemType="http://schema.org/BlogPosting"
              >
                <header className="header article BlogRoll">
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <Link
                        className="title_related"
                        to={post.fields.slug.replace("/blog", "")}
                        itemProp="url"
                      >
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage.publicURL,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                            srcSet: post.frontmatter.featuredimage.childImageSharp.fluid.srcSet,
                          }}
                        />
                      </Link>
                    </div>
                  ) : null}
                </header>
                <div className="short-news-container">
                  <p className="post-meta" itemProp="name">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug.replace("/blog", "")}
                    >
                      {post.frontmatter.title}
                    </Link>
                  </p>
                  <div className="articl-footer">
                    <span className="date" itemProp="datePublished">
                      <span style={{display: "none"}} itemProp="author">Softcube</span>
                      {post.frontmatter.date}&nbsp;&nbsp;•&nbsp;&nbsp;{post.frontmatter.minread} min read
                    </span>
                    <Link className="read-more-arrow" to={post.fields.slug.replace("/blog", "")}>
                      <ShowMore />
                    </Link>
                  </div>
                </div>
                <div className="catecory_background">
                  {post.frontmatter.categories && post.frontmatter.categories.length ? (
                    <>
                      {post.frontmatter.categories.map((category) => (category))}
                    </>
                  ) : null}
                </div>
              </article>
            </div>
          ))}
      </div>
    )
  }
}
