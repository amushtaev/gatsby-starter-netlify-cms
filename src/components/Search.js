import React, { Component } from 'react'
import search from '../img/search.svg'
import PropTypes from 'prop-types'

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: props.value,
    }
  }

  handleChange(e) {
    this.props.onSearch(e.target.value)
  }

  render() {
    return (
      <li className="searchItem">
        <input
          type="text"
          value={this.state.searchQuery}
          onChange={(e) => {
            this.handleChange(e)
          }}
          className="searchInput"
          placeholder="Search"
        />
        <img className="search" src={search} alt="Search" />
      </li>
    )
  }
}

Search.propTypes = {
  value: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};
