import Dexie, { Table } from "dexie";
import { RequestType } from "../models/enums/requestType";
import { ICondition } from "../models/ICondition";
import { IDetails } from "../models/individual/IDetails";
import * as Details from "./individual/details";
import * as Conditions from "./conditions";

export class PHRDatabase extends Dexie {
  details!: Table<IDetails, number>;
  condition!: Table<ICondition, number>;

  constructor() {
    super("phr");
    this.version(1).stores({
      details: "++id",
      condition: "++id",
    });
  }

  request(type: RequestType, data: any) {
    return requestFunction[type](this, data);
  }
}

export const database = new PHRDatabase();

const requestFunction: EnumDictionary<RequestType, Function> = {
  [RequestType.GetDetails]: Details.get,
  [RequestType.AddDetails]: Details.add,
  [RequestType.UpdateDetails]: Details.update,
  [RequestType.DeleteDetails]: Details.deleteDetails,
  [RequestType.GetConditions]: Conditions.get,
  [RequestType.AddCondition]: Conditions.add,
  [RequestType.UpdateCondition]: Conditions.update,
  [RequestType.DeleteCondition]: Conditions.deleteCondition,
};

type EnumDictionary<T extends string | symbol | number, U> = {
  [K in T]: U;
};
