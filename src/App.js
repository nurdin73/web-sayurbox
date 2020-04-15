import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return(
      <Router>
          <Switch>
            <Route path="/administrator">
              Administrator
            </Route>
            <Route path="/dashboard">
              Dashboard
            </Route>
            <Route path="/profile">
              My Profile
            </Route>
            <Route path="/users">
              Member
            </Route>
            <Route path="/transaction">
              Transaction
            </Route>
            <Route path="/report">
              Report
            </Route>
            <Route path="/product">
              Product
            </Route>
            <Route path="/discount">
              Discount
            </Route>
            <Route path="/archive">
              Archive
            </Route>
            <Route path="/">
              Home
            </Route>
          </Switch>
      </Router>
    )
  }
}
