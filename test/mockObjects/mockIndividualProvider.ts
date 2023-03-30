import { IIndividualProvider } from "../../app/src/models/individual/IIndividualProvider";

export const mockIndividualProviders = [
  {
    id: 1,
    individualId: 1,
    providerId: 1,
    notes: "Ends on January 1",
    isActive: true,
  } as IIndividualProvider,
  {
    id: 2,
    individualId: 1,
    providerId: 2,
    firstVisitDate: new Date(),
    notes: "I think there might be confusion about the guidelines",
    isActive: true,
  } as IIndividualProvider,
  {
    id: 3,
    individualId: 1,
    providerId: 3,
    isActive: true,
  } as IIndividualProvider,
  {
    id: 4,
    individualId: 1,
    providerId: 4,
    isActive: false,
  } as IIndividualProvider,
  {
    id: 5,
    individualId: 1,
    providerId: 4,
    notes: "Mostly Individual",
    isActive: true,
  } as IIndividualProvider,
  {
    id: 6,
    individualId: 1,
    providerId: 6,
    isActive: true,
  } as IIndividualProvider,
];
