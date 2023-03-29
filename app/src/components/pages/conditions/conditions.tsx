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
  saveCondition,
} from "../../../store/reducers/conditionsSlice";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import Item from "../../shared/item";
import { IconButton, TextField, Tooltip, Typography } from "@mui/material";
import AddConditionDialog from "./addCondition";

const Conditions: React.FunctionComponent = (): JSX.Element => {
  const loading = useAppSelector((state) => state.conditions.isLoading);
  const existingConditions = useAppSelector(getConditions);
  const dispatch = useAppDispatch();

  const nameColumn = "name";
  const descriptionColumn = "description";
  const notesColumn = "notes";
  const updatedRowIds = new Array<number>();
  const [conditions, setConditions] = React.useState(new Array<ICondition>());
  const [hasUpdatedRows, setHasUpdatedRows] = React.useState(false);
  const [rowKey, setRowKey] = React.useState(-1);
  const [columnIndex, setColumnIndex] = React.useState(-1);

  const handleTextFieldChange = (
    index: number,
    name: "name" | "description" | "notes",
    value: string
  ) => {
    conditions[index][name] = value;
    let id = Number(conditions[index].id);
    if (!updatedRowIds.find((i) => i == id)) updatedRowIds.push(id);
    setHasUpdatedRows(true);
  };
  const handleExit = () => {
    setRowKey(-1);
    setColumnIndex(-1);
  };
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === "Tab") {
      handleExit();
    }
  };
  const handleSaveChanges = () => {
    throw new Error("Not implemented");
  };

  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [hasAddedRows, setHasAddedRows] = React.useState(false);
  const conditionTitle = "Condition";
  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  React.useEffect(() => {
    dispatch(loadConditions);
  }, []);

  React.useEffect(() => {
    if (hasAddedRows) {
      dispatch(loadConditions);
      setHasAddedRows(false);
    }
  }, [hasAddedRows]);

  React.useEffect(() => {
    if (!loading) setConditions(existingConditions);
  }, [loading]);

  return (
    <Item>
      <AddConditionDialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        setHasChanged={setHasAddedRows}
      />
      <Toolbar>
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div">
          Conditions
        </Typography>
        <Tooltip title={`Add ${conditionTitle}`}>
          <IconButton onClick={handleClickOpen}>
            <AddBoxIcon />
          </IconButton>
        </Tooltip>
        {hasUpdatedRows && (
          <Tooltip title={`Save`}>
            <IconButton onClick={handleSaveChanges}>Save Changes</IconButton>
          </Tooltip>
        )}
      </Toolbar>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {conditions.map((row: ICondition, index: number) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell
                  component="th"
                  scope="row"
                  onDoubleClick={() => {
                    setRowKey(Number(row.id));
                    setColumnIndex(0);
                  }}>
                  {rowKey === row.id && columnIndex === 0 ? (
                    <TextField
                      placeholder={row.name}
                      defaultValue={conditions[index][nameColumn]}
                      onChange={(event) =>
                        handleTextFieldChange(
                          index,
                          nameColumn,
                          event.target.value
                        )
                      }
                      onBlur={handleExit}
                      onKeyUp={handleKeyUp}
                    />
                  ) : (
                    row.name
                  )}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  onDoubleClick={() => {
                    setRowKey(index);
                    setColumnIndex(1);
                  }}>
                  {rowKey === index && columnIndex === 1 ? (
                    <TextField
                      placeholder={row.description}
                      defaultValue={
                        conditions[index][descriptionColumn]
                          ? conditions[index][descriptionColumn]
                          : ""
                      }
                      onChange={(event) =>
                        handleTextFieldChange(
                          index,
                          descriptionColumn,
                          event.target.value
                        )
                      }
                      onBlur={handleExit}
                      onKeyUp={handleKeyUp}
                    />
                  ) : (
                    row.description
                  )}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  onDoubleClick={() => {
                    setRowKey(index);
                    setColumnIndex(2);
                  }}>
                  {rowKey === index && columnIndex === 2 ? (
                    <TextField
                      placeholder={row.notes}
                      defaultValue={
                        conditions[index][notesColumn]
                          ? conditions[index][notesColumn]
                          : ""
                      }
                      onChange={(event) =>
                        handleTextFieldChange(
                          index,
                          notesColumn,
                          event.target.value
                        )
                      }
                      onBlur={handleExit}
                      onKeyUp={handleKeyUp}
                    />
                  ) : (
                    row.notes
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Item>
  );
};

export default Conditions;
