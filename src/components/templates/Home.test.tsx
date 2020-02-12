import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import Home from './Home';
import store from '../../store/store';

describe('Home', () => {
  let getByTestId: any;
  beforeEach(() => {
    ({ getByTestId } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    ));
  });
  it('renders add patient button', () => {
    const button = getByTestId('home-add-patient-button');
    expect(button).toBeInTheDocument();
  });
  it('renders add patient button with correct text inside', () => {
    const button = getByTestId('home-add-patient-button');
    expect(button).toHaveTextContent('Add Patient');
  });
  it('renders schedule procedure button', () => {
    const button = getByTestId('home-schedule-procedure-button');
    expect(button).toBeInTheDocument();
  });
  it('renders schedule procedure button with correct text inside', () => {
    const button = getByTestId('home-schedule-procedure-button');
    expect(button).toHaveTextContent('Schedule Study');
  });
});
