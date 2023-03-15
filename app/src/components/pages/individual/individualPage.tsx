import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import * as React from "react";
import {
  loadDetails,
  deleteDetails,
} from "../../../store/reducers/individualSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import DetailsItem from "./details";
import EditDialog from "./edit/editDialog";

const IndividualPage: React.FunctionComponent = (): JSX.Element => {
  const individual = useAppSelector((state) => state.individual);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [selectedIndividualId, setSelectedIndividualId] = React.useState(1);
  const [selectedIndividual, setSelectedIndividual] =
    React.useState(individual);

  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    // dispatch(deleteDetails(selectedIndividualId));
    dispatch(loadDetails(selectedIndividualId));
  }, []);

  React.useEffect(() => {
    dispatch(loadDetails(selectedIndividualId));
  }, [selectedIndividual]);

  return (
    <React.Fragment>
      <Box sx={{ width: "100%" }}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Edit
        </Button>
        <EditDialog
          open={dialogOpen}
          setOpen={setDialogOpen}
          individual={selectedIndividual}
          setIndividual={setSelectedIndividual}
        />
        <Stack spacing={2}>
          <DetailsItem details={individual.details}></DetailsItem>
        </Stack>
      </Box>
    </React.Fragment>
  );
};

export default IndividualPage;
