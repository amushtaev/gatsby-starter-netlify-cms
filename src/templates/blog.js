import React, { useEffect, useState } from 'react';
import NavRoll from '../components/NavRoll';
import BlogPaginationPosts from '../components/BlogPaginationPosts';
import LayoutBlog from '../components/LayoutBlog';
import Pagination from '../components/Pagination';
import PropTypes from 'prop-types';
import {graphql} from "gatsby";

const BlogPage = ({pageContext, stringSearch}) => {
    const [search, setSearch] = useState(stringSearch);

    useEffect(() => {
      const searchBlogPostQuery = graphql`
        query searchBlogPost($search: String!) {
          allMarkdownRemark(filter: {frontmatter: {title: {regex: $search}}}, limit: 100) {
            nodes {
              frontmatter {
                title
              }
            }
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  tags
                  templateKey
                  categories
                  categories_slug
                  title
                  date(formatString: "MMMM DD, YYYY")
                  image {
                    publicURL
                  }
                  featuredimage {
                    publicURL
                    childImageSharp {
                      fluid(maxWidth: 250, quality: 100) {
                        src
                        srcSet
                        base64
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `;
      console.log('SEARCH', search);
    }, [search]);

  return (
    <LayoutBlog>
      <div
        className='index Blog'
      >
        <h1 className='h1-title' >
          SOFTCUBE BLOG
        </h1>
        <h2 className='h2-subtitle'>News, guides, and updates on Google and Facebook marketing</h2>
      </div>
      <section>
        <NavRoll defaultSearch={stringSearch} onSearch={(value) => setSearch(value)} />
      </section>
      <section className='section index Posts'>
        <div className='container'>
          <div className='content'>
            <BlogPaginationPosts pageContext={ pageContext } />
          </div>
          <Pagination pageContext={pageContext} category={`/blog/`} link={`/blog/page/`} />
        </div>
      </section>
    </LayoutBlog>
  )
};
export default BlogPage

BlogPage.propType = {
  stringSearch: PropTypes.string,
};
