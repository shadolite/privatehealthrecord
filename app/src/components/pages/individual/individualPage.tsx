import { Button, Skeleton, Toolbar, Tooltip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import * as React from "react";
import { loadDetails } from "../../../store/reducers/individualSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import DetailsItem from "./detailsItem";
import IndividualConditionsItem from "./individualConditions/individualConditions";
import VisitsItem from "./visits";
import ProvidersItem from "./individualProviders";
import InsuranceItem from "./insurance";
import EditDialog from "./edit/editDialog";

const IndividualPage: React.FunctionComponent = (): JSX.Element => {
  const individual = useAppSelector((state) => state.individual);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [hasChanged, setHasChanged] = React.useState(false);

  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(loadDetails(1));
  }, []);

  React.useEffect(() => {
    if (hasChanged) dispatch(loadDetails(1));
    setHasChanged(false);
  }, [hasChanged]);

  return (
    <React.Fragment>
      <Box sx={{ width: "100%" }}>
        <Toolbar>
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div">
            Individual
          </Typography>
          <Tooltip title={`Add/Edit Details`}>
            <Button variant="outlined" onClick={handleClickOpen}>
              {individual.details ? "Edit" : "Add"}
            </Button>
          </Tooltip>
        </Toolbar>
        <EditDialog
          open={dialogOpen}
          setOpen={setDialogOpen}
          setHasChanged={setHasChanged}
        />
        <Stack spacing={2}>
          {individual.isLoading ? (
            <Skeleton />
          ) : (
            <React.Fragment>
              <DetailsItem details={individual.details} />
              {/* <IndividualConditionsItem /> */}
              <VisitsItem />
              {/* <ProvidersItem /> */}
              {/* <InsuranceItem /> */}
            </React.Fragment>
          )}
        </Stack>
      </Box>
    </React.Fragment>
  );
};

export default IndividualPage;
