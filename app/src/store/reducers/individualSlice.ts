import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RequestType } from "../../models/enums/requestType";
import { IDetails } from "../../models/individual/IDetails";
import { dbRequestBegin } from "../../middleware/databaseActions";
import { AppThunk, RootState } from "../store";
import { IDiagnosis } from "../../models/individual/IDiagnosis";
import { IInsurance } from "../../models/individual/IInsurance";
import { IIndividualProvider } from "../../models/individual/IIndividualProvider";
import { IVisit } from "../../models/individual/IVisit";
import { ITreatment } from "../../models/individual/ITreatment";

interface IndividualState {
  details: IDetails;
  diagnoses: Array<IDiagnosis>;
  treatments: Array<ITreatment>;
  insurance: Array<IInsurance>;
  providers: Array<IIndividualProvider>;
  visits: Array<IVisit>;
  isLoading: boolean;
}

const initialState: IndividualState = {
  details: {} as IDetails,
  diagnoses: {} as Array<IDiagnosis>,
  treatments: {} as Array<ITreatment>,
  insurance: {} as Array<IInsurance>,
  providers: {} as Array<IIndividualProvider>,
  visits: {} as Array<IVisit>,
  isLoading: false,
};

const individualSlice = createSlice({
  name: "individual",
  initialState,
  reducers: {
    requested: (individual) => {
      individual.isLoading = true;
    },
    received: (individual, action: PayloadAction<IDetails>) => {
      individual.isLoading = false;
      if (action.payload) individual.details = action.payload;
    },
    failed: (individual) => {
      individual.isLoading = false;
    },
    added: (individual, action: PayloadAction<number>) => {
      individual.isLoading = false;
      individual.details.id = action.payload;
    },
    deleted: (individual) => {
      individual.isLoading = false;
      individual.details = initialState.details;
    },
    updated: (individual) => {
      individual.isLoading = false;
    },
  },
});

// Actions
const { requested, received, failed, added, updated, deleted } =
  individualSlice.actions;

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
        type: RequestType.AddDetail,
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
        type: RequestType.UpdateDetail,
        data: details,
        onStart: requested.type,
        onSuccess: updated.type,
        onError: failed.type,
      })
    );

export const deleteDetails =
  (individualId: number): AppThunk =>
  (dispatch) =>
    dispatch(
      dbRequestBegin({
        type: RequestType.DeleteDetail,
        data: individualId,
        onStart: requested.type,
        onSuccess: deleted.type,
        onError: failed.type,
      })
    );

// Export reducer
export default individualSlice.reducer;
