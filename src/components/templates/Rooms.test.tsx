import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import Rooms from './Rooms';
import store from '../../store/store';

describe('Rooms', () => {
  let getByTestId: any;
  beforeEach(() => {
    ({ getByTestId } = render(
      <Provider store={store}>
        <Rooms />
      </Provider>,
    ));
  });
  it('renders table', () => {
    const table = getByTestId('rooms-table');
    expect(table).toBeInTheDocument();
  });
  it('renders add button', () => {
    const button = getByTestId('rooms-add-button');
    expect(button).toBeInTheDocument();
  });
  it('renders table head', () => {
    const tableHead = getByTestId('rooms-table-head');
    expect(tableHead).toBeInTheDocument();
  });
  it('table head includes category', () => {
    const tableHead = getByTestId('rooms-table-head');
    expect(tableHead).toHaveTextContent(/name/i);
  });
  it('renders tableBody', () => {
    const tableBody = getByTestId('rooms-table-body');
    expect(tableBody).toBeInTheDocument();
  });
});
