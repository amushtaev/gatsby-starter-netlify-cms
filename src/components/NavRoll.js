import React from 'react'
import PropTypes from 'prop-types'
import {graphql, Link, StaticQuery} from 'gatsby'

class NavRoll extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div className="subNav">
        <ul className="section-sub-nav">
          <li className="sub-nav">
            <a className="navbar-item color--yellow" href="/blog">See all</a>
          </li>
          {data.allMarkdownRemark.group.map((cat) => (
            <li className="sub-nav" key={cat.fieldValue}>
              <Link className="navbar-item white" to="category/">{cat.fieldValue}</Link>
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
}

export default () => (
  <StaticQuery
    query={graphql`
      query NavCatLink {
        allMarkdownRemark {
          group(field: frontmatter___categories) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={(data) => <NavRoll data={data} />}
  />
)
