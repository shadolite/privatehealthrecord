import React, { FunctionComponent } from "react";
import { HistoryRouter } from "redux-first-history/rr6";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import AppRoutes from "./components/routes";
import Dashboard from "./components/dash";
import theme from "../styles/theme";
// import { CacheProvider } from "@emotion/react";
// import createCache from "@emotion/cache";
// const nonce = require("../../../create-nonce")();

// const cache = createCache({
//   key: "phr",
//   nonce: window.nonce,
//   prepend: true,
// });

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
