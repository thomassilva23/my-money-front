import React from "react";
import { Router, Route, Redirect, hashHistory } from "react-router";

import Dashboard from "./components/dashboard";
import BillingCycle from "./components/billingCycle";

export default (props) => (
  <Router history={hashHistory}>
    <Route path="/" component={Dashboard}></Route>
    <Route path="/billingCycles" component={BillingCycle}></Route>
    <Redirect from="*" to="/"></Redirect>
  </Router>
);
