import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogRollPosts from "../components/BlogRollPosts";

class CategoriesRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.group;
    const category = "posts[0].fieldValue";
    const title = this.props.data.site.siteMetadata.title;
    //TODO
    console.log(category, "category", title, "title", )

    return (
      <Layout>
        <section className="section index Posts">
          <div className="container">
            <div className="content">
              <BlogRollPosts />
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
  allMarkdownRemark(limit: 1000) {
    postsName: group(field: frontmatter___categories) {
      fieldValue
      totalCount
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          image {
            publicURL
          }
        }
      }
    }
    postsSlug: group(field: frontmatter___categories_slug){
      fieldValue
    }
  }
}
`;
