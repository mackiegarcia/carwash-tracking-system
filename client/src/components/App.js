import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './header/Header';
import Vehicles from './vehicles/Vehicles';
import Jobs from './jobs/Jobs';
import Accounts from './accounts/Accounts';

class App extends Component {
  render(){
    return (
      <div className="container cts-main">
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={Jobs} />
            <Route path='/vehicles' component={Vehicles} />
            <Route path='/accounts' component={Accounts} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;