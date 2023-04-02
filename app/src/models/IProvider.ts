import { isEmptyOrWhiteSpace } from "../utilities/stringHelper";

export interface IProvider {
  id: number;
  // Provider either has to have a personal (given or family) name, or a group name. Both cannot be empty.
  givenName: string;
  familyName: string;
  groupName: string;
  type: string;
  website: string;
  address: string;
  phoneNumber: string;
  fax: string;
  email: string;
  notes: string;
}

export const getProviderName = (provider: IProvider): string => {
  return `${provider.givenName}${
    !isEmptyOrWhiteSpace(provider.givenName) &&
    !isEmptyOrWhiteSpace(provider.familyName)
      ? " "
      : ""
  }${provider.familyName}${
    (!isEmptyOrWhiteSpace(provider.givenName) ||
      !isEmptyOrWhiteSpace(provider.familyName)) &&
    !isEmptyOrWhiteSpace(provider.groupName)
      ? "("
      : ""
  }${provider.groupName}${
    (!isEmptyOrWhiteSpace(provider.givenName) ||
      !isEmptyOrWhiteSpace(provider.familyName)) &&
    !isEmptyOrWhiteSpace(provider.groupName)
      ? ")"
      : ""
  }`;
};
