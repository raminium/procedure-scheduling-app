import * as actions from './actionCreators';
import * as types from './actionTypes';
import { StatusTypes } from '../utilities/interfaces';

const mockState = {
  loading: true,
  error: '',
  data: [],
};

/**
  * IRoom, IDoctor and IPatient are equal in the non optional parameters
  * therefore we can test them with the same mock object.
  */
const mockEntity = {
  id: '123',
  name: 'John Doe',
};

const mockStudy = {
  id: '123',
  patientId: '456',
  description: 'study description',
  status: 'Planned' as StatusTypes,
  startTime: new Date('1 January 2020'),
  endTime: null,
};

const mockError = new Error('Error Message');

describe('fetch doctors actions', () => {
  it('fetchDoctorsRequest returns an object of type FETCH_DOCTORS_REQUEST', () => {
    expect(actions.fetchDoctorsRequest())
      .toEqual({ type: types.FETCH_DOCTORS_REQUEST });
  });
  it('fetchDoctorsSuccess returns an object of type FETCH_DOCTORS_SUCCESS with the correct payload', () => {
    expect(actions.fetchDoctorsSuccess(mockState))
      .toEqual({
        type: types.FETCH_DOCTORS_SUCCESS,
        payload: mockState,
      });
  });
  it('fetchDoctorsFailure returns an object of type FETCH_DOCTORS_FAILURE with the correct payload', () => {
    expect(actions.fetchDoctorsFailure(mockError))
      .toEqual({
        type: types.FETCH_DOCTORS_FAILURE,
        payload: mockError,
      });
  });
});

describe('Fetch patients actions', () => {
  it('fetchPatientsRequest returns an object of type FETCH_PATIENTS_REQUEST', () => {
    expect(actions.fetchPatientsRequest())
      .toEqual({ type: types.FETCH_PATIENTS_REQUEST });
  });
  it('fetchPatientsSuccess returns an object of type FETCH_PATIENTS_SUCCESS with the correct payload', () => {
    expect(actions.fetchPatientsSuccess(mockState))
      .toEqual({
        type: types.FETCH_PATIENTS_SUCCESS,
        payload: mockState,
      });
  });
  it('fetchPatientsFailure returns an object of type FETCH_PATIENTS_FAILURE with the correct payload', () => {
    expect(actions.fetchPatientsFailure(mockError))
      .toEqual({
        type: types.FETCH_PATIENTS_FAILURE,
        payload: mockError,
      });
  });
});

describe('Fetch rooms actions', () => {
  it('fetchRoomsRequest returns an object of type FETCH_ROOMS_REQUEST', () => {
    expect(actions.fetchRoomsRequest())
      .toEqual({ type: types.FETCH_ROOMS_REQUEST });
  });
  it('fetchRoomsSuccess returns an object of type FETCH_ROOMS_SUCCESS with the correct payload', () => {
    expect(actions.fetchRoomsSuccess(mockState))
      .toEqual({
        type: types.FETCH_ROOMS_SUCCESS,
        payload: mockState,
      });
  });
  it('fetchRoomsFailure returns an object of type FETCH_ROOMS_FAILURE with the correct payload', () => {
    expect(actions.fetchRoomsFailure(mockError))
      .toEqual({
        type: types.FETCH_ROOMS_FAILURE,
        payload: mockError,
      });
  });
});

describe('Fetch studies actions', () => {
  it('fetchStudiesRequest returns an object of type FETCH_STUDIES_REQUEST', () => {
    expect(actions.fetchStudiesRequest())
      .toEqual({ type: types.FETCH_STUDIES_REQUEST });
  });
  it('fetchStudiesSuccess returns an object of type FETCH_STUDIES_SUCCESS with the correct payload', () => {
    expect(actions.fetchStudiesSuccess(mockState))
      .toEqual({
        type: types.FETCH_STUDIES_SUCCESS,
        payload: mockState,
      });
  });
  it('fetchStudiesFailure returns an object of type FETCH_STUDIES_FAILURE with the correct payload', () => {
    expect(actions.fetchStudiesFailure(mockError))
      .toEqual({
        type: types.FETCH_STUDIES_FAILURE,
        payload: mockError,
      });
  });
});

