import Dexie, { Table } from "dexie";
import { RequestType } from "../models/enums/requestType";
import { ICondition } from "../models/ICondition";
import { IDetail } from "../models/individual/IDetail";
import * as Detail from "./individual/detail";
import * as Condition from "./condition";
import * as Medication from "./medication";
import * as Provider from "./provider";
import { IMedication } from "../models/IMedication";
import { IProvider } from "../models/IProvider";

export class PHRDatabase extends Dexie {
  detail!: Table<IDetail, number>;
  condition!: Table<ICondition, number>;
  medication!: Table<IMedication, number>;
  provider!: Table<IProvider, number>;

  constructor() {
    super("phr");
    this.version(1).stores({
      details: "++id",
      condition: "++id",
      medication: "++id",
      provider: "++id",
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
  [RequestType.GetDetail]: Detail.get,
  [RequestType.AddDetail]: Detail.add,
  [RequestType.UpdateDetail]: Detail.update,
  [RequestType.DeleteDetail]: Detail.deleteDetail,
  [RequestType.GetConditions]: Condition.getAll,
  [RequestType.AddCondition]: Condition.add,
  [RequestType.UpdateCondition]: Condition.update,
  [RequestType.DeleteCondition]: Condition.deleteCondition,
  [RequestType.GetMedications]: Medication.getAll,
  [RequestType.AddMedication]: Medication.add,
  [RequestType.UpdateMedication]: Medication.update,
  [RequestType.DeleteMedication]: Medication.deleteMedication,
  [RequestType.DeleteDatabase]: resetDatabase,
  [RequestType.GetProviders]: Provider.getAll,
  [RequestType.AddProvider]: Provider.add,
  [RequestType.UpdateProvider]: Provider.update,
  [RequestType.DeleteProvider]: Provider.deleteProvider,
};

type EnumDictionary<T extends string | symbol | number, U> = {
  [K in T]: U;
};
