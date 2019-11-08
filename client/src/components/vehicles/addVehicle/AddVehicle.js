import React, { Component } from 'react';
import './addVehicle.css';

class AddVehicle extends Component {
  render() {
    return (
      <div className="cts-add-vehicle btn-group" role="group" aria-label="First group">
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#viewVehicleModal">
          Add Vehicle
        </button>
      </div>
    );
  }
}

export default AddVehicle;