import { ICondition } from "../models/ICondition";
import { PHRDatabase } from "./database";

export const getAll = async (database: PHRDatabase) => {
  return await database.conditions.toArray();
};

export const add = async (database: PHRDatabase, condition: ICondition) => {
  return await database.conditions.add(condition);
};

export const update = async (database: PHRDatabase, condition: ICondition) => {
  return await database.conditions.update(condition.id as number, condition);
};

export const remove = async (database: PHRDatabase, id: number) => {
  return await database.conditions.delete(id);
};
