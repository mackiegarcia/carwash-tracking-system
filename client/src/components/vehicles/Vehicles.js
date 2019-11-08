import React, { Component } from 'react';
import AddVehicle from './addVehicle/AddVehicle';
import SearchVehicle from './searchVehicle/SearchVehicle';
import ListVehicles from './listVehicles/ListVehicles';
import ViewVehicle from './viewVehicle/ViewVehicle';
import './vehicles.css';

class Vehicles extends Component {
  render() {
    return (
      <div className="cts-jobs container">
        <div className="btn-toolbar justify-content-between" role="toolbar">
          <AddVehicle />
          <div className="input-group">
            <SearchVehicle />
          </div>
        </div>
        <ListVehicles />
        <ViewVehicle />
      </div>
    );
  }
}

export default Vehicles;