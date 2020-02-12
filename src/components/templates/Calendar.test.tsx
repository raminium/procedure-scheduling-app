import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import Calendar from './Calendar';
import store from '../../store/store';

describe('Calendar', () => {
  let getByTestId: any;
  beforeEach(() => {
    ({ getByTestId } = render(
      <Provider store={store}>
        <Calendar />
      </Provider>,
    ));
  });
  it('renders calendar heading with correct heading', () => {
    const calendarHeading = getByTestId('calendar-heading');
    expect(calendarHeading).toHaveTextContent('This Week');
  });
  it('renders add button', () => {
    const button = getByTestId('calendar-add-button');
    expect(button).toBeInTheDocument();
  });
  it('does not render modal initially', () => {
    expect(() => { getByTestId('calendar-modal'); }).toThrowError();
  });
  it('renders calendar container', () => {
    const calendarContainer = getByTestId('calendar-container');
    expect(calendarContainer).toBeInTheDocument();
  });
});
