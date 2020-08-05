import React from 'react'
import {Link} from 'gatsby'
import {
  browseTemplates,
} from '../components/industries/textContent';

const NavRight = () => {
  const { active } = '';

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
        {browseTemplates.map((cat, index) => (
          <li className="sub-nav-left" key={cat.name}>
            <Link
              key={cat.link}
              className={`navbar_item ${active === cat.link ? "color--yellow" : ""}`}
              to={`#${cat.link}`}
              pathname={cat.link}
              propsslug={cat.link}
            >
              {cat.name}
            </Link >
          </li>
        ))}
      </ul>
    </>
  )
};

export default NavRight
