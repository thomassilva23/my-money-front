import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";

export default (props) => (
  <div className="content-wrapper">
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/billingCycles" element={<BillingCycle />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </div>
);
