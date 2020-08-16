import React, {useState} from 'react'
import {Link} from 'gatsby'
import {
  browseTemplates,
} from '../components/industries/textContent';
import {
  TriangleDownIcon,
  TriangleUpIcon,
} from '../img/icons'


const NavIndusties = () => {
  const refSlug = typeof window !== 'undefined' && window.location.href.split("#")[1];
  const [activeClass, setActiveClass] = useState('');
  const [activeState, setActiveState] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const toggleHamburger = () => {
    !activeState ? setActiveClass('is-active') : setActiveClass('');
    !activeState ? setIsShow(true) : setIsShow(false);
    !activeState ? setActiveState(true) : setActiveState(false)
  };

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      {/* Hamburger menu */}
      <div
        className={`navbar-burger navbar-burger--indusrties burger ${activeClass}`}
        data-target="navIndusries"
        onClick={() => toggleHamburger()}
      >
        <ul className="templates-categories-menu" >
          <li className="nav-item--title-mobile">
            BROWSE TEMPLATES
          </li>
          {browseTemplates.map((tag, index) => (
            <li className="nav--text" key={`tag.link:${index}`}>
              <p
                key={`tag.link:${tag.name}`}
                className={`nav--text-mobile ${refSlug === tag.link ? "color--yellow active-nav--text" : ""}`}
              >
                {tag.name}
              </p >
            </li>
          ))}
        </ul>
        <div className='icon-triangl'>
          {isShow ? (
            <TriangleUpIcon
              fill={'#fff'}
              height={12}
              width={12}
              fillOpacity={isShow ? '1' : '0.6'}
            />
          ) : (
            <TriangleDownIcon
              fill='#fff'
              height={12}
              width={12}
              fillOpacity={isShow ? '1' : '0.6'}
            />
          )}
        </div>
      </div>
      <div
        id="navIndusries"
        className={`navbar-menu ${activeClass}`}
      >
        <ul className="templates-categories-menu" >
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
      </div>
    </nav>
  )
};

export default NavIndusties
