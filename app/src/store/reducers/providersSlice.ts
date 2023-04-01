import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RequestType } from "../../models/enums/requestType";
import { IProvider } from "../../models/IProvider";
import { dbRequestBegin } from "../../middleware/databaseActions";
import { AppThunk, RootState } from "../store";

interface ProvidersState {
  list: Array<IProvider>;
  isLoading: boolean;
}

const initialState: ProvidersState = {
  list: new Array<IProvider>(),
  isLoading: false,
};

const providersSlice = createSlice({
  name: "providers",
  initialState,
  reducers: {
    requested: (providers) => {
      providers.isLoading = true;
    },
    received: (providers, action: PayloadAction<Array<IProvider>>) => {
      providers.isLoading = false;
      if (action.payload) providers.list = action.payload;
    },
    failed: (providers) => {
      providers.isLoading = false;
    },
    added: (providers) => {
      providers.isLoading = false;
    },
    deleted: (providers) => {
      providers.isLoading = false;
    },
    updated: (providers) => {
      providers.isLoading = false;
    },
  },
});

// Actions
const { requested, received, failed, added, updated, deleted } =
  providersSlice.actions;

// Selectors
export const getProviders = (state: RootState): Array<IProvider> =>
  state.providers.list;

// Thunks
export const loadProviders: AppThunk = (dispatch) =>
  dispatch(
    dbRequestBegin({
      type: RequestType.GetProviders,
      onStart: requested.type,
      onSuccess: received.type,
      onError: failed.type,
    })
  );

export const addProvider =
  (provider: IProvider): AppThunk =>
  (dispatch) =>
    dispatch(
      dbRequestBegin({
        type: RequestType.AddProvider,
        data: provider,
        onStart: requested.type,
        onSuccess: added.type,
        onError: failed.type,
      })
    );

export const saveProvider =
  (provider: IProvider): AppThunk =>
  (dispatch) =>
    dispatch(
      dbRequestBegin({
        type: RequestType.UpdateProvider,
        data: provider,
        onStart: requested.type,
        onSuccess: updated.type,
        onError: failed.type,
      })
    );

export const deleteProvider =
  (providerId: number): AppThunk =>
  (dispatch) =>
    dispatch(
      dbRequestBegin({
        type: RequestType.DeleteProvider,
        data: providerId,
        onStart: requested.type,
        onSuccess: deleted.type,
        onError: failed.type,
      })
    );

// Export reducer
export default providersSlice.reducer;
