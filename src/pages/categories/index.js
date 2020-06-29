import React from 'react'
import { graphql } from 'gatsby'

const CategoriesPage = () => {
  return <button>Hello world</button>
}

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
