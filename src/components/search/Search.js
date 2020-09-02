import React, { Component } from 'react'
import search from "../../img/search.svg";
import PropTypes from "prop-types";
import {isMobile} from "react-device-detect";

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: props.value,
      activeInput: '',
    };
  }

  handleChange (e) {
    this.props.onSearch(e.target.value)
  }

  MouseEnter () {
    this.setState({
      activeInput: 'activeInput'
    })
  }
  MouseLeave () {
    this.setState({
      activeInput: ''
    })
  }
  render() {
    const { isShowSearch } = this.props;
    return (
      <>
      {isShowSearch ?
        <div className="searchItem"
             onMouseEnter={
               () => {
                 this.MouseEnter()
               }
             }
             onMouseLeave={
               () => {
                 this.MouseLeave()
               }
             }
        >
          <input
            type="text"
            value={ this.state.searchQuery }
            onChange={(e) => {this.handleChange(e)}}
            className={`searchInput ${this.state.activeInput}`}
            placeholder={`${!isMobile ? "Search" : ""}`}
          />
          <img className="search"
            src={search}
            alt="Search"
          />
        </div> : ''
      }
      </>
    )
  }
}

Search.propTypes = {
  value: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};
