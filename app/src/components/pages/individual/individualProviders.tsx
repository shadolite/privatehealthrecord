import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Item from "../../shared/item";
import { getProviderName, IProvider } from "../../../models/IProvider";
import { IIndividualProvider } from "../../../models/individual/IIndividualProvider";
import { Box, Typography } from "@mui/material";

const rows = [
  {
    id: 1,
    individualId: 1,
    providerId: 1,
    notes: "Ends on April 1",
    isActive: true,
  } as IIndividualProvider,
  {
    id: 2,
    individualId: 1,
    providerId: 2,
    firstVisitDate: new Date(),
    notes: "Providence Family Medicine",
    isActive: true,
  } as IIndividualProvider,
  {
    id: 3,
    individualId: 1,
    providerId: 3,
    isActive: true,
  } as IIndividualProvider,
  {
    id: 4,
    individualId: 1,
    providerId: 4,
    isActive: false,
  } as IIndividualProvider,
  {
    id: 5,
    individualId: 1,
    providerId: 4,
    notes: "Mostly couples therapy",
    isActive: true,
  } as IIndividualProvider,
  {
    id: 6,
    individualId: 1,
    providerId: 6,
    isActive: true,
  } as IIndividualProvider,
];

const IndividualProviders: React.FunctionComponent = (): JSX.Element => {
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
        Providers
      </Typography>
      <TableContainer component={Item}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>First Visit</TableCell>
              <TableCell>Notes</TableCell>
              <TableCell>Current Provider?</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {
                    row.providerId
                    //getProviderName(row.provider)
                  }
                </TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>
                  {row.firstVisitDate?.toLocaleDateString()}
                </TableCell>
                <TableCell>{row.notes}</TableCell>
                <TableCell>{row.isActive}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default IndividualProviders;
