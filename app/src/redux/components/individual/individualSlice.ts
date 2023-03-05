import { createSlice } from "@reduxjs/toolkit";
import { IDetails } from "../../../models/individual/IDetails";
import { RootState, AppThunk } from "../../../index";

const individualSlice = createSlice({
  name: "individual",
  initialState: {
    personalDetails: {} as IDetails,
    isLoading: false,
    isUpdating: false,
  },
  reducers: {
    requested: (individual, action) => {
      individual.isLoading = true;
    },
    received: (individual, action) => {
      individual.personalDetails = action.payload;
    },
    failed: (individual, action) => {
      individual.isLoading = false;
    },
    updated: (individual, action) => {},
  },
});

// Actions
const { requested, received, failed, updated } = individualSlice.actions;

// Selectors
export const getPersonalInformation = (state: RootState) =>
  state.individual.personalDetails;

// export const loadIndividual: AppThunk = (dispatch) =>
//   dispatch(getTestPersonalDetails);

// Export reducer
export default individualSlice.reducer;
