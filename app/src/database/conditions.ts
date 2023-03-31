import { ICondition } from "../models/ICondition";
import { PHRDatabase } from "./database";

export const getAll = async (database: PHRDatabase) => {
  return await database.condition.toArray();
};

export const add = async (database: PHRDatabase, condition: ICondition) => {
  return await database.condition.add(condition);
};

export const update = async (database: PHRDatabase, condition: ICondition) => {
  return await database.condition.update(condition.id as number, condition);
};

export const deleteCondition = async (database: PHRDatabase, id: number) => {
  return await database.condition.delete(id);
};
