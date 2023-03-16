import React from "react";
import { Routes, Route } from "react-router";
import { AppRoute } from "../../models/enums/appRoute";
import loadable from "@loadable/component";

// Load bundles asynchronously so that the initial render happens faster
const Individual = loadable(() => import("../pages/individual/individualPage"));
const Conditions = loadable(() => import("../pages/conditions/conditions"));
const Medication = loadable(() => import("../pages/medications/medications"));
const Providers = loadable(() => import("../pages/providers/providers"));

class AppRoutes extends React.Component {
  render() {
    return (
      <Routes>
        <Route path={AppRoute.Individual} element={<Individual />}></Route>
        <Route path={AppRoute.Conditions} element={<Conditions />}></Route>
        <Route path={AppRoute.Medication} element={<Medication />}></Route>
        <Route path={AppRoute.Providers} element={<Providers />}></Route>
      </Routes>
    );
  }
}

export default AppRoutes;
