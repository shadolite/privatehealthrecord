import { IDetails } from "../../../../models/individual/IDetails";
import * as React from "react";
import { Box, TextField } from "@mui/material";
import Item from "../../../shared/item";
import MeasurementFormControl from "./editMeasurements";
import { BloodType } from "../../../../models/enums/bloodType";

interface Props {
  details: IDetails;
  isComplete: boolean;
  setDetails: (details: IDetails) => void;
}

const EditDetails: React.FunctionComponent<Props> = ({
  details,
  isComplete,
  setDetails,
}): JSX.Element => {
  const [givenName, setGivenName] = React.useState(details.givenName);
  const [familyName, setFamilyName] = React.useState(details.familyName);
  const [birthdate, setBirthdate] = React.useState(details.birthdate);
  const [height, setHeight] = React.useState(
    details.height ? details.height : 0
  );
  const [weight, setWeight] = React.useState(
    details.weight ? details.weight : 0
  );
  const [bloodType, setBloodType] = React.useState(details.bloodType);
  const [address, setAddress] = React.useState(details.address);
  const [phoneNumber, setPhoneNumber] = React.useState(details.phoneNumber);
  const [notes, setNotes] = React.useState(details.notes);

  const handleGivenName = (event: any) => {
    setGivenName(event.target.value);
  };
  const handleFamilyName = (event: any) => {
    setFamilyName(event.target.value);
  };
  const handleBirthdate = (event: any) => {
    setBirthdate(event.target.value);
  };
  const handleBloodType = (event: any) => {
    setBloodType(event.target.value);
  };
  const handleAddress = (event: any) => {
    setAddress(event.target.value);
  };
  const handlePhoneNumber = (event: any) => {
    setPhoneNumber(event.target.value);
  };
  const handleNotes = (event: any) => {
    setNotes(event.target.value);
  };

  React.useEffect(() => {
    if (isComplete) {
      let newDetails = {
        givenName,
        familyName,
        birthdate,
        height,
        weight,
        bloodType,
        address,
        phoneNumber,
        notes,
      } as IDetails;
      setDetails(newDetails);
    }
  }, [isComplete]);

  return (
    <React.Fragment>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        autoComplete="off">
        <Item>
          <TextField
            id="givenName"
            label="Given Name"
            required
            value={givenName}
            onChange={handleGivenName}
          />
          <TextField
            id="familyName"
            label="Family Name"
            value={familyName}
            onChange={handleFamilyName}
          />
          <div />
          <TextField
            id="birthdate"
            label="Birthdate"
            type="date"
            value={birthdate}
            onChange={handleBirthdate}
          />
          <div />
          <MeasurementFormControl
            centimeters={height}
            setCentimeters={setHeight}
            kilograms={weight}
            setKilograms={setWeight}
          />
          <div />
          <TextField
            id="bloodType"
            label="Blood Type"
            value={bloodType}
            onChange={handleBloodType}
          />
          <TextField
            id="address"
            label="Address"
            value={address}
            onChange={handleAddress}
          />
          <TextField
            id="phoneNumber"
            label="Phone Number"
            value={phoneNumber}
            onChange={handlePhoneNumber}
          />
          <div>
            <TextField
              id="notes"
              label="Notes"
              fullWidth
              multiline
              sx={{
                paddingRight: 2,
              }}
              value={notes}
              onChange={handleNotes}
            />
          </div>
        </Item>
      </Box>
    </React.Fragment>
  );
};

export default EditDetails;
