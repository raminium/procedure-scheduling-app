import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import ScheduleStudyForm from './ScheduleStudyForm';
import store from '../../store/store';

describe('ScheduleStudyForm', () => {
  let getByTestId: any;
  beforeEach(() => {
    ({ getByTestId } = render(
      <Provider store={store}>
        <ScheduleStudyForm />
      </Provider>,
    ));
  });
  describe('Renders elements correctly', () => {
    it('renders the component', () => {
      const form = getByTestId('schedule-study-form');
      expect(form).toBeInTheDocument();
    });
    it('renders submit button', () => {
      const submit = getByTestId('study-submit');
      expect(submit).toBeInTheDocument();
    });
    it('renders description label with correct content', () => {
      const label = getByTestId('study-description-label');
      expect(label).toHaveTextContent('Description');
    });
    it('renders an empty description TextField', () => {
      const textField = getByTestId('study-description');
      expect(textField).toHaveValue('');
    });
    it('renders patient label with correct content', () => {
      const label = getByTestId('study-patient-select-label');
      expect(label).toHaveTextContent('Patient');
    });
    it('renders patient select', () => {
      const select = getByTestId('study-patient-select');
      expect(select).toBeInTheDocument();
    });
    it('Patient select displays initially "Select"', () => {
      const select = getByTestId('study-patient-select');
      expect(select).toHaveTextContent('Select');
    });
    it('Study select displays initially "Planned"', () => {
      const select = getByTestId('study-status-select');
      expect(select).toHaveTextContent('Planned');
    });
    it('renders date label with correct content', () => {
      const label = getByTestId('study-date-picker-label');
      expect(label).toHaveTextContent('Date');
    });
    it('renders an empty date picker', () => {
      const datePicker = getByTestId('study-date-picker');
      expect(datePicker).toHaveValue('');
    });
    it('renders start time label with correct content', () => {
      const label = getByTestId('study-start-time-label');
      expect(label).toHaveTextContent('Start Time');
    });
    it('renders an empty start time picker', () => {
      const timePicker = getByTestId('study-start-time-picker');
      expect(timePicker).toHaveValue('');
    });
    it('renders end time label with correct content', () => {
      const label = getByTestId('study-end-time-label');
      expect(label).toHaveTextContent('End Time');
    });
    it('renders an empty end time picker', () => {
      const timePicker = getByTestId('study-end-time-picker');
      expect(timePicker).toHaveValue('');
    });
    it('renders status label with correct content', () => {
      const label = getByTestId('study-status-select-label');
      expect(label).toHaveTextContent('Status');
    });
    it('renders status select', () => {
      const select = getByTestId('study-status-select');
      expect(select).toBeInTheDocument();
    });
    it('Status select displays initially "Planned"', () => {
      const select = getByTestId('study-status-select');
      expect(select).toHaveTextContent('Planned');
    });
  });

  describe('description input field', () => {
    it('changes value upon entry', () => {
      const textField = getByTestId('study-description');
      expect(textField).toBeEmpty();
      fireEvent.change(textField, { target: { value: 'Sample Study' } });
      expect(textField).toHaveValue('Sample Study');
    });
    it('does not allow special chars', () => {
      const textField = getByTestId('study-description');
      expect(textField).toBeEmpty();
      fireEvent.change(textField, { target: { value: '!?' } });
      expect(textField).toHaveValue('');
    });
  });

  describe('Upon incomplete form submit', () => {
    it('does not empty TextField', () => {
      const textField = getByTestId('study-description');
      const submit = getByTestId('study-submit');

      fireEvent.change(textField, { target: { value: 'Sample Study' } });
      fireEvent.click(submit);

      expect(textField).toHaveValue('Sample Study');
    });
  });
});
