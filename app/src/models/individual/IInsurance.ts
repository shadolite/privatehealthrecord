import { IProvider } from "../IProvider";

export interface IInsurance {
  id?: number;
  memberId?: string;
  groupId?: string;
  binId?: string;
  deductible: number;
  deductibleMet?: boolean;
  provider?: IProvider;
  notes?: string;
}
