import { IVisit } from "../../app/src/models/individual/IVisit";

export const visits = [
  {
    id: 1,
    individualId: 1,
    providerId: 2,
    date: new Date("08/16/2021"),
    notes: "Urgent",
  } as IVisit,
  {
    id: 2,
    individualId: 1,
    providerId: 2,
    date: new Date("04/30/2020"),
    notes: "Will not update any information",
  } as IVisit,
  {
    id: 3,
    individualId: 1,
    providerId: 3,
    date: new Date("06/01/2019"),
    notes: "Use the current environment",
  } as IVisit,
];
