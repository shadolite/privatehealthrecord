import React from "react";
import { Routes, Route } from "react-router";
import { ROUTE } from "./../constants/routes";
import loadable from "@loadable/component";

// Load bundles asynchronously so that the initial render happens faster
const Dashboard = loadable(() =>
  import(/* webpackChunkName: "AboutChunk" */ "../pages/dashboard/dashboard")
);

class AppRoutes extends React.Component {
  render() {    
    return (
      <Routes>
        <Route path={ROUTE.DASH} element={<Dashboard />}></Route>
      </Routes>
    );
  }
}

export default AppRoutes;
