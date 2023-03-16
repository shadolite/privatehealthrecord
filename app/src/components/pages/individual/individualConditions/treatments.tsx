import * as React from "react";
import { Box, Typography } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Item from "../../../shared/item";
import { ITreatment } from "../../../../models/individual/ITreatment";
import { getProviderName } from "../../../../models/IProvider";

const treatmentRows = [
  {
    id: 1,
    individualId: 1,
    medicationId: 4,
    frequency: "twice daily",
    diagnosisIds: [1],
    dosage: "15mg",
    endOn: new Date("04/09/2020"),
    prescribedById: 2,
    notes: "Not safe for pregnancy or breastfeeding",
  } as ITreatment,
  {
    id: 2,
    individualId: 1,
    description: "Meditation",
    frequency: "Once Daily",
    diagnosisIds: [1],
    dosage: "15 minutes",
    prescribedById: 4,
    notes: "Pretty effective if consistent",
  } as ITreatment,
  {
    id: 3,
    individualId: 1,
    medicationId: 1,
    diagnosisIds: [2],
    frequency: "once daily",
    dosage: "100mg",
    prescribedById: 6,
  } as ITreatment,
  {
    id: 4,
    individualId: 1,
    diagnosisIds: [1, 3],
    medicationId: 3,
    frequency: "twice daily",
    dosage: "200mg",
    refillOn: new Date("03/16/2023"),
    notes:
      "Not FDA approved to treat ADHD. Insurance will not cover cost for Narcolepsy treatment unless diagnosed through sleep studies",
  } as ITreatment,
  {
    id: 5,
    individualId: 1,
    diagnosisIds: [4],
    medicationId: 2,
    frequency: "once daily",
    dosage: "10mg",
    prescribedById: 6,
  } as ITreatment,
];

function Row(props: { row: ITreatment }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.description}
        </TableCell>
        <TableCell align="right">{row.dosage}</TableCell>
        <TableCell align="right">{row.frequency}</TableCell>
        <TableCell align="right">{row.startOn?.toLocaleDateString()}</TableCell>
        <TableCell align="right">
          {row.refillOn?.toLocaleDateString()}
        </TableCell>
        <TableCell align="right">{row.endOn?.toLocaleDateString()}</TableCell>
        <TableCell align="right">{row.prescribedById}</TableCell>
        <TableCell align="right">{row.notes}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Condition</TableCell>
                    <TableCell>Onset</TableCell>
                    <TableCell>Diagnosed By</TableCell>
                    <TableCell>Active?</TableCell>
                    <TableCell>Notes</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.diagnosisIds.map((historyRow) => (
                    <TableRow key={historyRow}>
                      <TableCell component="th" scope="row">
                        {historyRow}
                      </TableCell>
                      <TableCell>{historyRow}</TableCell>
                      <TableCell>{historyRow}</TableCell>
                      <TableCell>{historyRow}</TableCell>
                      <TableCell>{historyRow}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const Treatments: React.FunctionComponent = (): JSX.Element => {
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
        Conditions/Medications
      </Typography>
      <TableContainer component={Item}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Treatment</TableCell>
              <TableCell>Dose</TableCell>
              <TableCell>Frequency</TableCell>
              <TableCell>Started On</TableCell>
              <TableCell>Refill On</TableCell>
              <TableCell>Ended On</TableCell>
              <TableCell>Prescribed By</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {treatmentRows.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Treatments;
