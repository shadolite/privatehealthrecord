import React, { FunctionComponent } from "react";
import { HistoryRouter } from "redux-first-history/rr6";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import AppRoutes from "./components/routes";
import CssBaseline from "@mui/material/CssBaseline";
import Dashboard from "./components/dash";
import "./root.css";

interface Props {
  store: any;
  history: any;
}

const Root: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { store, history } = props;
  return (
    <React.Fragment>
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CssBaseline />
          <Dashboard history={history}></Dashboard>
          <AppRoutes></AppRoutes>
        </HistoryRouter>
      </Provider>
    </React.Fragment>
  );
};

export default Root;
