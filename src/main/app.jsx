import React from "react";
import { HashRouter } from "react-router";

import Header from "../common/template/header";
import Sidebar from "../common/template/sideBar";
import Footer from "../common/template/footer";
import Messages from "../common/msg/messages";

import Routes from "./routes";

export default (props) => (
  <HashRouter>
    <div className="wrapper">
      <Header />
      <Sidebar />
      <Routes />
      <Footer />
      <Messages />
    </div>
  </HashRouter>
);
