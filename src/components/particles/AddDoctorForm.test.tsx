import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import AddDoctorForm from './AddDoctorForm';
import store from '../../store/store';

describe('AddDoctorForm', () => {
  let getByTestId: any;
  beforeEach(() => {
    ({ getByTestId } = render(
      <Provider store={store}>
        <AddDoctorForm />
      </Provider>,
    ));
  });
  it('renders the component', () => {
    const form = getByTestId('add-doctor-form');
    expect(form).toBeInTheDocument();
  });
  it('renders submit button', () => {
    const submit = getByTestId('doctor-submit');
    expect(submit).toBeInTheDocument();
  });
  it('renders InputLabel with correct content', () => {
    const label = getByTestId('doctor-name-label');
    expect(label).toHaveTextContent('Full Name');
  });
  it('renders an empty TextField', () => {
    const textField = getByTestId('doctor-name');
    expect(textField).toBeEmpty();
  });
  it('controlled TextField changes value upon entry', () => {
    const textField = getByTestId('doctor-name');
    expect(textField).toBeEmpty();
    fireEvent.change(textField, { target: { value: 'Doctor' } });
    expect(textField).toHaveValue('Doctor');
  });
  it('controlled TextField does not allow special chars', () => {
    const textField = getByTestId('doctor-name');
    expect(textField).toBeEmpty();
    fireEvent.change(textField, { target: { value: '!?' } });
    expect(textField).toHaveValue('');
  });
  it('empties TextField upon submit', () => {
    const textField = getByTestId('doctor-name');
    const submit = getByTestId('doctor-submit');

    fireEvent.change(textField, { target: { value: 'Doctor' } });
    expect(textField).toHaveValue('Doctor');
    fireEvent.click(submit);

    expect(textField).toHaveValue('');
  });
});
