import { IMedication } from "../../IMedication";
import { IProvider } from "../../IProvider";

export interface ITreatment {
  id?: number;
  individualId: number;
  // If there is no medication, there must be a description
  medication?: IMedication;
  description?: string;
  frequency?: string;
  dosage?: string;
  startOn?: Date;
  refillOn?: Date;
  endOn?: Date;
  prescribedBy?: IProvider;
  notes?: string;
}
