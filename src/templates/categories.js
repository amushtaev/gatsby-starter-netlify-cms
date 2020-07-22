import React from 'react'
import { Link } from 'gatsby'
import NavRoll from "../components/NavRoll";
import BlogPaginationPosts from "../components/BlogPaginationPosts";
import LayoutBlog from "../components/LayoutBlog";
import nextIco from "../img/nextIco.svg";
import prevIco from "../img/prevIco.svg";

// A sweet helper function to create pagination object
const createPaginationObjects = (length, page, increment = 2) =>
  Array.from({ length }, (_, i) => ({
    link: `/category/${i + increment}/`,
    index: i + increment,
    current: page === i + increment,
  }));


const CatPage = ({data, pageContext }) => {
  const refSlug = typeof window !== 'undefined' && window.location.href.split("/category/")[1];
  const {
    page,
    prev,
    next,
    pages,
    slug,
  } = pageContext;

  console.log(pageContext, "Cat", pages, "pages", page, "page", prev, "prev", next, "next", slug)

  //const prevLink = prev.includes("page/1") ? prev.replace("page/1", "") : prev;
  // Create the navigation link
  let navItems = [
    {
      link: `/category/${slug}`,
      index: 1,
      current: page === 1,
    },
  ];
  if (pages <= 5) {
    navItems = [
      ...navItems,
      ...Array.from({ length: pages - 1 }, (_, i) => ({
        link: `/category/${slug}/page/${i + 2}/`,
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
          link: `/category/${slug}/page/${pages}/`,
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
          link: `/category/${slug}/page/${pages}/`,
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
        <NavRoll active={slug[0]} />
      </section>
      <section className="section index Posts">
        <div className="container">
          <div className="content">
            <BlogPaginationPosts pageContext={ pageContext } />
          </div>
          <nav className="pagination">
            {prev && (
              <Link to={prev} className="pagination-previous">
                <img src={prevIco}/>
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
            {next && (
              <Link to={next} className="pagination-next">
                <img src={nextIco}/>
              </Link>
            )}
          </nav>
        </div>
      </section>
    </LayoutBlog>
  )
};
export default CatPage
