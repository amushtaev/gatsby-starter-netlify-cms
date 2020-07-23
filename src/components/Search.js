import React, {Component, useEffect} from 'react'
import search from "../img/search.svg";

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    }
  }

  handleChange (e) {
    this.setState({searchQuery: e.target.value});
    this.props.setChange(e.target.value)
    this.setState({stringFun: e.target.value})
    this.props.stringFun(e.target.value)
  }

  render() {
    const { stringFun } = this.props;

    return (
      <li className="searshItem">
        <input
          type="text"
           value={ this.state.searchQuery}
           onChange={(e) => {this.handleChange(e)}}
           className="searshInput" placeholder="Search"
        />
        <img className="searsh"
          src={search}
          alt="Search"
        />
      </li>
    )
  }
}
