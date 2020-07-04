import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import NavRoll from "../components/NavRoll";
import facebook from "../img/social/facebook.svg";
import twitter from "../img/social/twitter.svg";
import instagram from "../img/social/instagram.svg";
import vimeo from "../img/social/vimeo.svg";
import linkedin from "../img/social/linkedin.svg";
import gplus from "../img/social/gplus.svg";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  categories,
  id,
  image,
  date,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section Blog-Post" id={id}>
      <div
        className="index Blog"
      >
        <h1 className="h1-title" >
          SOFTCUBE BLOG
        </h1>
        <h2 className="h2-subtitle">News, guides, and updates on Google and Facebook marketing</h2>
      </div>
      <NavRoll />
      {helmet || ''}
      <div className="container white s__width" style={{position: `relative`}}>
        <div className="columns">
          <div className="column post_column">
            <img className="post_image" src={image} />
            <div style={{paddingTop: "8px"}}>
              {categories && categories.length ? (
              <>
                {categories.map((category) => (
                  <span className="post_category" style={{display: `inline-flex`}} key={category + `category`}>{category}</span>
                ))}
              </>
            ) : null}
              <span className="date" style={{display: `inline-flex`}} >&nbsp;&nbsp;•&nbsp;&nbsp;{date}</span>
            </div>
            <h1 className="title post_title">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem`, display: `none` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <div className="column social" style={{
            width: `48px`,
            display: `flex`,
            flexDirection: `column`,
            position: `absolute`,
            top: `32px`,
            right: `60px`

          }}>
            <a title="facebook" href="https://facebook.com">
              <img
                src={facebook}
                alt="Facebook"
              />
            </a>
            <a title="twitter" href="https://twitter.com">
              <img
                className="fas fa-lg"
                src={twitter}
                alt="Twitter"
              />
            </a>
            <a title="instagram" href="https://linkedin.com">
              <img
                src={linkedin}
                alt="linkedin"
              />
            </a>
            <a title="vimeo" href="https://gplus.com">
              <img
                src={gplus}
                alt="gplus"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  categories: PropTypes.array,
  id: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        id={post.id}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        categories={post.frontmatter.categories}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        image={post.frontmatter.image ?
          post.frontmatter.image.publicURL : null
        }
        date={post.frontmatter.date}
      />
    </Layout>
  )
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        categories
        description
        tags
        image {
          publicURL
        }
      }
    }
  }
`;
