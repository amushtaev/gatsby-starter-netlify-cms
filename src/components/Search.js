import React, { Component } from 'react'
import { Index } from 'elasticlunr'
import { Link } from 'gatsby'
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
        <img
          src={search}
          alt="Search"
        />
      </li>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
      Index.load(this.props.searchIndex);

  search = evt => {
    const query = evt.target.value;
    this.index = this.getOrCreateIndex();
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, {})
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}
