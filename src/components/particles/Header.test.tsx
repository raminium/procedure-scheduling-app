import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

describe('Header', () => {
  let getByTestId: any;
  beforeEach(() => {
    ({ getByTestId } = render(<Header>Children</Header>));
  });
  it('renders the component', () => {
    const component = getByTestId('header');
    expect(component).toBeInTheDocument();
  });
  it('renders children prop inside the component', () => {
    const component = getByTestId('header');
    expect(component).toHaveTextContent('Children');
  });
});
