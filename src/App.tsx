import React from 'react';
import { useDispatch } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom';
import AppContainer from './components/elements/AppContainer';
import Sidebar from './components/particles/Sidebar';
import Header from './components/particles/Header';
import Home from './components/templates/Home';
import Doctors from './components/templates/Doctors';
import Rooms from './components/templates/Rooms';
import Studies from './components/templates/Studies';
import Patients from './components/templates/Patients';
import Calendar from './components/templates/Calendar';
import {
  fetchDoctors, fetchPatients, fetchRooms, fetchStudies,
} from './store/actions';

export default function App(): JSX.Element {
  const dispatch = useDispatch();

  /**
   * To simulate a more complex backend the requests are separated. Even though
   * the route is the same.
   */
  React.useEffect((): void => {
    dispatch(fetchDoctors());
    dispatch(fetchPatients());
    dispatch(fetchStudies());
    dispatch(fetchRooms());
  }, [dispatch]);
  return (
    <>
      <CssBaseline />
      <AppContainer>
        <Header>
          Study Scheduling System
        </Header>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/doctors" component={Doctors} />
          <Route path="/rooms" component={Rooms} />
          <Route path="/patients" component={Patients} />
          <Route path="/studies" component={Studies} />
          <Route path="/calendar" component={Calendar} />
        </Switch>
      </AppContainer>
    </>
  );
}
