import React from 'react';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import TemplateContainer from '../elements/TemplateContainer';
import HeadingWrapper from '../elements/HeadingWrapper';
import ModalWrapper from '../elements/ModalWrapper';
import ScheduleStudyForm from '../particles/ScheduleStudyForm';
import StudiesTable from '../particles/StudiesTable';

export default function Studies(): JSX.Element {
  return (
    <TemplateContainer>
      <HeadingWrapper pb="0">
        <Typography variant="h4" align="left">
          Studies
        </Typography>
        <ModalWrapper form={<ScheduleStudyForm />}>
          <IconButton
            color="primary"
            data-testid="studies-add-button"
          >
            <AddIcon fontSize="large" />
          </IconButton>
        </ModalWrapper>
      </HeadingWrapper>
      <StudiesTable
        status="Planned"
        dataTestId="studies-planned-table"
      />
      <StudiesTable
        status="In Progress"
        dataTestId="studies-in-progress-table"
      />
      <StudiesTable
        status="Finished"
        dataTestId="studies-finished-table"
      />
    </TemplateContainer>
  );
}
