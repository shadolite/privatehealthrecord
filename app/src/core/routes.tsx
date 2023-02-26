import React from "react";
import { Routes, Route } from "react-router";
import { ROUTE } from "./../constants/routes";
import loadable from "@loadable/component";

// Load bundles asynchronously so that the initial render happens faster
const Individual = loadable(() => import("../pages/individual/individualPage"));
const Conditions = loadable(() => import("../pages/conditions/conditions"));

class AppRoutes extends React.Component {
  render() {
    return (
      <Routes>
        <Route path={ROUTE.INDIVIDUAL} element={<Individual />}></Route>
        <Route path={ROUTE.CONDITIONS} element={<Conditions />}></Route>
      </Routes>
    );
  }
}

export default AppRoutes;
