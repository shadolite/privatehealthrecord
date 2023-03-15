import { ICondition } from "../../ICondition";
import { IProvider } from "../../IProvider";
import { ITreatment } from "./ITreatment";

export interface IDiagnosis {
  id?: number;
  individualId: number;
  condition: ICondition;
  treatments: Array<ITreatment>;
  onset?: Date;
  isActive: boolean;
  diagnosedBy?: IProvider;
  notes?: string;
}
