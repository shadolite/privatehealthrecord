import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createHashHistory } from "history";
import { createReduxHistoryContext } from "redux-first-history";
import individualReducer from "../components/individual/individualSlice";

const { routerMiddleware, createReduxHistory, routerReducer } =
  createReduxHistoryContext({
    history: createHashHistory(),
  });

const reducer = combineReducers({
  individual: individualReducer,
  router: routerReducer,
});

export const store = configureStore({
  reducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    routerMiddleware,
  ],
});

export const history = createReduxHistory(store);
export type RootState = ReturnType<typeof reducer>;
