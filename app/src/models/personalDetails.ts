export interface PersonalDetails {
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

export const getFullName = (details: PersonalDetails) => {
  if (details.familyName !== undefined)
    return `${details.givenName} ${details.familyName}`;
  else return details.givenName;
};
