import i18n from "i18next";
import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import App from "./components/app";
import { history, store } from "./store/store";

const container = document.getElementById("target")!;
const root = createRoot(container);
root.render(
  <I18nextProvider i18n={i18n}>
    <Suspense fallback="loading">
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </Suspense>
  </I18nextProvider>
);
