import { combineReducers } from 'redux';
import doctorsReducer from './reducers/doctorsReducer';
import patientReducer from './reducers/patientsReducer';
import roomsReducer from './reducers/roomsReducer';
import studiesReducer from './reducers/studiesReducer';

const rootReducer = combineReducers({
  doctors: doctorsReducer,
  patients: patientReducer,
  rooms: roomsReducer,
  studies: studiesReducer,
});

export default rootReducer;
