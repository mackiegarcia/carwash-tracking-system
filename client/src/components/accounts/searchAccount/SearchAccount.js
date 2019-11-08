import React, { Component } from 'react';
import './searchAccount.css';

class SearchAccount extends Component {
  render() {
    return (
      <form className="cts-search-account form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    );
  }
}

export default SearchAccount;