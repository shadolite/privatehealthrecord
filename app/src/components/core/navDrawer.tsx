import * as React from "react";
import { AppRoute } from "../../models/enums/appRoute";
import { useNavigate } from "react-router-dom";
import MuiDrawer from "@mui/material/Drawer";
import {
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  styled,
  Toolbar,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MedicationIcon from "@mui/icons-material/Medication";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const drawerWidth: number = 240;
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

interface Props {
  history: any;
}

const NavDrawer: React.FunctionComponent<Props> = (
  props: Props
): JSX.Element => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className="navbar-start">
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          <ListItemButton onClick={() => navigate(AppRoute.Individual)}>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Individual" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate(AppRoute.Conditions)}>
            <ListItemIcon>
              <MonitorHeartIcon />
            </ListItemIcon>
            <ListItemText primary="Conditions" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate(AppRoute.Medication)}>
            <ListItemIcon>
              <MedicationIcon />
            </ListItemIcon>
            <ListItemText primary="Medication" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate(AppRoute.Providers)}>
            <ListItemIcon>
              <LocalHospitalIcon />
            </ListItemIcon>
            <ListItemText primary="Providers" />
          </ListItemButton>
          <Divider sx={{ my: 1 }} />
          <ListSubheader component="div" inset>
            Settings
          </ListSubheader>
          <ListItemButton>
            <ListItemIcon>
              <ManageAccountsIcon />
            </ListItemIcon>
            <ListItemText primary="Display" />
          </ListItemButton>
        </List>
      </Drawer>
    </div>
  );
};

export default NavDrawer;
