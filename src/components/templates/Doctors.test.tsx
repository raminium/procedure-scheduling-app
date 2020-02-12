import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import Doctors from './Doctors';
import store from '../../store/store';

describe('Doctors', () => {
  let getByTestId: any;
  beforeEach(() => {
    ({ getByTestId } = render(
      <Provider store={store}>
        <Doctors />
      </Provider>,
    ));
  });
  it('renders table', () => {
    const table = getByTestId('doctors-table');
    expect(table).toBeInTheDocument();
  });
  it('renders add button', () => {
    const button = getByTestId('doctors-add-button');
    expect(button).toBeInTheDocument();
  });
  it('renders table head', () => {
    const tableHead = getByTestId('doctors-table-head');
    expect(tableHead).toBeInTheDocument();
  });
  it('table head includes category', () => {
    const tableHead = getByTestId('doctors-table-head');
    expect(tableHead).toHaveTextContent(/name/i);
  });
  it('renders tableBody', () => {
    const tableBody = getByTestId('doctors-table-body');
    expect(tableBody).toBeInTheDocument();
  });
});
