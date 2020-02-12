import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';

export default function TimePicker(
  { handleTimeChange, time, inputProps }:
  { handleTimeChange: (date: Date | null) => void ;
    time: Date | null;
    inputProps?: object; },
): JSX.Element {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
        margin="normal"
        id="time-picker"
        value={time}
        onChange={handleTimeChange}
        KeyboardButtonProps={{
          'aria-label': 'change time',
        }}
        inputProps={inputProps}
      />
    </MuiPickersUtilsProvider>
  );
}
