export interface IIndividualProvider {
  id?: number;
  individualId: number;
  providerId: number;
  type: string;
  firstVisitDate?: Date;
  notes?: string;
  isActive: boolean;
}
