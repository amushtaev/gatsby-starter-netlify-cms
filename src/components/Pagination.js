import React from 'react'
import { Link } from 'gatsby'
import prevIco from "../img/prevIco.svg";
import nextIco from "../img/nextIco.svg";

// A sweet helper function to create pagination object
const createPaginationObjects = (link, length, page, increment = 2) =>
  Array.from({ length }, (_, i) => ({
    link: `${link}${i + increment}/`,
    index: i + increment,
    current: page === i + increment,
  }));

const Pagination = ({pageContext, link}) =>{
  const {
    page,
    prev,
    next,
    pages,
  } = pageContext;

  // Create the navigation link
  let navItems = [
    {
      link: link,
      index: 1,
      current: page === 1,
    },
  ];
  if (pages <= 5) {
    navItems = [
      ...navItems,
      ...Array.from({ length: pages - 1 }, (_, i) => ({
        link: `${link}${i + 2}/`,
        index: i + 2,
        current: page === i + 2,
      })),
    ];
  } else {
    // We have a situation where we have to show the first
    // item, three items around the current one
    // and also the last item
    if (page <= 3) {
      // If the current one is closer to the start
      navItems = [
        ...navItems,
        ...createPaginationObjects(link,3, page),
        {
          separator: true,
          index: 'starter-separator',
        },
        {
          link: `${link}${pages}/`,
          index: pages,
          current: false,
        },
      ];
      console.log('page <= 3', navItems, link)
    } else if (page > pages - 3) {
      // If the current one is closer to the last one
      navItems = [
        ...navItems,
        {
          separator: true,
          index: 'finisher-separator',
        },
        ...createPaginationObjects(link,4, page, pages - 3),
      ];
    } else {
      navItems = [
        ...navItems,
        {
          separator: true,
          index: 'starter-separator',
        },
        ...createPaginationObjects(link,3, page, page - 1),
        {
          separator: true,
          index: 'finisher-separator',
        },
        {
          link: `${link}${pages}/`,
          index: pages,
          current: false,
        },
      ];
    }
  }

  return (
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
  )
};

export default Pagination;
