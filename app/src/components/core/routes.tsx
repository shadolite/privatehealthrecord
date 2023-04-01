import React from "react";
import { Routes, Route } from "react-router";
import { AppRoute } from "../../models/enums/appRoute";
import loadable from "@loadable/component";

// Load bundles asynchronously so that the initial render happens faster
const Individual = loadable(() => import("../pages/individual/individualPage"));
const Conditions = loadable(() => import("../pages/conditions/conditionsPage"));
const Medications = loadable(
  () => import("../pages/medication/medicationPage")
);
const Settings = loadable(() => import("../pages/settings/dataSettingsPage"));

class AppRoutes extends React.Component {
  render() {
    return (
      <Routes>
        <Route path={AppRoute.Individual} element={<Individual />}></Route>
        <Route path={AppRoute.Conditions} element={<Conditions />}></Route>
        <Route path={AppRoute.Medications} element={<Medications />}></Route>
        <Route path={AppRoute.DataSettings} element={<Settings />} />
      </Routes>
    );
  }
}

export default AppRoutes;
