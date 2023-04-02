import { IProvider } from "../models/IProvider";
import { PHRDatabase } from "./database";

export const getAll = async (database: PHRDatabase) => {
  return await database.providers.toArray();
};

export const add = async (database: PHRDatabase, provider: IProvider) => {
  return await database.providers.add(provider);
};

export const update = async (database: PHRDatabase, provider: IProvider) => {
  return await database.providers.update(provider.id as number, provider);
};

export const remove = async (database: PHRDatabase, id: number) => {
  return await database.providers.delete(id);
};
