import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ICondition } from "../../../models/ICondition";
import * as ConditionData from "../../../store/reducers/conditionsSlice";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { TextField } from "@mui/material";

interface Props {
  open: boolean;
  setOpen: any;
  setHasChanged: any;
}

const AddConditionDialog: React.FunctionComponent<Props> = ({
  open,
  setOpen,
  setHasChanged,
}): JSX.Element => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [notes, setNotes] = React.useState("");

  const dispatch = useAppDispatch();
  const addCondition = (condition: ICondition) => {
    dispatch(ConditionData.addCondition(condition));
    setHasChanged(true);
  };
  const clearFields = () => {
    setName("");
    setDescription("");
    setNotes("");
  };
  const getCondition = () => {
    return {
      name: name,
      description: description,
      notes: notes,
    } as ICondition;
  };

  const handleClose = () => {
    clearFields();
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
    let condition = getCondition();
    addCondition(condition);
    clearFields();
  };
  const handleSaveClose = () => {
    let condition = getCondition();
    addCondition(condition);
    clearFields();
    setOpen(false);
  };

  return (
    <div>
      <Dialog fullWidth={true} maxWidth="lg" open={open} onClose={handleClose}>
        <DialogTitle>Add Condition</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField
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
          <Button onClick={handleSaveAdd}>Save and Add Another</Button>
          <Button onClick={handleSaveClose}>Done</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddConditionDialog;
