import React from 'react'
import PropTypes, {node} from 'prop-types'
import {graphql, Link, StaticQuery} from 'gatsby'

class NavRoll extends React.Component {

  render() {
    const { data, active } = this.props;
    //TODO
    console.log('data', data);
    console.log(active, "active")

    return (
      <div className="subNav">
        <ul className="section-sub-nav">
          <li className="sub-nav">
            <a className={`navbar-item ${!active ? "color--yellow" : "white"}`} href="/blog">See all</a>
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

export default ({active}) => (
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
    render={(data) => <NavRoll data={data} active={active} />}
  />
)
