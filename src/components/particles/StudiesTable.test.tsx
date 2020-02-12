import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import StudiesTable from './StudiesTable';
import store from '../../store/store';

describe('StudiesTable', () => {
  let getByTestId: any;
  beforeEach(() => {
    ({ getByTestId } = render(
      <Provider store={store}>
        <StudiesTable status="Planned" />
      </Provider>,
    ));
  });
  it('renders table', () => {
    const table = getByTestId('studies-table');
    expect(table).toBeInTheDocument();
  });
  it('renders table head', () => {
    const tableHead = getByTestId('studies-table-head');
    expect(tableHead).toBeInTheDocument();
  });
  it('table head includes all study categories', () => {
    const tableHead = getByTestId('studies-table-head');
    expect(tableHead).toHaveTextContent(/description/i);
    expect(tableHead).toHaveTextContent(/patient/i);
    expect(tableHead).toHaveTextContent(/start time/i);
    expect(tableHead).toHaveTextContent(/end time/i);
  });
  it('renders tableBody', () => {
    const tableBody = getByTestId('studies-table-body');
    expect(tableBody).toBeInTheDocument();
  });
});
