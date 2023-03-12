import * as actions from "./databaseActions";
import { Middleware } from "redux";
import { RootState } from "../store/store";
import { isEmptyOrWhiteSpace } from "../../utilities/stringHelper";
import { database } from "../../database/database";

const databaseAPI: Middleware<{}, RootState> =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.dbRequestBegin.type) return next(action);

    const { type, data, customPayload, onStart, onSuccess, onError } =
      action.payload;

    if (!isEmptyOrWhiteSpace(onStart))
      dispatch({ type: onStart, payload: customPayload });

    next(action);

    try {
      const response = await database.request(type, data);
      // General
      dispatch(actions.dbRequestSuccess(response));
      // Specific
      if (!isEmptyOrWhiteSpace(onSuccess))
        dispatch({ type: onSuccess, payload: response });
    } catch (error: any) {
      // Handle 401 and 404 error codes
      if (error?.response?.status != undefined)
        switch (error.response.status) {
          case 401:
            break;
          case 404:
            break;
        }

      // General
      dispatch(actions.dbRequestFailed(error.message));
      // Specific
      if (!isEmptyOrWhiteSpace(onError))
        dispatch({ type: onError, payload: error.message });
    }
  };

export default databaseAPI;