describe('Add patient actions', () => {
  it('addPatientRequest returns an object of type ADD_PATIENT_REQUEST', () => {
    expect(actions.addPatientRequest())
      .toEqual({ type: types.ADD_PATIENT_REQUEST });
  });
  it('addPatientSuccess returns an object of type ADD_PATIENT_SUCCESS with the correct payload', () => {
    expect(actions.addPatientSuccess(mockEntity))
      .toEqual({
        type: types.ADD_PATIENT_SUCCESS,
        payload: mockEntity,
      });
  });
  it('addPatientFailure returns an object of type ADD_PATIENT_FAILURE with the correct payload', () => {
    expect(actions.addPatientFailure(mockError))
      .toEqual({
        type: types.ADD_PATIENT_FAILURE,
        payload: mockError,
      });
  });
});

describe('Add doctor actions', () => {
  it('addDoctorRequest returns an object of type ADD_DOCTOR_REQUEST', () => {
    expect(actions.addDoctorRequest())
      .toEqual({ type: types.ADD_DOCTOR_REQUEST });
  });
  it('addDoctorSuccess returns an object of type ADD_DOCTOR_SUCCESS with the correct payload', () => {
    expect(actions.addDoctorSuccess(mockEntity))
      .toEqual({
        type: types.ADD_DOCTOR_SUCCESS,
        payload: mockEntity,
      });
  });
  it('addDoctorFailure returns an object of type ADD_DOCTOR_FAILURE with the correct payload', () => {
    expect(actions.addDoctorFailure(mockError))
      .toEqual({
        type: types.ADD_DOCTOR_FAILURE,
        payload: mockError,
      });
  });
});

describe('Add room actions', () => {
  it('addRoomRequest returns an object of type ADD_ROOM_REQUEST', () => {
    expect(actions.addRoomRequest())
      .toEqual({ type: types.ADD_ROOM_REQUEST });
  });
  it('addRoomSuccess returns an object of type ADD_ROOM_SUCCESS with the correct payload', () => {
    expect(actions.addRoomSuccess(mockEntity))
      .toEqual({
        type: types.ADD_ROOM_SUCCESS,
        payload: mockEntity,
      });
  });
  it('addRoomFailure returns an object of type ADD_ROOM_FAILURE with the correct payload', () => {
    expect(actions.addRoomFailure(mockError))
      .toEqual({
        type: types.ADD_ROOM_FAILURE,
        payload: mockError,
      });
  });
});

describe('Add study actions', () => {
  it('addStudyRequest returns an object of type ADD_STUDY_REQUEST', () => {
    expect(actions.addStudyRequest())
      .toEqual({ type: types.ADD_STUDY_REQUEST });
  });
  it('addStudySuccess returns an object of type ADD_STUDY_SUCCESS with the correct payload', () => {
    expect(actions.addStudySuccess(mockStudy))
      .toEqual({
        type: types.ADD_STUDY_SUCCESS,
        payload: mockStudy,
      });
  });
  it('addStudyFailure returns an object of type ADD_STUDY_FAILURE with the correct payload', () => {
    expect(actions.addStudyFailure(mockError))
      .toEqual({
        type: types.ADD_STUDY_FAILURE,
        payload: mockError,
      });
  });
});

describe('update procedure actions', () => {
  it('updateProcedureRequest returns an object of type UPDATE_PROCEDURE_REQUEST', () => {
    expect(actions.updateProcedureRequest())
      .toEqual({ type: types.UPDATE_PROCEDURE_REQUEST });
  });
  it('updateProcedureSuccess returns an object of type UPDATE_PROCEDURE_SUCCESS with the correct payload', () => {
    expect(actions.updateProcedureSuccess(mockStudy))
      .toEqual({
        type: types.UPDATE_PROCEDURE_SUCCESS,
        payload: mockStudy,
      });
  });
  it('updateProcedureFailure returns an object of type UPDATE_PROCEDURE_FAILURE with the correct payload', () => {
    expect(actions.updateProcedureFailure(mockError))
      .toEqual({
        type: types.UPDATE_PROCEDURE_FAILURE,
        payload: mockError,
      });
  });
});
