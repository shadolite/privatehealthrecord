import { IInsurance } from "../../app/src/models/individual/IInsurance";

export const mockInsurance = {
  id: 0,
  individualId: 1,
  memberId: "f22586401",
  groupId: "Wehner",
  binId: "712",
  deductible: 8000,
  deductibleMet: false,
  providerId: 1,
  notes: "No comment",
  isActive: true,
} as IInsurance;
