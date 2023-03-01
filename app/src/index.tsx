import React, { Suspense } from "react";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { createRoot } from "react-dom/client";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import App from "./core/app";
import { store, history } from "./redux/store/store";

const container = document.getElementById("target")!;
const root = createRoot(container);
root.render(
  <I18nextProvider i18n={i18n}>
    <Suspense fallback="loading">
      <App store={store} history={history}></App>
    </Suspense>
  </I18nextProvider>
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
