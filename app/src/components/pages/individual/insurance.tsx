import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Item from "../../shared/item";
import { getProviderName, IProvider } from "../../../models/IProvider";
import { IInsurance } from "../../../models/individual/IInsurance";
import { Box, Typography } from "@mui/material";

const rows = [
  {
    id: 0,
    individualId: 1,
    memberId: "testMemberId",
    groupId: "testGroupId",
    binId: "testBinId",
    deductible: 6000,
    deductibleMet: false,
    providerId: 1,
    notes: "testNotes",
    isActive: true,
  } as IInsurance,
];

const Insurance: React.FunctionComponent = (): JSX.Element => {
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
        Insurance
      </Typography>
      <TableContainer component={Item}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Provider</TableCell>
              <TableCell>Member Id</TableCell>
              <TableCell>Group Id</TableCell>
              <TableCell>Bin Id</TableCell>
              <TableCell>Deductible</TableCell>
              <TableCell>Deductible Met?</TableCell>
              <TableCell>Notes</TableCell>
              <TableCell>Active?</TableCell>
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
                <TableCell>{row.memberId}</TableCell>
                <TableCell>{row.groupId}</TableCell>
                <TableCell>{row.binId}</TableCell>
                <TableCell>{row.deductible}</TableCell>
                <TableCell>{row.deductibleMet}</TableCell>
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

export default Insurance;
