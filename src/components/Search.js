import React, { Component } from 'react'
import search from "../img/search.svg";

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    console.log(this.state.results, "this.state.results", this.state.query)
    return (
      <li className="searshItem">
        <input type="text" value={this.state.query} onChange={this.search} className="searshInput" placeholder="Search" />
        <img className="searsh"
          src={search}
          alt="Search"
        />
      </li>
    )
  }
}
