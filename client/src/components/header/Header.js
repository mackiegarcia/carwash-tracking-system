import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
  render(){
    return (      
      <div className="cts-header jumbotron">
        <h1 className="cts-header__title">Carwash Tracking System</h1>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <Link to={'/'} className="nav-link">Jobs</Link>
          </li>
          <li className="nav-item">
            <Link to={'/vehicles'} className="nav-link">Vehicles</Link>
          </li>
          <li className="nav-item">
            <Link to={'/accounts'} className="nav-link">Accounts</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;