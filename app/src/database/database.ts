import Dexie, { Table } from "dexie";
import { RequestType } from "../models/enums/requestType";
import { ICondition } from "../models/ICondition";
import { IDetails } from "../models/individual/IDetails";
import * as Details from "./individual/details";
import * as Conditions from "./conditions";
import * as Medication from "./medication";
import * as Providers from "./providers";
import { IMedication } from "../models/IMedication";
import { IProvider } from "../models/IProvider";

export class PHRDatabase extends Dexie {
  details!: Table<IDetails, number>;
  conditions!: Table<ICondition, number>;
  medication!: Table<IMedication, number>;
  providers!: Table<IProvider, number>;

  constructor() {
    super("phr");
    this.version(1).stores({
      details: "++id",
      conditions: "++id",
      medication: "++id",
      providers: "++id",
    });
  }

  request(type: RequestType, data: any) {
    return requestFunction[type](this, data);
  }
}

export const database = new PHRDatabase();

const resetDatabase = async (db: PHRDatabase, data: any) => {
  return await db.delete();
};

const requestFunction: EnumDictionary<RequestType, Function> = {
  [RequestType.GetDetails]: Details.get,
  [RequestType.AddDetail]: Details.add,
  [RequestType.UpdateDetail]: Details.update,
  [RequestType.DeleteDetail]: Details.deleteDetail,
  [RequestType.GetConditions]: Conditions.getAll,
  [RequestType.AddCondition]: Conditions.add,
  [RequestType.UpdateCondition]: Conditions.update,
  [RequestType.DeleteCondition]: Conditions.remove,
  [RequestType.GetAllMedication]: Medication.getAll,
  [RequestType.AddMedication]: Medication.add,
  [RequestType.UpdateMedication]: Medication.update,
  [RequestType.DeleteMedication]: Medication.remove,
  [RequestType.GetProviders]: Providers.getAll,
  [RequestType.AddProvider]: Providers.add,
  [RequestType.UpdateProvider]: Providers.update,
  [RequestType.DeleteProvider]: Providers.remove,
  [RequestType.DeleteDatabase]: resetDatabase,
};

type EnumDictionary<T extends string | symbol | number, U> = {
  [K in T]: U;
};
