import React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from '../../components/Layout'
import {Helmet} from "react-helmet";
import {kebabCase} from "lodash";

const CategoriesPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  console.log(group, "group CategoriesPage")
  return (
    <Layout>
      <Helmet title={`Categories | ${title}`} />
      <h1 className="title is-size-2 is-bold-light">Categories</h1>
      <ul className="taglist">
        {group.map((catygory) => (
          <li key={catygory.fieldValue}>
            <Link to={`/tags/${kebabCase(catygory.fieldValue)}/`}>
              {catygory.fieldValue} ({catygory.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
};

export default CategoriesPage;

export const categoryPageQuery = graphql`
  query CategoriesQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
  `
;
