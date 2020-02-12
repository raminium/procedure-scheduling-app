import React, { FormEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import { addDoctor } from '../../store/actions';
import isOnlyAllowedChars from '../../utilities/isOnlyAllowedChars';
import { useStylesForm } from '../useStyles';

export default function AddDoctorForm(): JSX.Element {
  const classes = useStylesForm();
  const dispatch = useDispatch();
  const [name, setName] = React.useState<string>('');

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (name !== '') {
      dispatch(addDoctor({
        id: uuid(),
        name,
      }));
      setName('');
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    if (isOnlyAllowedChars(event.target.value)) {
      setName(event.target.value);
    }
  };

  return (
    <div
      className={classes.paper}
      data-testid="add-doctor-form"
    >
      <Typography variant="h5">
        <Box mb={2} fontWeight={800}>
          Add Doctor
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
              htmlFor="doctor-name"
              data-testid="doctor-name-label"
            >
              Full Name
            </InputLabel>
            <TextField
              id="doctor-name"
              onChange={handleInputChange}
              value={name}
              inputProps={{ 'data-testid': 'doctor-name' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              data-testid="doctor-submit"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
