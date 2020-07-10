import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

export default class BlogPaginationPosts extends React.Component {
  render() {
    const { pageContext } = this.props;
    const posts = pageContext.nodes;

    console.log(pageContext, "pageContext BlogPaginationPosts")

    return (
      <div className="columns is-multiline BlogRollPosts">
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
                          image: post.frontmatter.image.publicURL,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                </header>
                <div className="short-news-container">
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug.replace("/blog", "")}
                    >
                      {post.frontmatter.title}
                    </Link>
                  </p>
                  <div className="articl-footer">
                    <span className="date">
                      {post.frontmatter.date}
                    </span>
                    <Link className="read-more" to={post.fields.slug.replace("/blog", "")}>
                      →
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
