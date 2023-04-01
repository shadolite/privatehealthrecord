import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IDetail } from "../../../../models/individual/IDetail";
import { Box, Step, StepButton, Stepper, Typography } from "@mui/material";
import * as IndividualData from "../../../../store/reducers/individualSlice";
import EditDetails from "./editDetails";
import { useAppSelector, useAppDispatch } from "../../../../store/hooks";

interface Props {
  open: boolean;
  setOpen: any;
  setHasChanged: any;
}

const steps = ["Details"]; //, "Diagnoses", "Treatments"];

const EditDialog: React.FunctionComponent<Props> = ({
  open,
  setOpen,
  // use to update individual so view page will also update
  setHasChanged,
}): JSX.Element => {
  const selectedDetails = useAppSelector(IndividualData.getDetail);
  const [details, setDetails] = React.useState({} as IDetail);
  const dispatch = useAppDispatch();
  const saveDetails = (details: IDetail) => {
    details.id
      ? dispatch(IndividualData.saveDetails(details))
      : dispatch(IndividualData.addDetails(details));
    setHasChanged(true);
  };

  React.useEffect(() => {
    setDetails(selectedDetails);
  }, [selectedDetails]);

  const handleClose = () => {
    setOpen(false);
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
    setActiveStep(0);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);

    if (allStepsCompleted()) {
      saveDetails(details);
    }
    // handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const loadStep = (step: number): any => {
    switch (step) {
      case 0:
        return <EditDetails details={details} setDetails={setDetails} />;
      default:
        break;
    }
  };

  return (
    <div>
      <Dialog fullWidth={true} maxWidth="lg" open={open} onClose={handleClose}>
        <DialogTitle>Edit Individual</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <Box sx={{ width: "100%" }}>
            <Stepper nonLinear activeStep={activeStep}>
              {steps.map((label, index) => (
                <Step key={label} completed={completed[index]}>
                  <StepButton color="inherit" onClick={handleStep(index)}>
                    {label}
                  </StepButton>
                </Step>
              ))}
            </Stepper>
            <div>
              <React.Fragment>
                {loadStep(activeStep)}
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  {/* <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}>
                      Back
                    </Button> */}
                  <Box sx={{ flex: "1 1 auto" }} />
                  {/* <Button onClick={handleNext} sx={{ mr: 1 }}>
                      Next
                    </Button> */}
                  {activeStep !== steps.length && completed[activeStep] && (
                    <Typography
                      variant="caption"
                      sx={{ display: "inline-block" }}>
                      Step {activeStep + 1} has been saved
                    </Typography>
                  )}
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1 ? "Finish" : "Save"}
                  </Button>
                  {/* <Button onClick={handleReset}>Edit</Button> */}
                </Box>
              </React.Fragment>
              {/* )} */}
            </div>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditDialog;
