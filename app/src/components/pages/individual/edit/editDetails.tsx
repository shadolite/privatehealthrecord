import { IDetails } from "../../../../models/individual/IDetails";
import * as React from "react";
import { Box, TextField } from "@mui/material";
import Item from "../../../shared/item";
import MeasurementFormControl from "./editMeasurements";
import { BloodType } from "../../../../models/enums/bloodType";

interface Props {
  details: IDetails;
  setDetails: (details: IDetails) => void;
}

const EditDetails: React.FunctionComponent<Props> = ({
  details,
  setDetails,
}): JSX.Element => {
  const [givenName, setGivenName] = React.useState(
    details.givenName ? details.givenName : ""
  );
  const [familyName, setFamilyName] = React.useState(
    details.familyName ? details.familyName : ""
  );
  const [birthdate, setBirthdate] = React.useState(
    details.birthdate ? details.birthdate.toLocaleDateString() : ""
  );
  const [height, setHeight] = React.useState(
    details.height ? details.height : ""
  );
  const [weight, setWeight] = React.useState(
    details.weight ? details.weight : ""
  );
  const [bloodType, setBloodType] = React.useState(
    details.bloodType ? details.bloodType : ""
  );
  const [address, setAddress] = React.useState(
    details.address ? details.address : ""
  );
  const [phoneNumber, setPhoneNumber] = React.useState(
    details.phoneNumber ? details.phoneNumber : ""
  );
  const [notes, setNotes] = React.useState(details.notes ? details.notes : "");

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
    let newDetails = {
      givenName: givenName,
      familyName: familyName == "" ? undefined : familyName,
      birthdate: birthdate == "" ? undefined : new Date(birthdate),
      height: height == "" ? undefined : Number(height),
      weight: weight == "" ? undefined : Number(weight),
      bloodType: bloodType == "" ? undefined : bloodType,
      address: address == "" ? undefined : address,
      phoneNumber: phoneNumber == "" ? undefined : phoneNumber,
      notes: notes == "" ? undefined : notes,
    } as IDetails;

    if (details.id) {
      newDetails.id = details.id;
    }

    setDetails(newDetails);
  }, [
    givenName,
    familyName,
    birthdate,
    height,
    weight,
    bloodType,
    address,
    phoneNumber,
    notes,
  ]);

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
