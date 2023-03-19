import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createHashHistory } from "history";
import { createReduxHistoryContext } from "redux-first-history";
import individualReducer from "./reducers/individualSlice";
import databaseAPI from "../middleware/databaseMiddleware";

const { routerMiddleware, createReduxHistory, routerReducer } =
  createReduxHistoryContext({
    history: createHashHistory(),
  });

const reducer = {
  individual: individualReducer,
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
