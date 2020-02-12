import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount, ReactWrapper } from 'enzyme';
import App from './App';
import Doctors from './components/templates/Doctors';
import Patients from './components/templates/Patients';
import Rooms from './components/templates/Rooms';
import Studies from './components/templates/Studies';
import Home from './components/templates/Home';
import Calendar from './components/templates/Calendar';
import store from './store/store';

const setup = (route: string): ReactWrapper => mount(
  <Provider store={store}>
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  </Provider>,
);

describe('App', () => {
  describe('Routes', () => {
    it('finds only Doctors component when given the path "/doctors"', () => {
      const component = setup('/doctors');
      expect(component.find(Doctors)).toHaveLength(1);
    });
    it('finds Patients component when given the path "/patients"', () => {
      const component = setup('/patients');
      expect(component.find(Patients)).toHaveLength(1);
    });
    it('finds Rooms component when given the path "/rooms"', () => {
      const component = setup('/rooms');
      expect(component.find(Rooms)).toHaveLength(1);
    });
    it('finds Studies component when given the path "/studies"', () => {
      const component = setup('/studies');
      expect(component.find(Studies)).toHaveLength(1);
    });
    it('finds Calendar component when given the path "/calendar"', () => {
      const component = setup('/calendar');
      expect(component.find(Calendar)).toHaveLength(1);
    });
    it('finds Home component when given the path "/"', () => {
      const component = setup('/');
      expect(component.find(Home)).toHaveLength(1);
    });
  });
});
