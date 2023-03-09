import { IDetails } from "../../models/individual/IDetails";
import { PHRDatabase } from "../database";

export const get = async (database: PHRDatabase, id: number) => {
  return await database.details.get(id);
};

export const add = async (database: PHRDatabase, details: IDetails) => {
  return await database.details.add(details);
};

export const update = async (database: PHRDatabase, details: IDetails) => {
  return await database.details.update(details.id as number, details);
};

export const deleteDetails = async (database: PHRDatabase, id: number) => {
  return await database.details.delete(id);
};
