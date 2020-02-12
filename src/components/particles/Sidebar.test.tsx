import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  let getByTestId: any;
  beforeEach(() => {
    ({ getByTestId } = render(
      <Router>
        <Sidebar />
      </Router>,
    ));
  });
  it('renders the component', () => {
    const component = getByTestId('sidebar');
    expect(component).toBeInTheDocument();
  });
  it('renders home list button', () => {
    const listButton = getByTestId('sidebar-home');
    expect(listButton).toHaveTextContent('Home');
  });
  it('renders patients list button', () => {
    const listButton = getByTestId('sidebar-patients');
    expect(listButton).toHaveTextContent('Patients');
  });
  it('renders studies list button', () => {
    const listButton = getByTestId('sidebar-studies');
    expect(listButton).toHaveTextContent('Studies');
  });
  it('renders OR list button', () => {
    const listButton = getByTestId('sidebar-or');
    expect(listButton).toHaveTextContent('OR');
  });
  it('renders schedule list button', () => {
    const listButton = getByTestId('sidebar-schedule');
    expect(listButton).toHaveTextContent('Schedule');
  });
  it('does not render doctors list button initially', () => {
    expect(() => { getByTestId('sidebar-doctors'); }).toThrowError();
  });
  it('renders doctors list button after click on OR', () => {
    const orlistButton = getByTestId('sidebar-or');

    fireEvent.click(orlistButton);

    const doctorslistButton = getByTestId('sidebar-doctors');
    expect(doctorslistButton).toHaveTextContent('Doctors');
  });
  it('does not render rooms list button initially', () => {
    expect(() => { getByTestId('sidebar-rooms'); }).toThrowError();
  });
  it('renders rooms list button after click on OR', () => {
    const orlistButton = getByTestId('sidebar-or');

    fireEvent.click(orlistButton);

    const roomslistButton = getByTestId('sidebar-rooms');
    expect(roomslistButton).toHaveTextContent('Rooms');
  });
});
