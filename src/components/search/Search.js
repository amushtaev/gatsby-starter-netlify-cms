import React, { Component } from 'react'
import search from "../../img/search.svg";
import PropTypes from "prop-types";
import {isMobile} from "react-device-detect";
import useWindowSize from "../Getscreen";

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: props.value,
    }
    this.windowSize = {
      width: props.value,
    }
  }

  handleChange (e) {
    this.props.onSearch(e.target.value)
  }

  render() {
    return (
      <div className="searchItem">
        <input
          type="text"
          value={ this.state.searchQuery}
          onChange={(e) => {this.handleChange(e)}}
          className="searchInput"
          placeholder={`${!isMobile ? "Search" : ""}`}
        />
        <img className="search"
          src={search}
          alt="Search"
        />
      </div>
    )
  }
}

Search.propTypes = {
  value: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};
