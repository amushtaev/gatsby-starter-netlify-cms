import React from 'react'
import {Link} from 'gatsby'
import {
  browseTemplates,
} from '../components/industries/textContent';

const NavIndusties = () => {
  const refSlug = typeof window !== 'undefined' && window.location.href.split("#")[1];

  return (
    <>
      <ul className="templates-categories-menu">
        <li className="nav-item--title">
          <Link
            className="link-menu"
            data-link="all"
            to='/industries'
          >
            BROWSE TEMPLATES
          </Link>
        </li>
        {browseTemplates.map((tag, index) => (
          <li className="sub-nav-left" key={tag.name}>
            <Link
              key={tag.link}
              className={`navbar_item ${refSlug === tag.link ? "color--yellow" : ""}`}
              to={`#${tag.link}`}
              pathname={tag.link}
              propsslug={tag.link}
            >
              {tag.name}
            </Link >
          </li>
        ))}
      </ul>
    </>
  )
};

export default NavIndusties
