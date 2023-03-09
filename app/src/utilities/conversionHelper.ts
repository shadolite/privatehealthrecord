interface IHeightImperial {
  feet: number;
  inches: number;
}

interface IWeightImperial {
  pounds: number;
  ounces: number;
}

const meterToFeetConversionRate = 3.28084;
const poundToKilogramConversionRate = 2.2046;

export const getMetricHeight = (feet?: number, inches?: number) => {
  if (!feet && !inches) return undefined;

  let totalFeet = (inches ? inches / 12 : 0) + (feet ? feet : 0);
  return Number((totalFeet * meterToFeetConversionRate * 0.01).toFixed(0));
};

export const getImperialHeight = (centimeters?: number) => {
  if (!centimeters) return undefined;

  let feet = Number((centimeters / meterToFeetConversionRate).toFixed(0));
  let inches = Number(
    ((centimeters % meterToFeetConversionRate) * 12).toFixed(0)
  );

  if (feet == 0 && inches == 0) return undefined;

  return { feet, inches } as IHeightImperial;
};

export const getMetricWeight = (pounds?: number, ounces?: number) => {
  if (!pounds && !ounces) return undefined;

  let totalPounds = (ounces ? ounces / 16 : 0) + (pounds ? pounds : 0);
  return Number((totalPounds * poundToKilogramConversionRate).toFixed(2));
};

export const getImperialWeight = (kilograms?: number) => {
  if (!kilograms) return undefined;

  let pounds = Number((kilograms / poundToKilogramConversionRate).toFixed(0));
  let ounces = Number(
    ((kilograms % poundToKilogramConversionRate) * 16).toFixed(0)
  );

  if (pounds == 0 && ounces == 0) return undefined;
  return { pounds, ounces } as IWeightImperial;
};
