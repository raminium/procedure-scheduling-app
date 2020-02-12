import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import Studies from './Studies';
import store from '../../store/store';


describe('Studies', () => {
  let getByTestId: any;
  beforeEach(() => {
    ({ getByTestId } = render(
      <Provider store={store}>
        <Studies />
      </Provider>,
    ));
  });
  it('renders add button', () => {
    const button = getByTestId('studies-add-button');
    expect(button).toBeInTheDocument();
  });
  it('renders planned studies table', () => {
    const table = getByTestId('studies-planned-table');
    expect(table).toBeInTheDocument();
  });
  it('renders in progress studies table', () => {
    const table = getByTestId('studies-in-progress-table');
    expect(table).toBeInTheDocument();
  });
  it('renders finished studies table', () => {
    const table = getByTestId('studies-finished-table');
    expect(table).toBeInTheDocument();
  });
});
