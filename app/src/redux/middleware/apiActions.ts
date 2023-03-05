import { createAction } from "@reduxjs/toolkit";

export interface IAPIRequest {
  url: string;
  method?: string;
  data?: unknown;
  customPayload?: unknown;
  onStart?: string;
  onSuccess?: string;
  onError?: string;
}

export const apiCallBegin = createAction<IAPIRequest>("db/callBegin");
export const apiCallSuccess = createAction<unknown>("db/callSuccess");
export const apiCallFailed = createAction<Error>("api/callFailed");
