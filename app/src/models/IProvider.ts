export interface IProvider {
  id?: number;
  // Provider either has to have a personal (given or family) name, or a group name. Both cannot be empty.
  givenName?: string;
  familyName?: string;
  groupName?: string;
  type?: string;
  website?: string;
  address?: string;
  phoneNumber?: number;
  notes?: string;
}
