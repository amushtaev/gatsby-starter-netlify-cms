import React from 'react'
import PropTypes, {node} from 'prop-types'
import {graphql, Link, StaticQuery} from 'gatsby'
import Search from './search/Search'

class NavRoll extends React.Component {
  render() {
    const { data, active } = this.props;

    return (
      <div className="subNav">
        <ul className="section-sub-nav">
          <li className="sub-nav">
            <Link
              className={`navbar_item ${!active ? "color--yellow" : ""}`}
              to="/blog">
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
                    to={`/category/${slug.fieldValue}`}
                    pathname={slug.fieldValue}
                    propsslug={slug.fieldValue}
                  >
                      {cat.fieldValue}
                  </Link > : null
              )}
            </li>
          ))}
          {/*<Search onSearch={this.props.onSearch} value={this.props.defaultSearch} />*/}
        </ul>
      </div>
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

export default ({active, defaultSearchValue, onSearch}) => (
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
    render={(data) => <NavRoll data={data} active={active} defaultSearch={defaultSearchValue} onSearch={(value) => onSearch(value)} />}
  />
)
