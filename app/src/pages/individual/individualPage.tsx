import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import * as React from "react";
import { loadDetails } from "../../redux/components/individual/individualSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import DetailsItem from "./details";
import EditDialog from "./editModal/editDialog";

const IndividualPage: React.FunctionComponent = (): JSX.Element => {
  const individual = useAppSelector((state) => state.individual.details);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [selectedIndividual, setSelectedIndividual] =
    React.useState(individual);

  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(loadDetails(1));
  }, []);

  React.useEffect(() => {
    setSelectedIndividual(individual);
  }, [individual]);

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
        />
        <Stack spacing={2}>
          <DetailsItem details={selectedIndividual}></DetailsItem>
        </Stack>
      </Box>
    </React.Fragment>
  );
};

export default IndividualPage;
