import { IDetails } from "../../../models/individual/IDetails";
import * as React from "react";
import { Box, TextField } from "@mui/material";
import Item from "../../../core/components/item";
import MeasurementFormControl from "./measurements";

interface Props {
  details: IDetails;
}

const EditDetails: React.FunctionComponent<Props> = (
  props: Props
): JSX.Element => {
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
            value={props.details.givenName}
          />
          <TextField
            id="familyName"
            label="Family Name"
            value={props.details.familyName}
          />
          <div />
          <TextField
            id="birthDay"
            label="Day"
            type="date"
            value={props.details.birthdate}
          />
          <div />
          <MeasurementFormControl
            centimeters={props.details.height}
            kilograms={props.details.weight}
          />
          <TextField
            id="bloodType"
            label="Blood Type"
            value={props.details.bloodType}
          />
          <TextField
            id="address"
            label="Address"
            value={props.details.address}
          />
          <TextField
            id="phoneNumber"
            label="Phone Number"
            value={props.details.phoneNumber}
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
              value={props.details.notes}
            />
          </div>
        </Item>
      </Box>
    </React.Fragment>
  );
};

export default EditDetails;
