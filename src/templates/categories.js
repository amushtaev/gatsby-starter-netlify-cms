import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogRollPosts from "../components/BlogRollPosts";

class CategoriesRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.group;
    console.log(posts[0].nodes, "posts")
    const postLinks = posts.map((post) => (
      <li key={post.nodes[0].fields.slug}>
        <Link to={post.nodes[0].fields.slug}>
          <h2 className="is-size-2">{post.nodes[0].frontmatter.title}</h2>
        </Link>
      </li>
    ));
    const category = this.props.pageContext.categories;
    const title = this.props.data.site.siteMetadata.title;

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
    group(field: frontmatter___categories) {
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
  }
}
`;
