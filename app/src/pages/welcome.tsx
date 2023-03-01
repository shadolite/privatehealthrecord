import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const WelcomePage: React.FunctionComponent = (): JSX.Element => {
  return (
    <React.Fragment>
      <Box sx={{ width: "100%" }}>
        <Typography
          component="h1"
          variant="h1"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}>
          WELCOME
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default WelcomePage;
