import * as React from "react";
import { Box, Typography } from "@mui/material";

const IndividualConditions: React.FunctionComponent = (): JSX.Element => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
      }}
      noValidate
      autoComplete="off">
      <Typography
        component="h2"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}>
        Conditions/Medications
      </Typography>
    </Box>
  );
};

export default IndividualConditions;
