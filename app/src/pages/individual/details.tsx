import { IDetails, getFullName } from "../../models/individual/IDetails";
import * as React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Box, TextField } from "@mui/material";
import { copyInputValue } from "../../utilities/clickHelper";
import { isEmptyOrWhiteSpace } from "../../utilities/stringHelper";

interface Props {
  details: IDetails;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const DetailsItem: React.FunctionComponent<Props> = (
  props: Props
): JSX.Element => {
  return (
    <React.Fragment>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        noValidate
        autoComplete="off">
        <Item>
          <TextField
            id="givenName"
            label="Name"
            InputProps={{
              readOnly: true,
            }}
            value={getFullName(props.details)}
            inputProps={{
              onClick: copyInputValue,
            }}
          />
          {props.details.birthdate !== undefined && (
            <TextField
              id="birthdate"
              label="Birthdate"
              InputProps={{
                readOnly: true,
              }}
              value={props.details.birthdate?.toLocaleDateString()}
              inputProps={{
                onClick: copyInputValue,
              }}
            />
          )}
          {props.details.height !== undefined && (
            <TextField
              id="height"
              label="Height"
              InputProps={{
                readOnly: true,
              }}
              value={props.details.height}
              inputProps={{
                onClick: copyInputValue,
              }}
            />
          )}
          {props.details.weight !== undefined && (
            <TextField
              id="weight"
              label="Weight"
              InputProps={{
                readOnly: true,
              }}
              value={props.details.weight}
              inputProps={{
                onClick: copyInputValue,
              }}
            />
          )}
          {props.details.bloodType !== undefined && (
            <TextField
              id="bloodType"
              label="Blood Type"
              InputProps={{
                readOnly: true,
              }}
              value={props.details.bloodType}
              inputProps={{
                onClick: copyInputValue,
              }}
            />
          )}
          {props.details.address !== undefined && (
            <TextField
              id="address"
              label="Address"
              InputProps={{
                readOnly: true,
              }}
              value={props.details.address}
              inputProps={{
                onClick: copyInputValue,
              }}
            />
          )}
          {props.details.phoneNumber !== undefined && (
            <TextField
              id="phoneNumber"
              label="Phone Number"
              InputProps={{
                readOnly: true,
              }}
              value={props.details.phoneNumber}
              inputProps={{
                onClick: copyInputValue,
              }}
            />
          )}
          {props.details.notes !== undefined && (
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
                value={props.details.notes}
                inputProps={{
                  onClick: copyInputValue,
                }}
              />
            </div>
          )}
        </Item>
        <Item></Item>
      </Box>
    </React.Fragment>
  );
};

export default DetailsItem;
