import { IProvider } from "../IProvider";

export interface IVisit {
  id?: number;
  provider: IProvider;
  date: Date;
  notes: string;
}
