import * as types from './actionTypes';
import * as interfaces from '../utilities/interfaces';

export const fetchDoctorsRequest = (): interfaces.IAction => ({
  type: types.FETCH_DOCTORS_REQUEST,
});

export const fetchDoctorsSuccess = (data: interfaces.IDoctorsState): interfaces.IActionPayload => ({
  type: types.FETCH_DOCTORS_SUCCESS,
  payload: data,
});

export const fetchDoctorsFailure = (error: Error): interfaces.IActionPayload => ({
  type: types.FETCH_DOCTORS_FAILURE,
  payload: error,
});

export const fetchPatientsRequest = (): interfaces.IAction => ({
  type: types.FETCH_PATIENTS_REQUEST,
});

export const fetchPatientsSuccess = (
  data: interfaces.IPatientsState,
): interfaces.IActionPayload => ({
  type: types.FETCH_PATIENTS_SUCCESS,
  payload: data,
});

export const fetchPatientsFailure = (error: Error): interfaces.IActionPayload => ({
  type: types.FETCH_PATIENTS_FAILURE,
  payload: error,
});

export const fetchRoomsRequest = (): interfaces.IAction => ({
  type: types.FETCH_ROOMS_REQUEST,
});

export const fetchRoomsSuccess = (data: interfaces.IRoomsState): interfaces.IActionPayload => ({
  type: types.FETCH_ROOMS_SUCCESS,
  payload: data,
});

export const fetchRoomsFailure = (error: Error): interfaces.IActionPayload => ({
  type: types.FETCH_ROOMS_FAILURE,
  payload: error,
});

export const fetchStudiesRequest = (): interfaces.IAction => ({
  type: types.FETCH_STUDIES_REQUEST,
});

export const fetchStudiesSuccess = (data: interfaces.IStudiesState): interfaces.IActionPayload => ({
  type: types.FETCH_STUDIES_SUCCESS,
  payload: data,
});

export const fetchStudiesFailure = (error: Error): interfaces.IActionPayload => ({
  type: types.FETCH_STUDIES_FAILURE,
  payload: error,
});

export const addPatientRequest = (): interfaces.IAction => ({
  type: types.ADD_PATIENT_REQUEST,
});

export const addPatientSuccess = (data: interfaces.IPatient): interfaces.IActionPayload => ({
  type: types.ADD_PATIENT_SUCCESS,
  payload: data,
});

export const addPatientFailure = (error: Error): interfaces.IActionPayload => ({
  type: types.ADD_PATIENT_FAILURE,
  payload: error,
});

export const addDoctorRequest = (): interfaces.IAction => ({
  type: types.ADD_DOCTOR_REQUEST,
});

export const addDoctorSuccess = (data: interfaces.IDoctor): interfaces.IActionPayload => ({
  type: types.ADD_DOCTOR_SUCCESS,
  payload: data,
});

export const addDoctorFailure = (error: Error): interfaces.IActionPayload => ({
  type: types.ADD_DOCTOR_FAILURE,
  payload: error,
});

export const addRoomRequest = (): interfaces.IAction => ({
  type: types.ADD_ROOM_REQUEST,
});

export const addRoomSuccess = (data: interfaces.IDoctor): interfaces.IActionPayload => ({
  type: types.ADD_ROOM_SUCCESS,
  payload: data,
});

export const addRoomFailure = (error: Error): interfaces.IActionPayload => ({
  type: types.ADD_ROOM_FAILURE,
  payload: error,
});

export const addStudyRequest = (): interfaces.IAction => ({
  type: types.ADD_STUDY_REQUEST,
});

export const addStudySuccess = (data: interfaces.IStudy): interfaces.IActionPayload => ({
  type: types.ADD_STUDY_SUCCESS,
  payload: data,
});

export const addStudyFailure = (error: Error): interfaces.IActionPayload => ({
  type: types.ADD_STUDY_FAILURE,
  payload: error,
});

export const updateProcedureRequest = (): interfaces.IAction => ({
  type: types.UPDATE_PROCEDURE_REQUEST,
});

export const updateProcedureSuccess = (data: interfaces.IStudy): interfaces.IActionPayload => ({
  type: types.UPDATE_PROCEDURE_SUCCESS,
  payload: data,
});

export const updateProcedureFailure = (error: Error): interfaces.IActionPayload => ({
  type: types.UPDATE_PROCEDURE_FAILURE,
  payload: error,
});
