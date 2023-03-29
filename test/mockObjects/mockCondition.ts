import { ICondition } from "../../app/src/models/ICondition";

export const mockConditions = [
  {
    id: 1,
    name: "Congenital heart disease",
    notes:
      "https://www.mayoclinic.org/diseases-conditions/adult-congenital-heart-disease/symptoms-causes/syc-20355456",
  } as ICondition,
  {
    id: 2,
    name: "ADHD",
    description: "Attention Deficit Hyperactivity Disorder",
    notes: "add.org/adhd-facts/",
  } as ICondition,
  {
    id: 3,
    name: "Anxiety",
    description:
      "Experiencing occasional anxiety is a normal part of life. However, people with anxiety disorders frequently have intense, excessive and persistent worry and fear about everyday situations. Often, anxiety disorders involve repeated episodes of sudden feelings of intense anxiety and fear or terror that reach a peak within minutes (panic attacks).",
    notes:
      "https://www.mayoclinic.org/diseases-conditions/anxiety/symptoms-causes/syc-20350961",
  } as ICondition,
  {
    id: 4,
    name: "Coeliac disease",
    description:
      "Celiac disease, sometimes called celiac sprue or gluten-sensitive enteropathy, is an immune reaction to eating gluten, a protein found in wheat, barley and rye.",
  } as ICondition,
  {
    id: 5,
    name: "Kidney stones",
    notes:
      "https://www.mayoclinic.org/diseases-conditions/kidney-stones/symptoms-causes/syc-20355755",
  } as ICondition,
];
