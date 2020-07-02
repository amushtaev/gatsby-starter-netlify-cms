import React from 'react'
import PropTypes from 'prop-types'
import {graphql, Link, StaticQuery} from 'gatsby'

class NavRoll extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div className="subNav">
        <ul>
          {data.allMarkdownRemark.group.map((cat) => (
            <li key={cat.fieldValue}>
              <Link className="navbar-item" to="category/">{cat.fieldValue}</Link>
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
