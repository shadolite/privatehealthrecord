import { createAction } from "@reduxjs/toolkit";
import { RequestType } from "../../models/enums/requestType";

export interface IDatabaseRequest {
  type: RequestType;
  data?: unknown;
  customPayload?: unknown;
  onStart?: string;
  onSuccess?: string;
  onError?: string;
}

export const dbRequestBegin = createAction<IDatabaseRequest>("db/requestBegin");
export const dbRequestSuccess = createAction<unknown>("db/requestSuccess");
export const dbRequestFailed = createAction<Error>("db/requestFailed");
