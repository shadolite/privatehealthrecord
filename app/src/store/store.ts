import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createHashHistory } from "history";
import { createReduxHistoryContext } from "redux-first-history";
import dataReducer from "./reducers/dataSlice";
import individualReducer from "./reducers/individualSlice";
import conditionsReducer from "./reducers/conditionsSlice";
import medicationReducer from "./reducers/medicationSlice";
import databaseAPI from "../middleware/databaseMiddleware";

const { routerMiddleware, createReduxHistory, routerReducer } =
  createReduxHistoryContext({
    history: createHashHistory(),
  });

const reducer = {
  data: dataReducer,
  individual: individualReducer,
  conditions: conditionsReducer,
  medication: medicationReducer,
  router: routerReducer,
};

export const store: any = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["db/requestBegin"],
        ignoredActionPaths: ["payload.birthdate"],
        ignoredPaths: ["individual.details.birthdate"],
      },
    }).concat(databaseAPI),
    routerMiddleware,
  ],
});

export const history = createReduxHistory(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
