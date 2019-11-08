import React, { Component } from 'react';
import AddAccount from './addAccount/AddAccount';
import SearchAccount from './searchAccount/SearchAccount';
import ListAccounts from './listAccounts/ListAccounts';
import ViewAccount from './viewAccount/ViewAccount';
import './accounts.css';

class Accounts extends Component {
  render() {
    return (
      <div className="cts-accounts container">
        <div className="btn-toolbar justify-content-between" role="toolbar">
          <AddAccount />
          <div className="input-group">
            <SearchAccount />
          </div>
        </div>
        <ListAccounts />
        <ViewAccount />
      </div>
    );
  }
}

export default Accounts;