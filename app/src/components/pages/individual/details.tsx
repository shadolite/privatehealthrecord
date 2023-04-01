import { IDetail, getFullName } from "../../../models/individual/IDetail";
import * as React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { copyInputValue } from "../../../utilities/clickHelper";
import Item from "../../shared/item";
import { isEmptyOrWhiteSpace } from "../../../utilities/stringHelper";

interface Props {
  details: IDetail;
}

const DetailsItem: React.FunctionComponent<Props> = ({
  details,
}): JSX.Element => {
  const [name, setName] = React.useState("");
  const [birthdate, setBirthdate] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [bloodType, setBloodType] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [notes, setNotes] = React.useState("");

  React.useEffect(() => {
    setName(getFullName(details));
    setBirthdate(
      details.birthdate ? details.birthdate.toLocaleDateString() : ""
    );
    setHeight(details.height ? details.height.toString() : "");
    setWeight(details.weight ? details.weight.toString() : "");
    setBloodType(details.bloodType ? details.bloodType : "");
    setAddress(details.address ? details.address : "");
    setPhoneNumber(details.phoneNumber ? details.phoneNumber : "");
    setNotes(details.notes ? details.notes : "");
  }, [details]);

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
      }}
      noValidate
      autoComplete="off">
      <Typography
        component="h2"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}>
        Details
      </Typography>
      <Item>
        <TextField
          id="name"
          label="Name"
          InputProps={{
            readOnly: true,
          }}
          value={name}
          inputProps={{
            onClick: copyInputValue,
          }}
        />
        {!isEmptyOrWhiteSpace(birthdate) && (
          <TextField
            id="birthdate"
            label="Birthdate"
            InputProps={{
              readOnly: true,
            }}
            value={birthdate}
            inputProps={{
              onClick: copyInputValue,
            }}
          />
        )}
        {!isEmptyOrWhiteSpace(height) && (
          <TextField
            id="height"
            label="Height"
            InputProps={{
              readOnly: true,
            }}
            value={height}
            inputProps={{
              onClick: copyInputValue,
            }}
          />
        )}
        {!isEmptyOrWhiteSpace(weight) && (
          <TextField
            id="weight"
            label="Weight"
            InputProps={{
              readOnly: true,
            }}
            value={weight}
            inputProps={{
              onClick: copyInputValue,
            }}
          />
        )}
        {!isEmptyOrWhiteSpace(bloodType) && (
          <TextField
            id="bloodType"
            label="Blood Type"
            InputProps={{
              readOnly: true,
            }}
            value={bloodType}
            inputProps={{
              onClick: copyInputValue,
            }}
          />
        )}
        {!isEmptyOrWhiteSpace(address) && (
          <TextField
            id="address"
            label="Address"
            InputProps={{
              readOnly: true,
            }}
            value={address}
            inputProps={{
              onClick: copyInputValue,
            }}
          />
        )}
        {!isEmptyOrWhiteSpace(phoneNumber) && (
          <TextField
            id="phoneNumber"
            label="Phone Number"
            InputProps={{
              readOnly: true,
            }}
            value={phoneNumber}
            inputProps={{
              onClick: copyInputValue,
            }}
          />
        )}
        {!isEmptyOrWhiteSpace(notes) && (
          <div>
            <TextField
              id="notes"
              label="Notes"
              fullWidth
              multiline
              sx={{
                paddingRight: 2,
              }}
              InputProps={{
                readOnly: true,
              }}
              value={notes}
              inputProps={{
                onClick: copyInputValue,
              }}
            />
          </div>
        )}
      </Item>
    </Box>
  );
};

export default DetailsItem;
