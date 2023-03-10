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
import * as ConversionHelper from "../../../utilities/conversionHelper";

interface Props {
  centimeters?: number;
  kilograms?: number;
}

const MeasurementFormControl: React.FunctionComponent<Props> = (
  props: Props
): JSX.Element => {
  const [measurementType, setMeasurementType] = React.useState<string | null>(
    "metric"
  );

  // Imperial measurement values
  // Height
  const [feet, setFeet] = React.useState<number | undefined>(
    ConversionHelper.getImperialHeight(props.centimeters)?.feet
  );
  const [inches, setInches] = React.useState<number | undefined>(
    ConversionHelper.getImperialHeight(props.centimeters)?.inches
  );
  // Weight
  const [pounds, setPounds] = React.useState<number | undefined>(
    ConversionHelper.getImperialWeight(props.kilograms)?.pounds
  );
  const [ounces, setOunces] = React.useState<number | undefined>(
    ConversionHelper.getImperialWeight(props.kilograms)?.ounces
  );

  // Measurement type selection handler
  const handleMeasurementType = (
    event: React.MouseEvent<HTMLElement>,
    newMeasurement: string | null
  ) => {
    setMeasurementType(newMeasurement);
  };

  // Imperial measurement handlers
  // Height
  const handleFeet = (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFeet(Number(event.target.value));
    props.centimeters = ConversionHelper.getMetricHeight(feet, inches);
  };
  const handleInches = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInches(Number(event.target.value));
    props.centimeters = ConversionHelper.getMetricHeight(feet, inches);
  };
  // Weight
  const handlePounds = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPounds(Number(event.target.value));
    props.kilograms = ConversionHelper.getMetricWeight(pounds, ounces);
  };
  const handleOunces = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setOunces(Number(event.target.value));
    props.kilograms = ConversionHelper.getMetricWeight(pounds, ounces);
  };

  // Metric measurement handlers
  // Height
  const handleCentimeters = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let imperialHeight = ConversionHelper.getImperialHeight(
      Number(event.target.value)
    );
    setFeet(imperialHeight?.feet);
    setInches(imperialHeight?.inches);
  };
  // Weight
  const handleKilograms = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let imperialWeight = ConversionHelper.getImperialWeight(
      Number(event.target.value)
    );
    setPounds(imperialWeight?.pounds);
    setOunces(imperialWeight?.ounces);
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

      <div />
      <FormControl component="fieldset">
        {measurementType == "metric" ? (
          // Metric fields
          <React.Fragment>
            <TextField
              id="centimeters"
              label="Height"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
              }}
              value={props.centimeters}
              onBlur={handleCentimeters}
            />
            <TextField
              id="kilograms"
              label="Weight"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">kg</InputAdornment>
                ),
              }}
              value={props.kilograms}
              onBlur={handleKilograms}
            />
          </React.Fragment>
        ) : (
          // Imperial fields
          <React.Fragment>
            <FormLabel component="legend">Height</FormLabel>
            <FormGroup row>
              <TextField
                id="feet"
                type="number"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">ft</InputAdornment>
                  ),
                }}
                value={feet}
                onBlur={handleFeet}
              />
              <TextField
                id="inches"
                type="number"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">in</InputAdornment>
                  ),
                }}
                value={inches}
                onBlur={handleInches}
              />
            </FormGroup>
            <FormLabel component="label">Weight</FormLabel>
            <FormGroup row>
              <TextField
                id="pounds"
                type="number"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">lb</InputAdornment>
                  ),
                }}
                value={pounds}
                onBlur={handlePounds}
              />
              <TextField
                id="ounces"
                type="number"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">oz</InputAdornment>
                  ),
                }}
                value={ounces}
                onBlur={handleOunces}
              />
            </FormGroup>
          </React.Fragment>
        )}
      </FormControl>
    </React.Fragment>
  );
};

export default MeasurementFormControl;
