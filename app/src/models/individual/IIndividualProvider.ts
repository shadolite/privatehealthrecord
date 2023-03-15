import { IProvider } from "../IProvider";

export interface IIndividualProvider {
  id?: number;
  individualId: number;
  provider: IProvider;
  firstVisitDate?: Date;
  notes?: string;
}
