import React, { Component } from 'react';
import './listVehicles.css';

class ListVehicles extends Component {
  render() {
    return (
      <div className="cts-list-vehicles">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Plate Number</th>
              <th scope="col">Car Model</th>
              <th scope="col">Start</th>
              <th scope="col">End</th>
              <th scope="col">Time In Dock</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">TEST-PLATE</th>
              <td>TEST TIME</td>
              <td>TEST TIME</td>
              <td>TEST TIME</td>
              <td>TEST TIME</td>
            </tr>
          </tbody>
        </table>
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default ListVehicles;