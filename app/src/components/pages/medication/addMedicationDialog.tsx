import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as MedicationData from "../../../store/reducers/medicationSlice";
import { useAppDispatch } from "../../../store/hooks";
import { TextField } from "@mui/material";
import { IMedication } from "../../../models/IMedication";

interface Props {
  open: boolean;
  setOpen: any;
  setHasChanged: any;
}

const AddMedicationDialog: React.FunctionComponent<Props> = ({
  open,
  setOpen,
  setHasChanged,
}): JSX.Element => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [notes, setNotes] = React.useState("");

  const dispatch = useAppDispatch();
  const addMedication = (medication: IMedication) => {
    dispatch(MedicationData.addMedication(medication));
    setHasChanged(true);
  };
  const clearFields = () => {
    setName("");
    setDescription("");
    setNotes("");
  };
  const getMedication = () => {
    return {
      name: name,
      description: description,
      notes: notes,
    } as IMedication;
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };
  const handleDescriptionChange = (event: any) => {
    setDescription(event.target.value);
  };
  const handleNotesChange = (event: any) => {
    setNotes(event.target.value);
  };
  const handleSaveAdd = () => {
    let medication = getMedication();
    addMedication(medication);
    clearFields();
  };
  const handleSaveClose = () => {
    let medication = getMedication();
    addMedication(medication);
    clearFields();
    setOpen(false);
  };

  return (
    <div>
      <Dialog fullWidth={true} maxWidth="lg" open={open} onClose={handleClose}>
        <DialogTitle>Add Medication</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField
            autoFocus
            id="name"
            label="Name"
            value={name}
            onChange={handleNameChange}
          />
          <TextField
            id="description"
            label="Description"
            value={description}
            onChange={handleDescriptionChange}
          />
          <TextField
            id="notes"
            label="Notes"
            value={notes}
            onChange={handleNotesChange}
          />
          <DialogActions></DialogActions>
          <Button onClick={handleSaveAdd}>Add Another</Button>
          <Button onClick={handleSaveClose}>Done</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddMedicationDialog;
