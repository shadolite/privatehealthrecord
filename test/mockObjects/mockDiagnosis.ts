import { IDiagnosis } from "../../app/src/models/individual/IDiagnosis";

export const mockDiagnoses = [
  {
    id: 1,
    individualId: 1,
    conditionId: 0,
    isActive: true,
    diagnosedById: 2,
  } as IDiagnosis,
  {
    id: 2,
    individualId: 1,
    conditionId: 1,
    isActive: true,
  } as IDiagnosis,
  {
    id: 3,
    individualId: 1,
    conditionId: 3,
    isActive: true,
    notes: "I think this new service can be a good alternative in this case",
  } as IDiagnosis,
  {
    id: 4,
    individualId: 1,
    conditionId: 4,
    isActive: true,
    notes: "Not enough info",
  } as IDiagnosis,
];
