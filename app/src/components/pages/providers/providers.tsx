import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { getProviderName, IProvider } from "../../../models/IProvider";
import Item from "../../shared/item";

const rows = [
  {
    id: 1,
    groupName: "test 1",
    type: "insurance",
    website: "insurance.com",
  } as IProvider,
  {
    id: 2,
    givenName: "test 2 firstName",
    familyName: "test 2 lastName",
    groupName: "test 2",
    type: "PCP",
    website: "PCP.org",
    address: "2222 address",
    phoneNumber: "222-222-2222",
    notes: "Specialty?",
  } as IProvider,
  {
    id: 3,
    givenName: "test 3 firstName",
    familyName: "test 3 lastName",
    groupName: "test 3",
    type: "OBGYN",
    website: "OBGYN.com",
    address: "3333 address",
    phoneNumber: "333-333-3333",
    notes: "Also operates aesthetics practice",
  } as IProvider,
  {
    id: 4,
    givenName: "test 4 firstName",
    familyName: "test 4 lastName",
    groupName: "test 4",
    type: "Therapist",
  } as IProvider,
  {
    id: 5,
    givenName: "test 5 firstName",
    familyName: "test 5 lastName",
    groupName: "test 5",
    type: "Therapist",
  } as IProvider,
  {
    id: 6,
    groupName: "test 6",
    type: "Ugent Care",
    notes: "Has in-house pharmacy",
  } as IProvider,
];

const Providers: React.FunctionComponent = (): JSX.Element => {
  return (
    <TableContainer component={Item}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Provider</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Website</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {getProviderName(row)}
              </TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.website}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.phoneNumber}</TableCell>
              <TableCell>{row.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Providers;
