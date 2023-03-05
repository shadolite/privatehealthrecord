import { IProvider } from "../IProvider";
import { IDiagnosis } from "./IDiagnosis";

export interface IDetails {
  id?: number;
  givenName: string;
  familyName?: string;
  birthdate?: Date;
  height?: number;
  weight?: number;
  bloodType?: string;
  address?: string;
  phoneNumber?: string;
  diagnoses?: Array<IDiagnosis>;
  providers?: Array<IProvider>;
  notes?: string;
}

export const getFullName = (details: IDetails) => {
  if (details.familyName !== undefined)
    return `${details.givenName} ${details.familyName}`;
  else return details.givenName;
};
