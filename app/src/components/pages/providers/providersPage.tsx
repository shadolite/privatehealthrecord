import * as React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { IProvider } from "../../../models/IProvider";
import {
  loadProviders,
  getProviders,
  saveProvider,
} from "../../../store/reducers/providersSlice";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import Item from "../../shared/item";
import * as StyledTable from "../../shared/styledTableComponents";
import {
  IconButton,
  TextField,
  Tooltip,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
} from "@mui/material";
import AddProviderDialog from "./addProviderDialog";

const ProvidersPage: React.FunctionComponent = (): JSX.Element => {
  const loading = useAppSelector((state) => state.providers.isLoading);
  const providers = useAppSelector(getProviders);
  const dispatch = useAppDispatch();

  const [hasChanges, setHasChanges] = React.useState(false);

  const [isEditing, setIsEditing] = React.useState(false);
  const [providerGivenName, setProviderGivenName] = React.useState("");
  const [providerFamilyName, setProviderFamilyName] = React.useState("");
  const [providerGroupName, setProviderGroupName] = React.useState("");
  const [providerType, setProviderType] = React.useState("");
  const [providerWebsite, setProviderWebsite] = React.useState("");
  const [providerAddress, setProviderAddress] = React.useState("");
  const [providerPhoneNumber, setProviderPhoneNumber] = React.useState("");
  const [providerFax, setProviderFax] = React.useState("");
  const [providerEmail, setProviderEmail] = React.useState("");
  const [providerNotes, setProviderNotes] = React.useState("");
  const [rowKey, setRowKey] = React.useState(-1);
  const [columnKey, setColumnKey] = React.useState(-1);

  const handleDoubleClick = (autoFocusColumn: number, row: IProvider) => {
    setProviderGivenName(row.givenName);
    setProviderFamilyName(row.familyName);
    setProviderGroupName(row.groupName);
    setProviderType(row.type);
    setProviderWebsite(row.website);
    setProviderAddress(row.address);
    setProviderPhoneNumber(row.phoneNumber);
    setProviderFax(row.fax);
    setProviderEmail(row.email);
    setProviderNotes(row.notes);
    setIsEditing(true);
    setRowKey(row.id);
    setColumnKey(autoFocusColumn);
  };
  const resetEditValues = () => {
    setIsEditing(false);
    setProviderGivenName("");
    setProviderFamilyName("");
    setProviderGroupName("");
    setProviderType("");
    setProviderWebsite("");
    setProviderAddress("");
    setProviderPhoneNumber("");
    setProviderFax("");
    setProviderEmail("");
    setProviderNotes("");
    setRowKey(-1);
    setColumnKey(-1);
  };
  const getUpdatedProvider = () => {
    return {
      id: rowKey,
      givenName: providerGivenName,
      familyName: providerFamilyName,
      groupName: providerGroupName,
      type: providerType,
      website: providerWebsite,
      address: providerAddress,
      phoneNumber: providerPhoneNumber,
      fax: providerFax,
      email: providerEmail,
      notes: providerNotes,
    } as IProvider;
  };
  const handleSaveChanges = () => {
    let updatedProvider = getUpdatedProvider();
    dispatch(saveProvider(updatedProvider));
    resetEditValues();
    setHasChanges(true);
  };

  const [dialogOpen, setDialogOpen] = React.useState(false);
  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  React.useEffect(() => {
    dispatch(loadProviders);
  }, []);

  React.useEffect(() => {
    if (hasChanges) {
      dispatch(loadProviders);
      setHasChanges(false);
    }
  }, [hasChanges]);

  return (
    <Item>
      <AddProviderDialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        setHasChanged={setHasChanges}
      />
      <Toolbar>
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div">
          Provider
        </Typography>
        <Tooltip title={`Add New Provider`}>
          <IconButton onClick={handleClickOpen}>
            <AddBoxIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <TableContainer>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Notes</TableCell>
              {isEditing && <TableCell></TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {providers.map((row: IProvider) => (
              <StyledTable.Row
                hover
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <StyledTable.Cell
                  aria-readonly="false"
                  component="th"
                  scope="row"
                  onDoubleClick={(event) => {
                    handleDoubleClick(1, row);
                  }}>
                  {rowKey === row.id ? (
                    <TextField
                      autoFocus={columnKey === 1}
                      size="small"
                      fullWidth
                      margin="none"
                      placeholder={row.givenName}
                      value={providerGivenName}
                      onChange={(event) =>
                        setProviderGivenName(event.target.value)
                      }
                    />
                  ) : (
                    row.givenName
                  )}
                </StyledTable.Cell>
                <StyledTable.Cell
                  component="th"
                  scope="row"
                  onDoubleClick={(event) => {
                    handleDoubleClick(2, row);
                  }}>
                  {rowKey === row.id ? (
                    <TextField
                      autoFocus={columnKey === 2}
                      size="small"
                      fullWidth
                      placeholder={row.familyName}
                      value={providerFamilyName}
                      onChange={(event) =>
                        setProviderFamilyName(event.target.value)
                      }
                    />
                  ) : (
                    row.familyName
                  )}
                </StyledTable.Cell>
                <StyledTable.Cell
                  component="th"
                  scope="row"
                  onDoubleClick={(event) => {
                    handleDoubleClick(3, row);
                  }}>
                  {rowKey === row.id ? (
                    <TextField
                      autoFocus={columnKey === 3}
                      size="small"
                      fullWidth
                      placeholder={row.groupName}
                      value={providerGroupName}
                      onChange={(event) =>
                        setProviderGroupName(event.target.value)
                      }
                    />
                  ) : (
                    row.groupName
                  )}
                </StyledTable.Cell>
                <StyledTable.Cell
                  component="th"
                  scope="row"
                  onDoubleClick={(event) => {
                    handleDoubleClick(4, row);
                  }}>
                  {rowKey === row.id ? (
                    <TextField
                      autoFocus={columnKey === 4}
                      size="small"
                      fullWidth
                      placeholder={row.type}
                      value={providerType}
                      onChange={(event) => setProviderType(event.target.value)}
                    />
                  ) : (
                    row.type
                  )}
                </StyledTable.Cell>
                <StyledTable.Cell
                  component="th"
                  scope="row"
                  onDoubleClick={(event) => {
                    handleDoubleClick(5, row);
                  }}>
                  {rowKey === row.id ? (
                    <TextField
                      autoFocus={columnKey === 5}
                      size="small"
                      fullWidth
                      placeholder={row.website}
                      value={providerWebsite}
                      onChange={(event) =>
                        setProviderWebsite(event.target.value)
                      }
                    />
                  ) : (
                    row.website
                  )}
                </StyledTable.Cell>
                <StyledTable.Cell
                  component="th"
                  scope="row"
                  onDoubleClick={(event) => {
                    handleDoubleClick(6, row);
                  }}>
                  {rowKey === row.id ? (
                    <TextField
                      autoFocus={columnKey === 6}
                      size="small"
                      fullWidth
                      placeholder={row.address}
                      value={providerAddress}
                      onChange={(event) =>
                        setProviderAddress(event.target.value)
                      }
                    />
                  ) : (
                    row.address
                  )}
                </StyledTable.Cell>
                <StyledTable.Cell
                  component="th"
                  scope="row"
                  onDoubleClick={(event) => {
                    handleDoubleClick(7, row);
                  }}>
                  {rowKey === row.id ? (
                    <TextField
                      autoFocus={columnKey === 7}
                      size="small"
                      fullWidth
                      placeholder={row.phoneNumber}
                      value={providerPhoneNumber}
                      onChange={(event) =>
                        setProviderPhoneNumber(event.target.value)
                      }
                    />
                  ) : (
                    row.phoneNumber
                  )}
                </StyledTable.Cell>
                <StyledTable.Cell
                  component="th"
                  scope="row"
                  onDoubleClick={(event) => {
                    handleDoubleClick(8, row);
                  }}>
                  {rowKey === row.id ? (
                    <TextField
                      autoFocus={columnKey === 8}
                      size="small"
                      fullWidth
                      placeholder={row.fax}
                      value={providerFax}
                      onChange={(event) => setProviderFax(event.target.value)}
                    />
                  ) : (
                    row.fax
                  )}
                </StyledTable.Cell>
                <StyledTable.Cell
                  component="th"
                  scope="row"
                  onDoubleClick={(event) => {
                    handleDoubleClick(9, row);
                  }}>
                  {rowKey === row.id ? (
                    <TextField
                      autoFocus={columnKey === 9}
                      size="small"
                      fullWidth
                      placeholder={row.email}
                      value={providerEmail}
                      onChange={(event) => setProviderEmail(event.target.value)}
                    />
                  ) : (
                    row.email
                  )}
                </StyledTable.Cell>
                <StyledTable.Cell
                  component="th"
                  scope="row"
                  onDoubleClick={(event) => {
                    handleDoubleClick(10, row);
                  }}>
                  {rowKey === row.id ? (
                    <TextField
                      autoFocus={columnKey === 10}
                      size="small"
                      fullWidth
                      placeholder={row.notes}
                      value={providerNotes}
                      onChange={(event) => setProviderNotes(event.target.value)}
                    />
                  ) : (
                    row.notes
                  )}
                </StyledTable.Cell>
                {isEditing &&
                  (rowKey === row.id ? (
                    <StyledTable.Cell>
                      <Tooltip title={`Save`}>
                        <IconButton onClick={handleSaveChanges}>
                          <CheckCircleIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title={`Cancel`}>
                        <IconButton onClick={resetEditValues}>
                          <CancelIcon />
                        </IconButton>
                      </Tooltip>
                    </StyledTable.Cell>
                  ) : (
                    <StyledTable.Cell></StyledTable.Cell>
                  ))}
              </StyledTable.Row>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Item>
  );
};

export default ProvidersPage;
