import { IMedication } from "../models/IMedication";
import { PHRDatabase } from "./database";

export const getAll = async (database: PHRDatabase) => {
  return await database.medication.toArray();
};

export const add = async (database: PHRDatabase, medication: IMedication) => {
  return await database.medication.add(medication);
};

export const update = async (
  database: PHRDatabase,
  medication: IMedication
) => {
  return await database.medication.update(medication.id as number, medication);
};

export const deleteMedication = async (database: PHRDatabase, id: number) => {
  return await database.medication.delete(id);
};
