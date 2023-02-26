import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import * as Individual from '../../redux/components/individual/individualSlice';
import PersonalInformation from './personalInformation';

const Dashboard: React.FunctionComponent = (): JSX.Element => {

  const personalInfo = useSelector(Individual.getPersonalInformation);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(Individual.loadDefaultIndividual);
  }, []);

  return (
    <React.Fragment>
      <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
          <PersonalInformation personalInfo={personalInfo}></PersonalInformation>
        </Stack>
      </Box>
    </React.Fragment>
  );
};

export default Dashboard;