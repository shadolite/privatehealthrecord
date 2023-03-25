import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { ICondition } from "../../../models/ICondition";
import {
  loadConditions,
  getConditions,
} from "../../../store/reducers/conditionsSlice";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import Item from "../../shared/item";
import { IconButton, Tooltip } from "@mui/material";
import AddConditionDialog from "./addCondition";

const Conditions: React.FunctionComponent = (): JSX.Element => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [hasChanged, setHasChanged] = React.useState(false);
  const conditionTitle = "Condition";
  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const loading = useAppSelector((state) => state.conditions.isLoading);
  const conditions = useAppSelector(getConditions);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(loadConditions);
  }, []);

  React.useEffect(() => {
    if (hasChanged) {
      dispatch(loadConditions);
      setHasChanged(false);
    }
  }, [hasChanged]);

  return (
    <Item>
      <AddConditionDialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        setHasChanged={setHasChanged}
      />
      <Toolbar>
        <Tooltip title={`Add ${conditionTitle}`}>
          <IconButton onClick={handleClickOpen}>
            <AddBoxIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Condition</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {conditions.map((row: ICondition) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Item>
  );
};

export default Conditions;
