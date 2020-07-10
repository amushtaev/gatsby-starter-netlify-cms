import React from 'react'
import { Link } from 'gatsby'
import NavRoll from "../components/NavRoll";
import BlogPaginationPosts from "../components/BlogPaginationPosts";
import LayoutBlog from "../components/LayoutBlog";

// A sweet helper function to create pagination object
const createPaginationObjects = (length, page, increment = 2) =>
  Array.from({ length }, (_, i) => ({
    link: `/blog/${i + increment}/`,
    index: i + increment,
    current: page === i + increment,
  }));


const BlogPage = ({data, pageContext }) => {
  const {
    nodes,
    page,
    prev,
    next,
    pages,
    total,
  } = pageContext;
  const prevLink = prev.includes("page/1") ? prev.replace("page/1", "") : prev;
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
        <NavRoll data={data} />
      </section>
      <section className="section index Posts">
        <div className="container">
          <div className="content">
            <BlogPaginationPosts pageContext={ pageContext } />
          </div>
        </div>
        <nav className="pagination">
          {prev && (
            <Link to={prevLink} className="pagination-previous">
              Previous
            </Link>
          )}
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
      </section>
    </LayoutBlog>
  )
};
export default BlogPage
