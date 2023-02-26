import React, { FunctionComponent, useEffect, useState, Suspense } from "react";
import { AnyAction } from "@reduxjs/toolkit";
import { ThunkAction } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import i18n from "i18next"
import { I18nextProvider } from "react-i18next";
import Root from "./core/root";
import { store, history } from "./redux/store/store";
import "bulma/css/bulma.css";

const container = document.getElementById("target")!;
const root = createRoot(container);
root.render(
  <I18nextProvider i18n={i18n}>
    <Suspense fallback="loading">
      <Root store={store} history={history}></Root>
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