import { createSlice } from "@reduxjs/toolkit";
import { IDetails } from "../../../models/individual/IDetails";
import { RootState, AppThunk } from "../../../index";
import { dbRequestBegin } from "../../middleware/databaseActions";
import { RequestType } from "../../../models/enums/requestType";

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

export const loadIndividualDetails =
  (individualId: number): AppThunk =>
  (dispatch) =>
    dispatch(
      dbRequestBegin({
        type: RequestType.GetDetails,
        data: individualId,
        onStart: requested.type,
        onSuccess: received.type,
        onError: failed.type,
      })
    );

// Export reducer
export default individualSlice.reducer;
