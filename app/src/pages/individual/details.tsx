import { PersonalDetails } from "../../models/personalDetails";
import * as React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

interface Props {
  details: PersonalDetails;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DetailsItem: React.FunctionComponent<Props> = (
  props: Props
): JSX.Element => {
  return (
    <React.Fragment>
      <Item>TEST</Item>
    </React.Fragment>
  );
};

export default DetailsItem;
