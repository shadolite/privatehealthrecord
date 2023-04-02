export interface ITreatment {
  id: number;
  individualId: number;
  // If there is no medication id, there must be a description
  medicationId?: number;
  description?: string;
  dosage?: string;
  frequency?: string;
  startOn?: Date;
  refillOn?: Date;
  endOn?: Date;
  prescribedById?: number;
  notes?: string;
  diagnosisIds: Array<number>;
}
