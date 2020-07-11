import React from 'react'
import LayoutBlog from '../../components/LayoutBlog'
import BlogRollPosts from '../../components/BlogRollPosts'
import NavRoll from "../../components/NavRoll";
import {Link, graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";

const createPaginationObjects = (length, page, increment = 2) =>
  Array.from({ length }, (_, i) => ({
    link: `/blog/${i + increment}/`,
    index: i + increment,
    current: page === i + increment,
  }));

class BlogIndexPage extends React.Component {

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const { page } = Math.ceil(posts.length / 6 );
    const {
      next,
      pages,
      total,
    } = data;

    console.log(page, "page", posts.length)

    // Create the navigation link
    let navItems = [
      {
        link: `/blog/`,
        index: 1,
        current: page === 1,
      },
    ];
    if (pages <= 5) {
      navItems = [
        ...navItems,
        ...Array.from({ length: pages - 1 }, (_, i) => ({
          link: `/blog/page/${i + 2}/`,
          index: i + 2,
          current: page === i + 2,
        })),
      ];
    } else {
      // We have a situation where we have to show the first
      // item, three items around the current one
      // and also the last item
      /* eslint-disable no-lonely-if */
      if (page <= 3) {
        // If the current one is closer to the start
        navItems = [
          ...navItems,
          ...createPaginationObjects(3, page),
          {
            separator: true,
            index: 'starter-separator',
          },
          {
            link: `/blog/page/${pages}/`,
            index: pages,
            current: false,
          },
        ];
      } else if (page > pages - 3) {
        // If the current one is closer to the last one
        navItems = [
          ...navItems,
          {
            separator: true,
            index: 'finisher-separator',
          },
          ...createPaginationObjects(4, page, pages - 3),
        ];
      } else {
        navItems = [
          ...navItems,
          {
            separator: true,
            index: 'starter-separator',
          },
          ...createPaginationObjects(3, page, page - 1),
          {
            separator: true,
            index: 'finisher-separator',
          },
          {
            link: `/blog/page/${pages}/`,
            index: pages,
            current: false,
          },
        ];
      }
      /* eslint-enable */
    }

    return (
      <LayoutBlog>
        <div
          className="index Blog"
        >
          <h1 className="h1-title" >
            SOFTCUBE BLOG
          </h1>
          <h2 className="h2-subtitle">News, guides, and updates on Google and Facebook marketing</h2>
        </div>
        <section>
          <NavRoll />
        </section>
        <section className="section index Posts">
          <div className="container">
            <div className="content">
              <BlogRollPosts data={data}/>
            </div>
          </div>
        </section>
        <nav className="pagination">
          {next && (
            <Link to={next} className="pagination-next">
              Next page
            </Link>
          )}
          <ul className="pagination-list">
            {navItems.map(item => (
              <li key={item.index}>
                {item.separator ? (
                  <span className="pagination-ellipsis">&hellip;</span>
                ) : (
                  <Link to={item.link} className={`pagination-link ${ item.current ? 'is-current' : '' }`} aria-label={`Goto page ${item.index}`} >
                    {item.index}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </LayoutBlog>
    )
  }
}

BlogIndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogIndexPageQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                categories
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                image {
                  publicURL
                }
              }
            }
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
    `}
    render={
      (data, count) =>
        <BlogIndexPage data={data} count={count} />
    }
  />
)
