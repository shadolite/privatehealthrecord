import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RequestType } from "../../models/enums/requestType";
import { IMedication } from "../../models/IMedication";
import { dbRequestBegin } from "../../middleware/databaseActions";
import { AppThunk, RootState } from "../store";

interface MedicationsState {
  list: Array<IMedication>;
  isLoading: boolean;
}

const initialState: MedicationsState = {
  list: new Array<IMedication>(),
  isLoading: false,
};

const medicationsSlice = createSlice({
  name: "medications",
  initialState,
  reducers: {
    requested: (medications) => {
      medications.isLoading = true;
    },
    received: (medications, action: PayloadAction<Array<IMedication>>) => {
      medications.isLoading = false;
      if (action.payload) medications.list = action.payload;
    },
    failed: (medications) => {
      medications.isLoading = false;
    },
    added: (medications) => {
      medications.isLoading = false;
    },
    deleted: (medications) => {
      medications.isLoading = false;
    },
    updated: (medications) => {
      medications.isLoading = false;
    },
  },
});

// Actions
const { requested, received, failed, added, updated, deleted } =
  medicationsSlice.actions;

// Selectors
export const getMedications = (state: RootState): Array<IMedication> =>
  state.medications.list;

// Thunks
export const loadMedications: AppThunk = (dispatch) =>
  dispatch(
    dbRequestBegin({
      type: RequestType.GetMedications,
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
export default medicationsSlice.reducer;
