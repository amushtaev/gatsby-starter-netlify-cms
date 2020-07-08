import React from 'react'
import PropTypes, {node} from 'prop-types'
import {graphql, Link, StaticQuery} from 'gatsby'

class NavRoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navClassActive: "",
    }
  }

  toggleActiveCategory = (slug) => {
    this.setState(
      {active: !this.state.active},
      () => {
        this.state.active ?
          this.setState(
            {navClassActive: "color--yellow"}
          ) :
          this.state(
            {navClassActive: ""}
          )
      }
    )
  };


  render() {
    const { data } = this.props;

    return (
      <div className="subNav">
        <ul className="section-sub-nav">
          <li className="sub-nav">
            <a className="navbar-item color--yellow" href="/blog">See all</a>
          </li>
          {data.allMarkdownRemark.catNames.map((cat, index) => (
            <li className="sub-nav" key={cat.fieldValue}>
              {data.allMarkdownRemark.catValues.map((slug, slugindex) =>
                index === slugindex ?
                  <Link
                    key={slug}
                    className="navbar-item white"
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

export default () => (
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
    render={(data) => <NavRoll data={data} />}
  />
)
