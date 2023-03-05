import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { ICondition } from "../../models/ICondition";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  margin: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const rows = [
  {
    id: 0,
    name: "ADHD",
    description: "Attention Deficit Hyperactivity Disorder",
    notes: "add.org/adhd-facts/",
  } as ICondition,
  {
    id: 1,
    name: "Major Depression",
  } as ICondition,
  {
    id: 2,
    name: "Narcolepsy",
  } as ICondition,
  {
    id: 3,
    name: "Breast Cancer",
  } as ICondition,
];

const Conditions: React.FunctionComponent = (): JSX.Element => {
  return (
    <TableContainer component={Item}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Condition</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Conditions;
