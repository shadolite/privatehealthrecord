import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Item from "../../shared/item";
import { ICondition } from "../../../models/ICondition";

const rows = [
  {
    id: 0,
    name: "condition 1",
    description: "Lots of stuff going on",
    notes: "condition1.org",
  } as ICondition,
  {
    id: 1,
    name: "Condition 2",
  } as ICondition,
  {
    id: 2,
    name: "Condition 3",
  } as ICondition,
  {
    id: 3,
    name: "Condition 4",
  } as ICondition,
  {
    id: 4,
    name: "Condition 5",
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
