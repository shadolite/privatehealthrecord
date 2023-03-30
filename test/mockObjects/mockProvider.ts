import { IProvider } from "../../app/src/models/IProvider";

// Provider either has to have a personal (given or family) name, or a group name. Both cannot be empty.
export const invalidMockProvider = {
  id: 0,
  type: "hospital",
  website:
    "https://hospital.com/specialties/emergency-care?location=new-garfield-hospital",
  address: "0740 Zemlak Fall, Suite 942, New Garfield, Mississippi 59236-3490",
  phoneNumber: "505-811-4800",
} as IProvider;

export const mockProviders = [
  {
    id: 1,
    groupName: "Herzog LLC",
    type: "insurance",
    website: "herzog.com",
  } as IProvider,
  {
    id: 2,
    givenName: "Luke",
    familyName: "Shanahan",
    groupName: "Haley Group",
    type: "Primary Care Physician",
    website: "https://www.haleygroup.org/family-medicine",
    address: "8904 Prosacco Drives, ste 354, South D'angelo, Iowa 60833-8661",
    phoneNumber: "208-923-8562",
    notes: "Specialty: Family Medicine",
  } as IProvider,
  {
    id: 3,
    givenName: "Osbaldo",
    familyName: "Pasquale",
    groupName: "Pasquale Women's Health",
    type: "OBGYN",
    website: "https://pasqualewomenshealth.com/",
    address: "270 Osbaldo Corner, Suite 984, Terryfurt, Wisconsin 55993-2712",
    phoneNumber: "505-623-5593",
    notes: "Also operates Pasquale Women's Health & Asthetics",
  } as IProvider,
  {
    id: 4,
    givenName: "Marek",
    familyName: "Kimmel",
    groupName: "Larson Inc",
    type: "Therapist",
  } as IProvider,
  {
    id: 5,
    givenName: "Keisha",
    familyName: "Weiland",
    groupName: "Larson Inc",
    type: "Therapist",
  } as IProvider,
  {
    id: 6,
    groupName: "Heathcote",
    type: "Ugent Care",
    notes: "In-house pharmacy",
  } as IProvider,
];
