import React, { Component } from 'react';
import './viewJob.css';

class ViewJob extends Component {
  render() {
    return (
      <div className="cts-view-job modal fade" id="viewJobModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Job[]</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label for="sel1">Plate No.:</label>
                <select className="form-control" id="sel1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
              <label for="sel1">Services.:</label>
              <br />
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input type="checkbox" className="form-check-input" value="" />Option 1
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewJob;