import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as ProviderData from "../../../store/reducers/providersSlice";
import { useAppDispatch } from "../../../store/hooks";
import { TextField } from "@mui/material";
import { IProvider } from "../../../models/IProvider";

interface Props {
  open: boolean;
  setOpen: any;
  setHasChanged: any;
}

const AddProviderDialog: React.FunctionComponent<Props> = ({
  open,
  setOpen,
  setHasChanged,
}): JSX.Element => {
  const [givenName, setGivenName] = React.useState("");
  const [familyName, setFamilyName] = React.useState("");
  const [groupName, setGroupName] = React.useState("");
  const [type, setType] = React.useState("");
  const [website, setWebsite] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [fax, setFax] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [notes, setNotes] = React.useState("");

  const dispatch = useAppDispatch();
  const addProvider = (provider: IProvider) => {
    dispatch(ProviderData.addProvider(provider));
    setHasChanged(true);
  };
  const clearFields = () => {
    setGivenName("");
    setFamilyName("");
    setGroupName("");
    setType("");
    setWebsite("");
    setAddress("");
    setPhoneNumber("");
    setFax("");
    setEmail("");
    setNotes("");
  };
  const getProvider = () => {
    return {
      givenName: givenName,
      familyName: familyName,
      groupName: groupName,
      type: type,
      website: website,
      address: address,
      phoneNumber: phoneNumber,
      fax: fax,
      email: email,
      notes: notes,
    } as IProvider;
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSaveAdd = () => {
    let provider = getProvider();
    addProvider(provider);
    clearFields();
  };
  const handleSaveClose = () => {
    let provider = getProvider();
    addProvider(provider);
    clearFields();
    setOpen(false);
  };

  return (
    <div>
      <Dialog fullWidth={true} maxWidth="lg" open={open} onClose={handleClose}>
        <DialogTitle>Add Provider</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField
            autoFocus
            id="givenName"
            label="Given Name"
            value={givenName}
            onChange={(event) => setGivenName(event.target.value)}
          />
          <TextField
            id="familyName"
            label="Family Name"
            value={familyName}
            onChange={(event) => setFamilyName(event.target.value)}
          />
          <TextField
            id="groupName"
            label="Group Name"
            value={groupName}
            onChange={(event) => setGroupName(event.target.value)}
          />
          <TextField
            id="type"
            label="Type"
            value={type}
            onChange={(event) => setType(event.target.value)}
          />
          <TextField
            id="website"
            label="Website"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
          />
          <TextField
            id="address"
            label="Address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
          <TextField
            id="phoneNumber"
            label="Phone Number"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
          <TextField
            id="fax"
            label="Fax"
            value={fax}
            onChange={(event) => setFax(event.target.value)}
          />
          <TextField
            id="email"
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            id="notes"
            label="Notes"
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
          />
          <DialogActions></DialogActions>
          <Button onClick={handleSaveAdd}>Add Another</Button>
          <Button onClick={handleSaveClose}>Done</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddProviderDialog;
