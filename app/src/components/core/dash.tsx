import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AppBar from "./appBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import NavDrawer from "./navDrawer";
import Copyright from "./copyright";
import AppRoutes from "./routes";

interface Props {
  history: any;
}

const Dash: React.FunctionComponent<Props> = ({ history }): JSX.Element => {
  const [drawerOpen, setDrawerOpen] = React.useState(true);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <NavDrawer history={history} open={drawerOpen} setOpen={setDrawerOpen} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          padding: 2,
        }}>
        <Toolbar />
        <AppRoutes></AppRoutes>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}></Grid>
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </Box>
    </Box>
  );
};

export default Dash;
