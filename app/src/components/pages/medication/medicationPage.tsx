import * as React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { IMedication } from "../../../models/IMedication";
import {
  loadMedication,
  getAllMedication,
  saveMedication,
} from "../../../store/reducers/medicationSlice";
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
import AddMedicationDialog from "./addMedicationDialog";

const MedicationPage: React.FunctionComponent = (): JSX.Element => {
  const loading = useAppSelector((state) => state.medication.isLoading);
  const medication = useAppSelector(getAllMedication);
  const dispatch = useAppDispatch();

  const [hasChanges, setHasChanges] = React.useState(false);

  const [isEditing, setIsEditing] = React.useState(false);
  const [medicationName, setMedicationName] = React.useState("");
  const [medicationDescrption, setMedicationDescription] = React.useState("");
  const [medicationNotes, setMedicationNotes] = React.useState("");
  const [rowKey, setRowKey] = React.useState(-1);
  const [columnKey, setColumnKey] = React.useState(-1);

  const handleDoubleClick = (autoFocusColumn: number, row: IMedication) => {
    setMedicationName(row.name);
    setMedicationDescription(row.description);
    setMedicationNotes(row.notes);
    setIsEditing(true);
    setRowKey(row.id);
    setColumnKey(autoFocusColumn);
  };
  const resetEditValues = () => {
    setIsEditing(false);
    setMedicationName("");
    setMedicationDescription("");
    setMedicationNotes("");
    setRowKey(-1);
    setColumnKey(-1);
  };
  const handleSaveChanges = () => {
    let updatedMedication = {
      id: rowKey,
      name: medicationName,
      description: medicationDescrption,
      notes: medicationNotes,
    } as IMedication;

    dispatch(saveMedication(updatedMedication));
    resetEditValues();
    setHasChanges(true);
  };

  const [dialogOpen, setDialogOpen] = React.useState(false);
  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  React.useEffect(() => {
    dispatch(loadMedication);
  }, []);

  React.useEffect(() => {
    if (hasChanges) {
      dispatch(loadMedication);
      setHasChanges(false);
    }
  }, [hasChanges]);

  return (
    <Item>
      <AddMedicationDialog
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
          Medication
        </Typography>
        <Tooltip title={`Add New Medication`}>
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
            {medication.map((row: IMedication) => (
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
                      value={medicationName}
                      onChange={(event) =>
                        setMedicationName(event.target.value)
                      }
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
                      value={medicationDescrption}
                      onChange={(event) =>
                        setMedicationDescription(event.target.value)
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
                      value={medicationNotes}
                      onChange={(event) =>
                        setMedicationNotes(event.target.value)
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

export default MedicationPage;
