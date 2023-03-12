import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { FunctionComponent } from "react";
import { HistoryRouter } from "redux-first-history/rr6";
import theme from "./styles/theme";
import Dashboard from "./core/dash";

interface Props {
  history: any;
}

const App: FunctionComponent<Props> = ({ history }): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <HistoryRouter history={history}>
        <CssBaseline />
        <Dashboard history={history}></Dashboard>
      </HistoryRouter>
    </ThemeProvider>
  );
};

export default App;
