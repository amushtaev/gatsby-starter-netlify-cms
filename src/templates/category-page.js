import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BlogCatPostTemplate = ({
  contentComponent,
  content,
  description,
  title,
  helmet,
  categories,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section amushtaev">
      <div className="container content">
        <div className="columns">
          {console.log(PostContent, "PostContent")}
        </div>
      </div>
      {/*{helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            {categories && categories.length ? (
              <h3>Categories:
                <ul className="categorylist">
                {categories.map((category) => (
                  <li key={category + `category`}>
                    <Link to={`/category/${kebabCase(category)}/`}>{category}</Link>
                  </li>
                ))}
                </ul>
              </h3>
            ) : null}
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
          </div>
        </div>
      </div>*/}
    </section>
  )
};

BlogCatPostTemplate.propTypes = {
  contentComponent: PropTypes.func,
  helmet: PropTypes.object,
  /*content: PropTypes.node.isRequired,

  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  categories:PropTypes.string,*/
};

const CategoryPost = ({ data }) => {
  const { allMarkdownRemark: posts } = data;

  return (
    <Layout>
      {posts.group.map((category) => (
        console.log(category, "category")
      ))}
      <BlogCatPostTemplate
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${posts.nodes}`}</title>
            <meta
              name="description"
              content={`${posts.nodes}`}
            />
          </Helmet>
        }
        /*content={posts.html}

        description={posts.nodes}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${posts.nodes}`}</title>
            <meta
              name="description"
              content={`${posts.nodes}`}
            />
          </Helmet>
        }
        categories={posts.nodes}
        tags={posts.nodes}
        title={posts.nodes}*/
      />
    </Layout>
  )
};

CategoryPost.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object,
  }),
};

export default CategoryPost

export const pageCatQuery = graphql`
  query BlogCatPost {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          categories
          description
          date(formatString: "MMMM DD, YYYY")
          title
          templateKey
          tags
        }
        html
      }
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
        nodes {
          fields {
            slug
          }
        }
      }
      edges {
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
`;
