import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RequestType } from "../../models/enums/requestType";
import { ICondition } from "../../models/ICondition";
import { dbRequestBegin } from "../../middleware/databaseActions";
import { AppThunk, RootState } from "../store";

interface ConditionsState {
  list: Array<ICondition>;
  isLoading: boolean;
}

const initialState: ConditionsState = {
  list: new Array<ICondition>(),
  isLoading: false,
};

const conditionsSlice = createSlice({
  name: "conditions",
  initialState,
  reducers: {
    requested: (conditions) => {
      conditions.isLoading = true;
    },
    received: (conditions, action: PayloadAction<Array<ICondition>>) => {
      conditions.isLoading = false;
      if (action.payload) conditions.list = action.payload;
    },
    failed: (conditions) => {
      conditions.isLoading = false;
    },
    added: (conditions) => {
      conditions.isLoading = false;
    },
    deleted: (conditions) => {
      conditions.isLoading = false;
    },
    updated: (conditions) => {
      conditions.isLoading = false;
    },
  },
});

// Actions
const { requested, received, failed, added, updated, deleted } =
  conditionsSlice.actions;

// Selectors
export const getConditions = (state: RootState): Array<ICondition> =>
  state.conditions.list;

// Thunks
export const loadConditions: AppThunk = (dispatch) =>
  dispatch(
    dbRequestBegin({
      type: RequestType.GetConditions,
      onStart: requested.type,
      onSuccess: received.type,
      onError: failed.type,
    })
  );

export const addCondition =
  (condition: ICondition): AppThunk =>
  (dispatch) =>
    dispatch(
      dbRequestBegin({
        type: RequestType.AddCondition,
        data: condition,
        onStart: requested.type,
        onSuccess: added.type,
        onError: failed.type,
      })
    );

export const saveCondition =
  (condition: ICondition): AppThunk =>
  (dispatch) =>
    dispatch(
      dbRequestBegin({
        type: RequestType.UpdateCondition,
        data: condition,
        onStart: requested.type,
        onSuccess: updated.type,
        onError: failed.type,
      })
    );

export const deleteCondition =
  (conditionId: number): AppThunk =>
  (dispatch) =>
    dispatch(
      dbRequestBegin({
        type: RequestType.DeleteCondition,
        data: conditionId,
        onStart: requested.type,
        onSuccess: deleted.type,
        onError: failed.type,
      })
    );

// Export reducer
export default conditionsSlice.reducer;
