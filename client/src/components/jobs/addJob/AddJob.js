import React, { Component } from 'react';
import './addJob.css';

class AddJob extends Component {
  render() {
    return (
      <div className="cts-add-job btn-group" role="group" aria-label="First group">
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#viewJobModal">
          Add Job
        </button>
      </div>
    );
  }
}

export default AddJob;