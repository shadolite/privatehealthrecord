import { IProvider } from "../models/IProvider";
import { PHRDatabase } from "./database";

export const getAll = async (database: PHRDatabase) => {
  return await database.provider.toArray();
};

export const add = async (database: PHRDatabase, provider: IProvider) => {
  return await database.provider.add(provider);
};

export const update = async (database: PHRDatabase, provider: IProvider) => {
  return await database.provider.update(provider.id as number, provider);
};

export const deleteProvider = async (database: PHRDatabase, id: number) => {
  return await database.provider.delete(id);
};
