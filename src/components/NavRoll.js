import React from 'react'
import PropTypes, {node} from 'prop-types'
import {graphql, Link, StaticQuery} from 'gatsby'
import Search from './Search'

class NavRoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      change: this.props.change
    }
  }

  setChange (string) {
    this.setState({searchQuery: string});
  }

  render() {
    const { data, active, change, stringFun } = this.props;

    return (
      <div className="subNav">
        <ul className="section-sub-nav">
          <li className="sub-nav">
            <Link
              className={`navbar-item ${!active ? "color--yellow" : "white"}`}
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
                    className={`navbar-item ${active === slug.fieldValue ? "color--yellow" : "white"}`}
                    to={`/category/${slug.fieldValue}`}
                    pathname={slug.fieldValue}
                    propsslug={slug.fieldValue}
                  >
                      {cat.fieldValue}
                  </Link > : null
              )}
            </li>
          ))}
          <Search setChange={(string) => this.setChange(string)} stringFun={stringFun}/>
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
};

export default ({active, string}) => (
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
    render={(data) => <NavRoll data={data} active={active} stringFun={string} />}
  />
)
