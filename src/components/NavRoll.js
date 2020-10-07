import React from 'react'
import PropTypes from 'prop-types'
import {graphql, Link, StaticQuery} from 'gatsby'
import Search from './search/Search'
import {TriangleDownIcon, TriangleUpIcon} from "../img/icons";

class NavRoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  };

  render() {
    const { data, active, isShowSearch } = this.props;
    const refSlug = typeof window !== 'undefined' && window.location.href.indexOf('/page/') === -1;

    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container header nav">
          <div className="navbar-brand mobile">
            {/* Hamburger menu */}
            <div
              className={`navbar-burger-text burger ${this.state.navBarActiveClass}`}
              data-target="navBlog"
              onClick={() => this.toggleHamburger()}
            >
              <div className={`navbar-burger is-close ${this.state.navBarActiveClass}`} style={{position: 'absolute', right: '0'}}>
                <span />
                <span />
                <span />
              </div>
              <li className={`sub-nav--text ${!this.state.active ? "active-nav--text" : ""}`}
              >
                <p
                  className={`navbar_item--text posts ${!active ? "color--yellow" : ""}`}
                >
                  All Posts
                </p>
              </li>
              {data.allMarkdownRemark.catNames.map((cat, index) => (
                <li className={`sub-nav--text ${!active ? "" : "active-nav--text"}`} key={`cat.link:${index}`}>
                  {data.allMarkdownRemark.catValues.map((slug, slugindex) =>
                    index === slugindex ?
                      <p
                        key={`cat.link:${slug}`}
                        className={`navbar_item--text posts ${active === slug.fieldValue ? "color--yellow" : ""}`}
                      >
                        {cat.fieldValue}
                      </p > : null
                  )}
                </li>
              ))}
              <div className='icon-triangl blog'>
                {this.state.active ? (
                  <TriangleUpIcon
                    fill={'#FED300'}
                    height={12}
                    width={12}
                    fillOpacity={'1'}
                  />
                ) : (
                  <TriangleDownIcon
                    fill='#FED300'
                    height={12}
                    width={12}
                    fillOpacity={'1'}
                  />
                )}
              </div>
            </div>
          </div>
          <div
            id="navBlog"
            className={`navbar-menu subNav ${this.state.navBarActiveClass}`}
          >
            <ul className="section-sub-nav blog">
              <li className="nav-item--title mobile">
                <a>Blog categories</a>
              </li>
              <li className="sub-nav">
                <Link
                  className={`navbar_item ${!active ? "color--yellow" : ""}`}
                  to="/blog/">
                  See all
                </Link>
              </li>
              {data.allMarkdownRemark.catNames.map((cat, index) => (
                <li className="sub-nav" key={cat.fieldValue}>
                  {data.allMarkdownRemark.catValues.map((slug, slugindex) =>
                    index === slugindex ?
                      <Link
                        key={slug}
                        className={`navbar_item ${active === slug.fieldValue ? "color--yellow" : ""}`}
                        to={`/category/${slug.fieldValue}/`}
                        pathname={slug.fieldValue}
                        propsslug={slug.fieldValue}
                      >
                        {cat.fieldValue}
                      </Link > : null
                  )}
                </li>
              ))}
            </ul>
          </div>
          {refSlug ?
          <Search onSearch={this.props.onSearch} value={this.props.defaultSearch} isShowSearch={isShowSearch} />
          : ""}
        </div>
      </nav>
    )
  }
}

NavRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  defaultSearch: PropTypes.string,
  onSearch: PropTypes.func,
};

export default ({active, defaultSearchValue, onSearch, isShowSearch}) => (
  <StaticQuery
    query={graphql`
      query NavCatLink {
        allMarkdownRemark {
          catNames: group(field: frontmatter___categories) {
            fieldValue
            totalCount
            nodes {
              fields {
                slug
              }
            }
          }
          catValues: group(field: frontmatter___categories_slug) {
            fieldValue
            totalCount
            nodes {
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={(data) => <NavRoll
      data={data}
      active={active}
      defaultSearch={defaultSearchValue}
      onSearch={(value) => onSearch(value)}
      isShowSearch={isShowSearch}
    />}
  />
)
