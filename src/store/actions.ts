import { Dispatch } from 'redux';
import * as actions from './actionCreators';
import * as interfaces from '../utilities/interfaces';
import sampleDataLocation from '../config';

export const fetchDoctors = () => (
  dispatch: Dispatch<interfaces.IAction>,
): Promise< void | interfaces.IAction> => {
  dispatch(actions.fetchDoctorsRequest());

  return fetch(sampleDataLocation)
    .then((response) => response.json())
    .then((data) => {
      dispatch(actions.fetchDoctorsSuccess(data.doctors));
    })
    .catch((error: Error) => dispatch(actions.fetchDoctorsFailure(error)));
};

export const fetchPatients = () => (
  dispatch: Dispatch<interfaces.IAction>,
): Promise< void | interfaces.IAction> => {
  dispatch(actions.fetchPatientsRequest());

  return fetch(sampleDataLocation)
    .then((response) => response.json())
    .then((data) => {
      dispatch(actions.fetchPatientsSuccess(data.patients));
    })
    .catch((error: Error) => dispatch(actions.fetchPatientsFailure(error)));
};

export const fetchRooms = () => (
  dispatch: Dispatch<interfaces.IAction>,
): Promise< void | interfaces.IAction> => {
  dispatch(actions.fetchRoomsRequest());

  return fetch(sampleDataLocation)
    .then((response) => response.json())
    .then((data) => {
      dispatch(actions.fetchRoomsSuccess(data.rooms));
    })
    .catch((error: Error) => dispatch(actions.fetchRoomsFailure(error)));
};

export const fetchStudies = () => (
  dispatch: Dispatch<interfaces.IAction>,
): Promise< void | interfaces.IAction> => {
  dispatch(actions.fetchStudiesRequest());

  return fetch(sampleDataLocation)
    .then((response) => response.json())
    .then((data) => {
      dispatch(actions.fetchStudiesSuccess(data.studies));
    })
    .catch((error: Error) => dispatch(actions.fetchStudiesFailure(error)));
};

export const addPatient = (patient: interfaces.IPatient) => (
  dispatch: Dispatch<interfaces.IAction>,
): interfaces.IAction => {
  dispatch(actions.addPatientRequest());
  /**
   * @TODO: This should be a POST request
   * to the backend.
   * @TODO: Handle error case
   */
  return dispatch(actions.addPatientSuccess(patient));
};

export const addRoom = (room: interfaces.IRoom) => (
  dispatch: Dispatch<interfaces.IAction>,
): void => {
  dispatch(actions.addRoomRequest());
  /**
   * @TODO: This should be a POST request
   * to the backend.
   * @TODO: Handle error case
   */
  dispatch(actions.addRoomSuccess(room));
};

export const addStudy = (study: interfaces.IStudy) => (
  dispatch: Dispatch<interfaces.IAction>,
): void => {
  dispatch(actions.addStudyRequest());
  /**
   * @TODO: This should be a POST request
   * to the backend.
   * @TODO: Handle error case
   */
  dispatch(actions.addStudySuccess(study));
};

export const addDoctor = (doctor: interfaces.IDoctor) => (
  dispatch: Dispatch<interfaces.IAction>,
): void => {
  dispatch(actions.addDoctorRequest());
  /**
   * @TODO: This should be a POST request
   * to the backend.
   * @TODO: Handle error case
   */
  dispatch(actions.addDoctorSuccess(doctor));
};

export const updateProcedure = (study: interfaces.IStudy) => (
  dispatch: Dispatch<interfaces.IAction>,
): void => {
  dispatch(actions.updateProcedureRequest());
  /**
   * @TODO: This should be a PUT request
   * to the backend.
   * @TODO: Handle error case
   */
  dispatch(actions.updateProcedureSuccess(study));
};
