import * as React from "react";
import {
  FormControl,
  FormGroup,
  FormLabel,
  InputAdornment,
  TextField,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import * as ConversionHelper from "../../../../utilities/conversionHelper";

interface Props {
  centimeters: string | number;
  setCentimeters: (value: string | number) => void;
  kilograms: string | number;
  setKilograms: (value: string | number) => void;
}

const MeasurementFormControl: React.FunctionComponent<Props> = ({
  centimeters,
  setCentimeters,
  kilograms,
  setKilograms,
}): JSX.Element => {
  const [measurementType, setMeasurementType] = React.useState("metric");

  // Imperial measurement values
  // Height
  const [feet, setFeet] = React.useState(
    centimeters == ""
      ? ""
      : ConversionHelper.getImperialHeight(Number(centimeters)).feet
  );
  const [inches, setInches] = React.useState(
    centimeters == ""
      ? ""
      : ConversionHelper.getImperialHeight(Number(centimeters)).inches
  );
  // Weight
  const [pounds, setPounds] = React.useState(
    kilograms == "" ? "" : ConversionHelper.getImperialWeight(Number(kilograms))
  );

  // Measurement type selection handler
  const handleMeasurementType = (event: any, newMeasurement: string) => {
    setMeasurementType(newMeasurement);
  };

  // Imperial measurement handlers
  // Height
  const handleImperialHeightConversion = (event: any) => {
    if (centimeters == "") {
      setFeet("");
      setInches("");
    } else {
      let height = ConversionHelper.getImperialHeight(Number(centimeters));
      setFeet(height.feet);
      setInches(height.inches);
    }
  };
  const handleFeet = (event: any) => {
    setFeet(event.target.value);
  };
  const handleInches = (event: any) => {
    setInches(event.target.value);
  };
  // Weight
  const handleImperialWeightConversion = (event: any) => {
    if (kilograms == "") setPounds(kilograms);
    else setPounds(ConversionHelper.getImperialWeight(Number(kilograms)));
  };
  const handlePounds = (event: any) => {
    setPounds(event.target.value);
  };

  // Metric measurement handlers
  // Height
  const handleMetricHeightConversion = (event: any) => {
    if (feet == "" && inches == "") setCentimeters("");
    else
      setCentimeters(
        ConversionHelper.getMetricHeight(Number(feet), Number(inches))
      );
  };
  const handleCentimeters = (event: any) => {
    setCentimeters(event.target.value);
  };
  // Weight
  const handleMetricWeightConversion = (event: any) => {
    if (pounds == "") setKilograms("");
    else setKilograms(ConversionHelper.getMetricWeight(Number(pounds)));
  };
  const handleKilograms = (event: any) => {
    setKilograms(event.target.value);
  };

  return (
    <React.Fragment>
      {
        // Measurement type toggle
      }
      <ToggleButtonGroup
        value={measurementType}
        exclusive
        onChange={handleMeasurementType}
        aria-label="text alignment">
        <ToggleButton value="metric" aria-label="metric height">
          Metric
        </ToggleButton>
        <ToggleButton value="imperial" aria-label="imperial height">
          Imperial
        </ToggleButton>
      </ToggleButtonGroup>

      <FormControl component="fieldset">
        {measurementType == "metric" ? (
          // Metric fields
          <FormGroup row>
            <TextField
              id="centimeters"
              label="Height"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              }}
              value={centimeters}
              onChange={handleCentimeters}
              onBlur={handleImperialHeightConversion}
            />
            <TextField
              id="kilograms"
              label="Weight"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">kg</InputAdornment>
                ),
              }}
              value={kilograms}
              onChange={handleKilograms}
              onBlur={handleImperialWeightConversion}
            />
          </FormGroup>
        ) : (
          // Imperial fields
          <React.Fragment>
            <FormLabel component="legend">Height</FormLabel>
            <FormGroup row>
              <TextField
                id="feet"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">ft</InputAdornment>
                  ),
                }}
                value={feet}
                onChange={handleFeet}
                onBlur={handleMetricHeightConversion}
              />
              <TextField
                id="inches"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">in</InputAdornment>
                  ),
                }}
                value={inches}
                onChange={handleInches}
                onBlur={handleMetricHeightConversion}
              />
            </FormGroup>
            <FormGroup row>
              <TextField
                id="pounds"
                label="Weight"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">lb</InputAdornment>
                  ),
                }}
                value={pounds}
                onChange={handlePounds}
                onBlur={handleMetricWeightConversion}
              />
            </FormGroup>
          </React.Fragment>
        )}
      </FormControl>
    </React.Fragment>
  );
};

export default MeasurementFormControl;
