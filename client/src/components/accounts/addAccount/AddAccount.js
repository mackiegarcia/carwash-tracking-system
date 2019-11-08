import React, { Component } from 'react';
import './addAccount.css';

class AddAccount extends Component {
  render() {
    return (
      <div className="cts-add-account btn-group" role="group" aria-label="First group">
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#viewAccountModal">
          Add User
        </button>
      </div>
    );
  }
}

export default AddAccount;