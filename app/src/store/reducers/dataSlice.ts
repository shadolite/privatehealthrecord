import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RequestType } from "../../models/enums/requestType";
import { dbRequestBegin } from "../../middleware/databaseActions";
import { AppThunk, RootState } from "../store";

interface DataState {}

const initialState: DataState = {};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    requested: (data) => {},
    failed: (data) => {},
    deleted: (data) => {},
  },
});

// Actions
const { requested, failed, deleted } = dataSlice.actions;

// Thunks
export const deleteDatabase: AppThunk = (dispatch) =>
  dispatch(
    dbRequestBegin({
      type: RequestType.DeleteDatabase,
      onStart: requested.type,
      onSuccess: deleted.type,
      onError: failed.type,
    })
  );

// Export reducer
export default dataSlice.reducer;
