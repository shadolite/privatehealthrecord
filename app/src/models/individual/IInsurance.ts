export interface IInsurance {
  id: number;
  individualId: number;
  memberId: string;
  groupId: string;
  binId: string;
  deductible?: number;
  deductibleMet: boolean;
  providerId: number;
  notes: string;
  isActive: boolean;
}
