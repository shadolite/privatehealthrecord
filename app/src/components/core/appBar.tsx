import * as React from "react";
import { IconButton, Toolbar, Typography, styled } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth: number = 240;
interface AppBarProps extends MuiAppBarProps {
  drawerOpen?: boolean;
}
interface Props {
  drawerOpen: boolean;
  setDrawerOpen: any;
}

const Bar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "drawerOpen",
})<AppBarProps>(({ theme, drawerOpen }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(drawerOpen && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AppBar: React.FunctionComponent<Props> = ({
  drawerOpen,
  setDrawerOpen,
}): JSX.Element => {
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Bar position="absolute" drawerOpen={drawerOpen}>
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: "36px",
            ...(drawerOpen && { display: "none" }),
          }}>
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}>
          Private Health Record
        </Typography>
      </Toolbar>
    </Bar>
  );
};

export default AppBar;
