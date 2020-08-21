import React from 'react'
import { Link } from 'gatsby'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import { kebabCase } from 'lodash'

const BlogRollTamplate = (props) => {

  const searchToLowerCase = kebabCase(props.search);

  return (
    <div className="columns is-multiline BlogRollPosts">
      {props.posts &&
      props.posts.map(({ node: post }, index) => (
        <div className="is-parent column is-4" key={post.id}>
          {kebabCase(post.frontmatter.title).indexOf(searchToLowerCase) > -1 ?
            <article
              className={`blog-list-item tile is-child box notification ${
                post.frontmatter.featuredpost ? 'is-featured' : ''
              }`}
            >
              <header className="header article BlogRoll">
                {post.frontmatter.image ? (
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
                  <Link className="read-more-arrow" to={post.fields.slug.replace('/blog', '')}>
                    ￫
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
            : null}
        </div>
      ))}
    </div>
  )
};

export default BlogRollTamplate
