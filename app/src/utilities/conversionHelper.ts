interface IHeightImperial {
  feet: number;
  inches: number;
}

interface IWeightImperial {
  pounds: number;
  ounces: number;
}

const centimeterToFeetRate = 0.0328084;
const kilogramToPoundRate = 2.2046;

export const getMetricHeight = (feet?: number, inches?: number) => {
  if (!feet && !inches) return undefined;

  let totalFeet = (inches ? inches / 12 : 0) + (feet ? feet : 0);
  return Number((totalFeet / centimeterToFeetRate).toFixed(0));
};

export const getImperialHeight = (centimeters?: number) => {
  if (!centimeters) return undefined;

  let cmToFt = centimeters * centimeterToFeetRate;
  let feet = Math.floor(cmToFt);
  let inches = Number((cmToFt % 12).toFixed(0));

  if (feet == 0 && inches == 0) return undefined;

  return { feet, inches } as IHeightImperial;
};

export const getMetricWeight = (pounds?: number, ounces?: number) => {
  if (!pounds && !ounces) return undefined;

  let totalPounds = (ounces ? ounces / 16 : 0) + (pounds ? pounds : 0);
  return Number((totalPounds / kilogramToPoundRate).toFixed(2));
};

export const getImperialWeight = (kilograms?: number) => {
  if (!kilograms) return undefined;

  let kiloToPound = kilograms * kilogramToPoundRate;
  let pounds = Math.floor(kiloToPound);
  let ounces = Number(((kiloToPound - pounds) * 16).toFixed(0));

  if (pounds == 0 && ounces == 0) return undefined;
  return { pounds, ounces } as IWeightImperial;
};
