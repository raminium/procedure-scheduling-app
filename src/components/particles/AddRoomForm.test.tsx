import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import AddRoomForm from './AddRoomForm';
import store from '../../store/store';

describe('AddRoomForm', () => {
  let getByTestId: any;
  beforeEach(() => {
    ({ getByTestId } = render(
      <Provider store={store}>
        <AddRoomForm />
      </Provider>,
    ));
  });
  it('renders the component', () => {
    const form = getByTestId('add-room-form');
    expect(form).toBeInTheDocument();
  });
  it('renders submit button', () => {
    const submit = getByTestId('room-submit');
    expect(submit).toBeInTheDocument();
  });
  it('renders InputLabel with correct content', () => {
    const label = getByTestId('room-name-label');
    expect(label).toHaveTextContent('Name');
  });
  it('renders an empty TextField', () => {
    const textField = getByTestId('room-name');
    expect(textField).toBeEmpty();
  });
  it('controlled TextField changes value upon entry', () => {
    const textField = getByTestId('room-name');
    expect(textField).toBeEmpty();
    fireEvent.change(textField, { target: { value: 'Sample OR' } });
    expect(textField).toHaveValue('Sample OR');
  });
  it('empties TextField upon submit', () => {
    const textField = getByTestId('room-name');
    const submit = getByTestId('room-submit');

    fireEvent.change(textField, { target: { value: 'Sample OR' } });
    expect(textField).toHaveValue('Sample OR');
    fireEvent.click(submit);

    expect(textField).toHaveValue('');
  });
});
