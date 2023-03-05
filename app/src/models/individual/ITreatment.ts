import { IMedication } from "../IMedication";
import { IProvider } from "../IProvider";

export interface ITreatment {
  id: number;
  medication?: IMedication;
  description?: string;
  frequency?: string;
  dosage?: string;
  startOn: Date;
  refillOn?: Date;
  endOn?: Date;
  prescribedBy?: IProvider;
  notes?: string;
}
