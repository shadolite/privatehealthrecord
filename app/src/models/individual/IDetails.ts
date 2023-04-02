import { isEmptyOrWhiteSpace } from "../../utilities/stringHelper";

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
  notes?: string;
}

export const getFullName = (details: IDetails) => {
  if (!isEmptyOrWhiteSpace(details.familyName))
    return `${details.givenName} ${details.familyName}`;
  else return details.givenName;
};
