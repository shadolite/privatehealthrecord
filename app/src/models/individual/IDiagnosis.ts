export interface IDiagnosis {
  id: number;
  individualId: number;
  conditionId: number;
  onset?: Date;
  isActive: boolean;
  diagnosedById?: number;
  notes: string;
}
