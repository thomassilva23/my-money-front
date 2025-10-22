import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import AuthOrApp from "./authOrApp";
import Dashboard from "./components/dashboard";
import BillingCycle from "./components/billingCycle";

export default (props) => (
  <div className="content-wrapper">
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/billingCycles" component={BillingCycle} />
      <Redirect from="*" to="/" />
    </Switch>
  </div>
);
