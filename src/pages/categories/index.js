import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'

const CategoriesPage = () => {
  return (
    <Layout>
      <button>Hello world</button>
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
