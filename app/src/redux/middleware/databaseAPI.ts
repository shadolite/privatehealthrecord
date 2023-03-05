import * as actions from "./apiActions";
import { Middleware } from "redux";
import { RootState } from "../store/store";
import { isEmptyOrWhiteSpace } from "../../utilities/stringHelper";

const databaseAPI: Middleware<{}, RootState> =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegin.type) return next(action);

    const { url, method, data, customPayload, onStart, onSuccess, onError } =
      action.payload;

    if (!isEmptyOrWhiteSpace(onStart))
      dispatch({ type: onStart, payload: customPayload });

    next(action);

    try {
      // const response = await dbService.request({ url, method, data });
      // // General
      // dispatch(actions.apiCallSuccess(response.data));
      // // Specific
      // if (!isEmptyOrWhiteSpace(onSuccess))
      //   dispatch({ type: onSuccess, payload: response.data });
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
      dispatch(actions.apiCallFailed(error.message));
      // Specific
      if (!isEmptyOrWhiteSpace(onError))
        dispatch({ type: onError, payload: error.response.data });
    }
  };

export default databaseAPI;
