import { createTheme } from "@mui/material/styles";

// Create a Material-UI theme instance
// https://mui.com/customization/theming/
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#2C2E3B",
    },
  },
  typography: {
    fontWeightMedium: 600,
    fontSize: 17,
    h1: {
      fontSize: "2.2rem",
      fontWeight: 400,
      color: "#9EEAF9",
    },
    body1: {
      color: "#9EEAF9",
    },
  },
});

export default theme;
