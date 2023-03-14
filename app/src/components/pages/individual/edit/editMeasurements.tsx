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
  centimeters: number;
  setCentimeters: (value: number) => void;
  kilograms: number;
  setKilograms: (value: number) => void;
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
    ConversionHelper.getImperialHeight(centimeters).feet
  );
  const [inches, setInches] = React.useState(
    ConversionHelper.getImperialHeight(centimeters).inches
  );
  // Weight
  const [pounds, setPounds] = React.useState(
    ConversionHelper.getImperialWeight(kilograms)
  );

  // Measurement type selection handler
  const handleMeasurementType = (event: any, newMeasurement: string) => {
    setMeasurementType(newMeasurement);
  };

  // Imperial measurement handlers
  // Height
  const handleImperialHeight = (event: any) => {
    let height = ConversionHelper.getImperialHeight(centimeters);
    setFeet(Number(height?.feet));
    setInches(Number(height?.inches));
  };
  const handleFeet = (event: any) => {
    setFeet(event.target.value);
  };
  const handleInches = (event: any) => {
    setInches(event.target.value);
  };
  // Weight
  const handleImperialWeight = (event: any) => {
    setPounds(ConversionHelper.getImperialWeight(event.target.value));
  };
  const handlePounds = (event: any) => {
    setPounds(event.target.value);
  };

  // Metric measurement handlers
  // Height
  const handleMetricHeight = (event: any) => {
    setCentimeters(ConversionHelper.getMetricHeight(feet, inches));
  };
  const handleCentimeters = (event: any) => {
    setCentimeters(event.target.value);
  };
  // Weight
  const handleMetricWeight = (event: any) => {
    setKilograms(ConversionHelper.getMetricWeight(pounds));
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
              onBlur={handleImperialHeight}
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
              onBlur={handleImperialWeight}
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
                onBlur={handleMetricHeight}
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
                onBlur={handleMetricHeight}
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
                onBlur={handleMetricWeight}
              />
            </FormGroup>
          </React.Fragment>
        )}
      </FormControl>
    </React.Fragment>
  );
};

export default MeasurementFormControl;
