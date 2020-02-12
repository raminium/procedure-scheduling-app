import React, { ChangeEvent, FormEvent, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import DatePicker from '../elements/DatePicker';
import { addPatient } from '../../store/actions';
import { IPatientForm, GenderTypes } from '../../utilities/interfaces';
import { useStylesForm } from '../useStyles';
import isOnlyAllowedChars from '../../utilities/isOnlyAllowedChars';

export default function AddPatientForm(): JSX.Element {
  const classes = useStylesForm();
  const dispatch = useDispatch();
  const initialState = {
    name: '',
    gender: undefined,
    birthday: null,
  };
  const [state, setState] = useState<IPatientForm>(initialState);

  const handleDateChange = (birthday: Date | null): void => {
    setState({ ...state, birthday });
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (state.name !== '') {
      dispatch(addPatient({
        id: uuid(),
        name: state.name,
        gender: state.gender || undefined,
        birthday: state.birthday || undefined,
      }));
      setState(initialState);
    }
  };

  /**
   * Due to Material-UI the type needs to be unknown when utilizing Selects.
   */
  const handleSelectChange = (event: ChangeEvent<{ value: unknown }>): void => {
    setState({ ...state, gender: event.target.value as GenderTypes });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (isOnlyAllowedChars(event.target.value)) {
      setState({ ...state, name: event.target.value as string });
    }
  };

  return (
    <div
      className={classes.paper}
      data-testid="add-patient-form"
    >
      <Typography variant="h5">
        <Box mb={2} fontWeight={800}>
          Add Patient
        </Box>
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={2} direction="column">
          <Grid item xs={12}>
            <InputLabel
              htmlFor="patient-name"
              data-testid="patient-name-label"
            >
              Full Name
            </InputLabel>
            <TextField
              id="patient-name"
              onChange={handleInputChange}
              value={state.name}
              inputProps={{ 'data-testid': 'patient-name' }}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel id="patient-gender">
              Gender
            </InputLabel>
            <Select
              labelId="patient-gender"
              id="patient-gender-select"
              data-testid="patient-gender-select"
              value={state.gender}
              onChange={handleSelectChange}
              displayEmpty
            >
              <MenuItem disabled value={undefined}>
                Select
              </MenuItem>
              <MenuItem value="Male">
                Male
              </MenuItem>
              <MenuItem value="Female">
                Female
              </MenuItem>
              <MenuItem value="Other">
                Unspecified
              </MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <InputLabel id="birthday">
              Birthday
            </InputLabel>
            <DatePicker
              date={state.birthday}
              handleDateChange={handleDateChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              data-testid="patient-submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
