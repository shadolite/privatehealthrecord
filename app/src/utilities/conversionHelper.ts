interface IHeightImperial {
  feet: number;
  inches: number;
}

const centimeterToFeetRate = 0.0328084;
const kilogramToPoundRate = 2.2046;

export const getMetricHeight = (feet: number, inches: number) => {
  let totalFeet = inches / 12 + feet;
  return Number((totalFeet / centimeterToFeetRate).toFixed(0));
};

export const getImperialHeight = (centimeters: number) => {
  let cmToFt = centimeters * centimeterToFeetRate;
  let feet = Math.floor(cmToFt);
  let inches = Number((cmToFt % 12).toFixed(0));

  return { feet, inches } as IHeightImperial;
};

export const getMetricWeight = (pounds: number) => {
  return Number((pounds / kilogramToPoundRate).toFixed(2));
};

export const getImperialWeight = (kilograms: number) => {
  return Number((kilograms * kilogramToPoundRate).toFixed(2));
};
