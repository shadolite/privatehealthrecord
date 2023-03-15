import { IProvider } from "../IProvider";

export interface IVisit {
  id?: number;
  individualId: number;
  provider: IProvider;
  date: Date;
  notes?: string;
}
