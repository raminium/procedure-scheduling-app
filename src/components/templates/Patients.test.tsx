import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import Patients from './Patients';
import store from '../../store/store';

describe('Patients', () => {
  let getByTestId: any;
  beforeEach(() => {
    ({ getByTestId } = render(
      <Provider store={store}>
        <Patients />
      </Provider>,
    ));
  });
  it('renders table', () => {
    const table = getByTestId('patients-table');
    expect(table).toBeInTheDocument();
  });
  it('renders add button', () => {
    const button = getByTestId('patients-add-button');
    expect(button).toBeInTheDocument();
  });
  it('renders table head', () => {
    const tableHead = getByTestId('patients-table-head');
    expect(tableHead).toBeInTheDocument();
  });
  it('table head includes all categories', () => {
    const tableHead = getByTestId('patients-table-head');
    expect(tableHead).toHaveTextContent(/name/i);
    expect(tableHead).toHaveTextContent(/gender/i);
    expect(tableHead).toHaveTextContent(/birthday/i);
  });
  it('renders tableBody', () => {
    const tableBody = getByTestId('patients-table-body');
    expect(tableBody).toBeInTheDocument();
  });
});
