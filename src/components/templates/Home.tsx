import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ModalWrapper from '../elements/ModalWrapper';
import TemplateContainer from '../elements/TemplateContainer';
import AddPatientForm from '../particles/AddPatientForm';
import ScheduleStudyForm from '../particles/ScheduleStudyForm';

export default function Home(): JSX.Element {
  return (
    <TemplateContainer>
      <Box px="1.5em">
        <ModalWrapper
          form={<AddPatientForm />}
        >
          <Button
            variant="contained"
            size="large"
            color="primary"
            data-testid="home-add-patient-button"
          >
            Add Patient
          </Button>
        </ModalWrapper>
      </Box>
      <Box px="1.5em">
        <ModalWrapper
          form={<ScheduleStudyForm />}
        >
          <Button
            variant="contained"
            size="large"
            color="primary"
            data-testid="home-schedule-procedure-button"
          >
            Schedule Study
          </Button>
        </ModalWrapper>
      </Box>
    </TemplateContainer>
  );
}
