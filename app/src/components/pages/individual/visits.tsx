import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Item from "../../shared/item";
import { getProviderName, IProvider } from "../../../models/IProvider";
import { IVisit } from "../../../models/individual/IVisit";
import { Box, Typography } from "@mui/material";

const rows = [
  {
    id: 1,
    individualId: 1,
    providerId: 2,
    date: new Date("08/13/2022"),
    notes: "Visited about getting a sleep study",
  } as IVisit,
  {
    id: 2,
    individualId: 1,
    providerId: 2,
    date: new Date("04/13/2020"),
    notes: "Visited ADHD meds during pregnancy",
  } as IVisit,
  {
    id: 3,
    individualId: 1,
    providerId: 3,
    date: new Date("03/01/2023"),
    notes: "Removed birth control implant",
  } as IVisit,
];

const Visits: React.FunctionComponent = (): JSX.Element => {
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
        Visits
      </Typography>
      <TableContainer component={Item}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Provider</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.providerId}
                </TableCell>
                <TableCell>{row.date.toLocaleDateString()}</TableCell>
                <TableCell>{row.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Visits;
