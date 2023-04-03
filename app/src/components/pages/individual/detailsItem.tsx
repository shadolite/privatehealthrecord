import { IDetails, getFullName } from "../../../models/individual/IDetails";
import * as React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { copyInputValue } from "../../../utilities/clickHelper";
import Item from "../../shared/item";
import { isEmptyOrWhiteSpace } from "../../../utilities/stringHelper";

interface Props {
  details: IDetails;
}

const DetailsItem: React.FunctionComponent<Props> = ({
  details,
}): JSX.Element => {
  return (
    <Item>
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
            value={getFullName(details)}
            inputProps={{
              onClick: copyInputValue,
            }}
          />
          {!details.birthdate && (
            <TextField
              id="birthdate"
              label="Birthdate"
              InputProps={{
                readOnly: true,
              }}
              value={details.birthdate}
              inputProps={{
                onClick: copyInputValue,
              }}
            />
          )}
          {details.height && details.height !== 0 && (
            <TextField
              id="height"
              label="Height"
              InputProps={{
                readOnly: true,
              }}
              value={details.height}
              inputProps={{
                onClick: copyInputValue,
              }}
            />
          )}
          {details.weight && details.weight !== 0 && (
            <TextField
              id="weight"
              label="Weight"
              InputProps={{
                readOnly: true,
              }}
              value={details.weight}
              inputProps={{
                onClick: copyInputValue,
              }}
            />
          )}
          {!isEmptyOrWhiteSpace(details.bloodType) && (
            <TextField
              id="bloodType"
              label="Blood Type"
              InputProps={{
                readOnly: true,
              }}
              value={details.bloodType}
              inputProps={{
                onClick: copyInputValue,
              }}
            />
          )}
          {!isEmptyOrWhiteSpace(details.address) && (
            <TextField
              id="address"
              label="Address"
              InputProps={{
                readOnly: true,
              }}
              value={details.address}
              inputProps={{
                onClick: copyInputValue,
              }}
            />
          )}
          {!isEmptyOrWhiteSpace(details.phoneNumber) && (
            <TextField
              id="phoneNumber"
              label="Phone Number"
              InputProps={{
                readOnly: true,
              }}
              value={details.phoneNumber}
              inputProps={{
                onClick: copyInputValue,
              }}
            />
          )}
          {!isEmptyOrWhiteSpace(details.notes) && (
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
                value={details.notes}
                inputProps={{
                  onClick: copyInputValue,
                }}
              />
            </div>
          )}
        </Item>
      </Box>
    </Item>
  );
};

export default DetailsItem;
