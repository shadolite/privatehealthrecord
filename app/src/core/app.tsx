import React, { FunctionComponent } from "react";
import { HistoryRouter } from "redux-first-history/rr6";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./components/dash";
import theme from "../styles/theme";

interface Props {
  store: any;
  history: any;
}

const App: FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { store, history } = props;
  return (
    // <CacheProvider value={cache}>
    <React.Fragment>
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Dashboard history={history}></Dashboard>
          </ThemeProvider>
        </HistoryRouter>
      </Provider>
    </React.Fragment>
    // </CacheProvider>
  );
};

export default App;
