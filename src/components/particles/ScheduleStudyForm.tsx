import React, { ChangeEvent, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TimePicker from '../elements/TimePicker';
import DatePicker from '../elements/DatePicker';
import { addStudy } from '../../store/actions';
import isOnlyAllowedChars from '../../utilities/isOnlyAllowedChars';
import * as types from '../../utilities/interfaces';
import { useStylesForm } from '../useStyles';

export default function ScheduleStudyForm(): JSX.Element {
  const classes = useStylesForm();
  const dispatch = useDispatch();
  const store: types.IState = useSelector(
    (state: types.IState) => state,
  );
  const initialState: types.IScheduleStudy = {
    id: uuid(),
    patientId: undefined,
    description: '',
    status: 'Planned',
    date: null,
    startTime: null,
    endTime: null,
  };
  const [study, setStudy] = React.useState(initialState);

  const handleDateChange = (date: Date | null): void => {
    setStudy({
      ...study,
      date,
      startTime: date,
    });
  };

  /**
   * function to handle both start and end time change. The function will
   * be handed over to the TimePicker, therefore the higher function design.
   */
  const handleTimeChange = (type: string) => (time: Date | null): void => {
    let startTime;
    let endTime;
    if (study.date === null
      || time === null) return;
    switch (type) {
      case 'start':
        startTime = new Date(study.date);
        startTime.setHours(time.getHours(), time.getMinutes(), time.getSeconds());
        setStudy({
          ...study,
          startTime,
        });
        break;
      case 'end':
        endTime = new Date(study.date);
        endTime.setHours(time.getHours(), time.getMinutes(), time.getSeconds());
        setStudy({
          ...study,
          endTime,
        });
        break;
      default:
        throw new Error(`Time type ${type} is not available in the 'handleTimeChangeFunction.`);
    }
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (
      study.description !== ''
    && study.patientId !== undefined
    && study.startTime !== null
    ) {
      dispatch(addStudy({
        id: study.id,
        patientId: study.patientId,
        status: study.status,
        description: study.description,
        startTime: study.startTime,
        endTime: study.endTime,
      }));
      setStudy(initialState);
    }
  };

  const handlePatientIdSelectChange = (
    event: ChangeEvent<{ value: unknown }>,
  ): void => {
    if (event.target.value !== undefined) {
      setStudy({
        ...study,
        patientId: event.target.value as string,
      });
    }
  };

  /**
   * Due to the utilization of Material-UI in this case the state needs
   * to be unknown.
   */
  const handleStatusChange = (event: ChangeEvent<{ value: unknown }>): void => {
    if (event.target.value !== undefined) {
      setStudy({
        ...study,
        status: event.target.value as types.StatusTypes,
      });
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (isOnlyAllowedChars(event.target.value)) {
      setStudy({
        ...study,
        description: event.target.value,
      });
    }
  };

  return (
    <div
      className={classes.paper}
      data-testid="schedule-study-form"
    >
      <Typography variant="h5">
        <Box mb={2} fontWeight={800}>
          Schedule Study
        </Box>
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <Grid
          container
          spacing={2}
          direction="column"
        >
          <Grid item xs={12}>
            <InputLabel
              htmlFor="study-description"
              data-testid="study-description-label"
            >
              Description
            </InputLabel>
            <TextField
              id="study-description"
              onChange={handleInputChange}
              value={study.description}
              inputProps={{ 'data-testid': 'study-description' }}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel
              id="study-patient"
              data-testid="study-patient-select-label"
            >
              Patient
            </InputLabel>
          </Grid>
          <Grid item xs={12}>
            <Select
              labelId="study-patient"
              id="study-patient-select"
              value={study.patientId}
              onChange={handlePatientIdSelectChange}
              displayEmpty
              data-testid="study-patient-select"
            >
              <MenuItem disabled value={undefined}>
                Select
              </MenuItem>
              {store.patients.data.map(
                (patient: types.IPatient) => (
                  <MenuItem key={patient.id} value={patient.id}>
                    {patient.name}
                  </MenuItem>
                ),
              )}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <InputLabel
              id="date"
              data-testid="study-date-picker-label"
            >
              Date
            </InputLabel>
            <DatePicker
              date={study.date}
              handleDateChange={handleDateChange}
              inputProps={{ 'data-testid': 'study-date-picker' }}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel
              id="start-time"
              data-testid="study-start-time-label"
            >
              Start Time
            </InputLabel>
            <TimePicker
              time={study.startTime}
              handleTimeChange={handleTimeChange('start')}
              inputProps={{ 'data-testid': 'study-start-time-picker' }}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel
              id="end-time"
              data-testid="study-end-time-label"
            >
              End Time
            </InputLabel>
            <TimePicker
              time={study.endTime}
              handleTimeChange={handleTimeChange('end')}
              inputProps={{ 'data-testid': 'study-end-time-picker' }}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel
              id="study-status"
              data-testid="study-status-select-label"
            >
              Status
            </InputLabel>
            <Select
              labelId="study-status"
              id="study-status-select"
              value={study.status}
              onChange={handleStatusChange}
              displayEmpty
              data-testid="study-status-select"
            >
              <MenuItem disabled value={undefined}>
                Select
              </MenuItem>
              <MenuItem value="Planned">
                Planned
              </MenuItem>
              <MenuItem value="In Progress">
                In Progress
              </MenuItem>
              <MenuItem value="Finished">
                Finished
              </MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              data-testid="study-submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
