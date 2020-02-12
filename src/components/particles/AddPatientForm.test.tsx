import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import AddPatientForm from './AddPatientForm';
import store from '../../store/store';

describe('AddPatientForm', () => {
  let getByTestId: any;
  beforeEach(() => {
    ({ getByTestId } = render(
      <Provider store={store}>
        <AddPatientForm />
      </Provider>,
    ));
  });
  it('renders the component', () => {
    const form = getByTestId('add-patient-form');
    expect(form).toBeInTheDocument();
  });
  it('renders submit button', () => {
    const submit = getByTestId('patient-submit');
    expect(submit).toBeInTheDocument();
  });
  it('renders select', () => {
    const select = getByTestId('patient-gender-select');
    expect(select).toBeInTheDocument();
  });
  it('select displays initially "Select"', () => {
    const select = getByTestId('patient-gender-select');
    expect(select).toHaveTextContent('Select');
  });
  it('renders InputLabel with correct content', () => {
    const label = getByTestId('patient-name-label');
    expect(label).toHaveTextContent('Full Name');
  });
  it('renders an empty TextField', () => {
    const textField = getByTestId('patient-name');
    expect(textField).toBeEmpty();
  });
  it('controlled TextField changes value upon entry', () => {
    const textField = getByTestId('patient-name');
    expect(textField).toBeEmpty();
    fireEvent.change(textField, { target: { value: 'Patient' } });
    expect(textField).toHaveValue('Patient');
  });
  it('controlled TextField does not allow special chars', () => {
    const textField = getByTestId('patient-name');
    expect(textField).toBeEmpty();
    fireEvent.change(textField, { target: { value: '!?' } });
    expect(textField).toHaveValue('');
  });
  it('empties TextField upon submit', () => {
    const textField = getByTestId('patient-name');
    const submit = getByTestId('patient-submit');

    fireEvent.change(textField, { target: { value: 'Patient' } });
    expect(textField).toHaveValue('Patient');
    fireEvent.click(submit);

    expect(textField).toHaveValue('');
  });
});
