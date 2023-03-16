import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Item from "../../shared/item";
import { IMedication } from "../../../models/IMedication";

const rows = [
  {
    id: 1,
    name: "test 1",
    notes: "Prescribed for multiple conditions",
  } as IMedication,
  {
    id: 2,
    name: "test 2",
  } as IMedication,
  {
    id: 3,
    name: "test 3",
  } as IMedication,
  {
    id: 4,
    name: "test 4",
  } as IMedication,
];

const Medications: React.FunctionComponent = (): JSX.Element => {
  return (
    <TableContainer component={Item}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Medication</TableCell>
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

export default Medications;
