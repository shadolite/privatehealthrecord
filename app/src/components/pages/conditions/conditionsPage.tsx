import * as React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { ICondition } from "../../../models/ICondition";
import {
  loadConditions,
  getConditions,
  saveCondition,
} from "../../../store/reducers/conditionsSlice";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import Item from "../../shared/item";
import * as StyledTable from "../../shared/styledTableComponents";
import {
  IconButton,
  TextField,
  Tooltip,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
} from "@mui/material";
import AddConditionDialog from "./addConditionDialog";

const ConditionsPage: React.FunctionComponent = (): JSX.Element => {
  const loading = useAppSelector((state) => state.conditions.isLoading);
  const conditions = useAppSelector(getConditions);
  const dispatch = useAppDispatch();

  const [hasChanges, setHasChanges] = React.useState(false);

  const [isEditing, setIsEditing] = React.useState(false);
  const [conditionName, setConditionName] = React.useState("");
  const [conditionDescrption, setConditionDescription] = React.useState("");
  const [conditionNotes, setConditionNotes] = React.useState("");
  const [rowKey, setRowKey] = React.useState(-1);
  const [columnKey, setColumnKey] = React.useState(-1);

  const handleDoubleClick = (autoFocusColumn: number, row: ICondition) => {
    setConditionName(row.name);
    setConditionDescription(row.description);
    setConditionNotes(row.notes);
    setIsEditing(true);
    setRowKey(row.id);
    setColumnKey(autoFocusColumn);
  };
  const resetEditValues = () => {
    setIsEditing(false);
    setConditionName("");
    setConditionDescription("");
    setConditionNotes("");
    setRowKey(-1);
    setColumnKey(-1);
  };
  const handleSaveChanges = () => {
    let updatedCondition = {
      id: rowKey,
      name: conditionName,
      description: conditionDescrption,
      notes: conditionNotes,
    } as ICondition;

    dispatch(saveCondition(updatedCondition));
    resetEditValues();
    setHasChanges(true);
  };

  const [dialogOpen, setDialogOpen] = React.useState(false);
  const conditionTitle = "Condition";
  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  React.useEffect(() => {
    dispatch(loadConditions);
  }, []);

  React.useEffect(() => {
    if (hasChanges) {
      dispatch(loadConditions);
      setHasChanges(false);
    }
  }, [hasChanges]);

  return (
    <Item>
      <AddConditionDialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        setHasChanged={setHasChanges}
      />
      <Toolbar>
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div">
          Conditions
        </Typography>
        <Tooltip title={`Add New ${conditionTitle}`}>
          <IconButton onClick={handleClickOpen}>
            <AddBoxIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <TableContainer>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Notes</TableCell>
              {isEditing && <TableCell></TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {conditions.map((row: ICondition) => (
              <StyledTable.Row
                hover
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <StyledTable.Cell
                  aria-readonly="false"
                  component="th"
                  scope="row"
                  onDoubleClick={(event) => {
                    handleDoubleClick(1, row);
                  }}>
                  {rowKey === row.id ? (
                    <TextField
                      autoFocus={columnKey === 1}
                      size="small"
                      fullWidth
                      margin="none"
                      placeholder={row.name}
                      value={conditionName}
                      onChange={(event) => setConditionName(event.target.value)}
                    />
                  ) : (
                    row.name
                  )}
                </StyledTable.Cell>
                <StyledTable.Cell
                  component="th"
                  scope="row"
                  onDoubleClick={(event) => {
                    handleDoubleClick(2, row);
                  }}>
                  {rowKey === row.id ? (
                    <TextField
                      autoFocus={columnKey === 2}
                      size="small"
                      fullWidth
                      placeholder={row.description}
                      value={conditionDescrption}
                      onChange={(event) =>
                        setConditionDescription(event.target.value)
                      }
                    />
                  ) : (
                    row.description
                  )}
                </StyledTable.Cell>
                <StyledTable.Cell
                  component="th"
                  scope="row"
                  onDoubleClick={(event) => {
                    handleDoubleClick(3, row);
                  }}>
                  {rowKey === row.id ? (
                    <TextField
                      autoFocus={columnKey === 3}
                      size="small"
                      fullWidth
                      placeholder={row.notes}
                      value={conditionNotes}
                      onChange={(event) =>
                        setConditionNotes(event.target.value)
                      }
                    />
                  ) : (
                    row.notes
                  )}
                </StyledTable.Cell>
                {isEditing &&
                  (rowKey === row.id ? (
                    <StyledTable.Cell>
                      <Tooltip title={`Save`}>
                        <IconButton onClick={handleSaveChanges}>
                          <CheckCircleIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title={`Cancel`}>
                        <IconButton onClick={resetEditValues}>
                          <CancelIcon />
                        </IconButton>
                      </Tooltip>
                    </StyledTable.Cell>
                  ) : (
                    <StyledTable.Cell></StyledTable.Cell>
                  ))}
              </StyledTable.Row>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Item>
  );
};

export default ConditionsPage;
