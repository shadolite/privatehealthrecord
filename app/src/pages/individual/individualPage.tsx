import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import * as IndividualData from '../../redux/components/individual/individualSlice';
import DetailsItem from './details';

const IndividualPage: React.FunctionComponent = (): JSX.Element => {

  const details = useSelector(IndividualData.getPersonalInformation);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(IndividualData.loadDefaultIndividual);
  }, []);

  return (
    <React.Fragment>
      <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
          <DetailsItem details={details}></DetailsItem>
        </Stack>
      </Box>
    </React.Fragment>
  );
};

export default IndividualPage;