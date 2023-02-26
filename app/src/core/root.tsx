import React, { FunctionComponent } from "react";
import { HistoryRouter } from "redux-first-history/rr6";
import { Provider } from "react-redux";
import AppRoutes from "./routes";
import CssBaseline from '@mui/material/CssBaseline';
import Nav from "./nav";
import "./root.css";
import { ThunkAction, AnyAction } from "@reduxjs/toolkit";

interface Props {
  store: any,
  history: any
};

const Root: FunctionComponent<Props> = (props: Props): JSX.Element => {

  const { store, history } = props;
  return (
    <React.Fragment>
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CssBaseline />
          <Nav history={history}></Nav>
          <AppRoutes></AppRoutes>
        </HistoryRouter>
      </Provider>
    </React.Fragment>
  );
};

export default Root;
