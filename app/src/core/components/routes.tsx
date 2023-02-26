import React from "react";
import { Routes, Route } from "react-router";
import { ROUTE } from "../../constants/routes";
import loadable from "@loadable/component";

// Load bundles asynchronously so that the initial render happens faster
const Welcome = loadable(() => import("../../pages/welcome"));

class AppRoutes extends React.Component {
  render() {
    return (
      <Routes>
        <Route path={ROUTE.DASH} element={<Welcome />}></Route>
      </Routes>
    );
  }
}

export default AppRoutes;
