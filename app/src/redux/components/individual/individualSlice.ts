import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RequestType } from "../../../models/enums/requestType";
import { IDetails } from "../../../models/individual/IDetails";
import { dbRequestBegin } from "../../middleware/databaseActions";
import { AppThunk, RootState } from "../../store/store";

interface IndividualState {
  details: IDetails;
  isLoading: boolean;
  isUpdating: boolean;
}

const initialState: IndividualState = {
  details: {} as IDetails,
  isLoading: false,
  isUpdating: false,
};

const individualSlice = createSlice({
  name: "individual",
  initialState,
  reducers: {
    requested: (individual) => {
      individual.isLoading = true;
    },
    received: (individual, action: PayloadAction<IDetails>) => {
      individual.details = action.payload;
    },
    failed: (individual) => {
      individual.isLoading = false;
    },
    added: (individual, action: PayloadAction<number>) => {
      individual.isLoading = false;
      individual.details.id = action.payload;
    },
    updated: (individual) => {
      individual.isLoading = false;
    },
  },
});

// Actions
const { requested, received, failed, added, updated } = individualSlice.actions;

// Selectors
export const getDetails = (state: RootState) => state.individual.details;

// Thunks
export const loadDetails =
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

export const addDetails =
  (details: IDetails): AppThunk =>
  (dispatch) =>
    dispatch(
      dbRequestBegin({
        type: RequestType.AddDetails,
        data: details,
        onStart: requested.type,
        onSuccess: added.type,
        onError: failed.type,
      })
    );

export const saveDetails =
  (details: IDetails): AppThunk =>
  (dispatch) =>
    dispatch(
      dbRequestBegin({
        type: RequestType.UpdateDetails,
        data: details,
        onStart: requested.type,
        onSuccess: updated.type,
        onError: failed.type,
      })
    );

// Export reducer
export default individualSlice.reducer;
