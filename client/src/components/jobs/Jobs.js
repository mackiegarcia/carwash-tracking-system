import React, { Component } from 'react';
import AddJob from './addJob/AddJob';
import SearchJob from './searchJob/SearchJob';
import ListJobs from './listJobs/ListJobs';
import ViewJob from './viewJob/ViewJob';
import './jobs.css';

class Jobs extends Component {
  render() {
    return (
      <div className="cts-jobs container">
        <div className="btn-toolbar justify-content-between" role="toolbar">
          <AddJob />
          <div className="input-group">
            <SearchJob />
          </div>
        </div>
        <ListJobs />
        <ViewJob />
      </div>
    );
  }
}

export default Jobs;