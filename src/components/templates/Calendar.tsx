import React from 'react';
import {
  Scheduler,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import { useSelector } from 'react-redux';
import { ViewState } from '@devexpress/dx-react-scheduler';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import ScheduleStudyForm from '../particles/ScheduleStudyForm';
import { IStudy, IState, IAppointmentModel } from '../../utilities/interfaces';
import HeadingWrapper from '../elements/HeadingWrapper';
import ModalWrapper from '../elements/ModalWrapper';

export default function Calendar(): JSX.Element {
  const studies: IStudy[] = useSelector((state: IState) => state.studies.data);
  let calendarData: IAppointmentModel[] = [];
  studies.forEach((study, index): void => {
    calendarData = [
      ...calendarData,
      {
        id: study.id,
        title: study.description,
        startDate: study.startTime,
      },
    ];
    if (study.endTime) {
      calendarData[index].endDate = study.endTime;
    }
  });

  return (
    <>
      <HeadingWrapper
        px="15px"
        pb="0"
        pt="15px"
        data-testid="calendar-heading"
      >
        <Typography variant="h4" align="left">
          This Week
        </Typography>
        <ModalWrapper
          form={<ScheduleStudyForm />}
        >
          <IconButton
            color="primary"
            data-testid="calendar-add-button"
          >
            <AddIcon fontSize="large" />
          </IconButton>
        </ModalWrapper>
      </HeadingWrapper>
      <Box p="1rem">
        <Paper
          elevation={2}
          data-testid="calendar-container"
        >
          <Scheduler data={calendarData}>
            <ViewState currentDate={new Date().toISOString()} />
            <WeekView startDayHour={8} endDayHour={18} />
            <Appointments />
          </Scheduler>
        </Paper>
      </Box>
    </>
  );
}
