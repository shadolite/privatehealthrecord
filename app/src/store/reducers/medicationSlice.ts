import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RequestType } from "../../models/enums/requestType";
import { IMedication } from "../../models/IMedication";
import { dbRequestBegin } from "../../middleware/databaseActions";
import { AppThunk, RootState } from "../store";

interface MedicationState {
  list: Array<IMedication>;
  isLoading: boolean;
}

const initialState: MedicationState = {
  list: new Array<IMedication>(),
  isLoading: false,
};

const medicationSlice = createSlice({
  name: "medication",
  initialState,
  reducers: {
    requested: (medication) => {
      medication.isLoading = true;
    },
    received: (medication, action: PayloadAction<Array<IMedication>>) => {
      medication.isLoading = false;
      if (action.payload) medication.list = action.payload;
    },
    failed: (medication) => {
      medication.isLoading = false;
    },
    added: (medication) => {
      medication.isLoading = false;
    },
    deleted: (medication) => {
      medication.isLoading = false;
    },
    updated: (medication) => {
      medication.isLoading = false;
    },
  },
});

// Actions
const { requested, received, failed, added, updated, deleted } =
  medicationSlice.actions;

// Selectors
export const getAllMedication = (state: RootState): Array<IMedication> =>
  state.medications.list;

// Thunks
export const loadMedication: AppThunk = (dispatch) =>
  dispatch(
    dbRequestBegin({
      type: RequestType.GetAllMedication,
      onStart: requested.type,
      onSuccess: received.type,
      onError: failed.type,
    })
  );

export const addMedication =
  (medication: IMedication): AppThunk =>
  (dispatch) =>
    dispatch(
      dbRequestBegin({
        type: RequestType.AddMedication,
        data: medication,
        onStart: requested.type,
        onSuccess: added.type,
        onError: failed.type,
      })
    );

export const saveMedication =
  (medication: IMedication): AppThunk =>
  (dispatch) =>
    dispatch(
      dbRequestBegin({
        type: RequestType.UpdateMedication,
        data: medication,
        onStart: requested.type,
        onSuccess: updated.type,
        onError: failed.type,
      })
    );

export const deleteMedication =
  (medicationId: number): AppThunk =>
  (dispatch) =>
    dispatch(
      dbRequestBegin({
        type: RequestType.DeleteMedication,
        data: medicationId,
        onStart: requested.type,
        onSuccess: deleted.type,
        onError: failed.type,
      })
    );

// Export reducer
export default medicationSlice.reducer;
