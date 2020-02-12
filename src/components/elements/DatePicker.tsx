import React from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function DatePicker(
  { handleDateChange, date, inputProps }:
  { handleDateChange: (date: Date | null) => void;
    date: Date | null;
    inputProps?: object; },
): JSX.Element {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="dd/MM/yyyy"
        margin="normal"
        id="date-picker"
        value={date}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
        inputProps={inputProps}
      />
    </MuiPickersUtilsProvider>
  );
}
