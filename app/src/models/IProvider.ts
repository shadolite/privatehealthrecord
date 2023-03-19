export interface IProvider {
  id?: number;
  // Provider either has to have a personal (given or family) name, or a group name. Both cannot be empty.
  givenName?: string;
  familyName?: string;
  groupName?: string;
  type?: string;
  website?: string;
  address?: string;
  phoneNumber?: string;
  notes?: string;
}

export const getProviderName = (provider: IProvider): string => {
  return `${provider.givenName ? provider.givenName : ""}${
    provider.givenName && provider.familyName ? " " : ""
  }${provider.familyName ? provider.familyName : ""}${
    (provider.givenName || provider.familyName) && provider.groupName ? "(" : ""
  }${provider.groupName ? provider.groupName : ""}${
    (provider.givenName || provider.familyName) && provider.groupName ? ")" : ""
  }`;
};
