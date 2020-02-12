import patientsReducer, { initialState } from './patientsReducer';
import * as types from '../actionTypes';

const mockAction = {
  type: '',
  payload: '',
};

const mockPatient = {
  id: '123',
  name: 'John Doe',
};

const mockError = new Error('Failed to fetch patients!');

describe('patientReducer', () => {
  it('should return initial state', () => {
    expect(patientsReducer(undefined, mockAction)).toEqual(initialState);
  });
  it('should handle FETCH_PATIENTS_REQUEST', () => {
    expect(
      patientsReducer(undefined, {
        type: types.FETCH_PATIENTS_REQUEST,
        payload: '',
      }),
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });
  it('should handle FETCH_PATIENTS_SUCCESS', () => {
    expect(
      patientsReducer(undefined, {
        type: types.FETCH_PATIENTS_SUCCESS,
        payload: [mockPatient],
      }),
    ).toEqual({
      ...initialState,
      loading: false,
      data: [mockPatient],
    });
  });
  it('should handle FETCH_PATIENTS_FAILURE', () => {
    expect(
      patientsReducer(undefined, {
        type: types.FETCH_PATIENTS_FAILURE,
        payload: mockError,
      }),
    ).toEqual({
      ...initialState,
      loading: false,
      error: mockError,
    });
  });
  it('should handle ADD_PATIENT_REQUEST', () => {
    expect(
      patientsReducer(undefined, {
        type: types.ADD_PATIENT_REQUEST,
        payload: '',
      }),
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });
  it('should handle ADD_PATIENT_SUCCESS', () => {
    expect(
      patientsReducer(undefined, {
        type: types.ADD_PATIENT_SUCCESS,
        payload: mockPatient,
      }),
    ).toEqual({
      ...initialState,
      loading: false,
      data: [mockPatient],
    });
  });
  it('should handle ADD_PATIENT_FAILURE', () => {
    expect(
      patientsReducer(undefined, {
        type: types.ADD_PATIENT_FAILURE,
        payload: mockError,
      }),
    ).toEqual({
      ...initialState,
      loading: false,
      error: mockError,
    });
  });
});
