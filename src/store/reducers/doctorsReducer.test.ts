import doctorsReducer, { initialState } from './doctorsReducer';
import * as types from '../actionTypes';

const mockAction = {
  type: '',
  payload: '',
};

const mockDoctor = {
  id: '123',
  name: 'Dr. Doe',
};

const mockError = new Error('Failed to fetch doctors!');

describe('doctorsReducer', () => {
  it('should return initial state', () => {
    expect(doctorsReducer(undefined, mockAction)).toEqual(initialState);
  });
  it('should handle FETCH_DOCTORS_REQUEST', () => {
    expect(
      doctorsReducer(undefined, {
        type: types.FETCH_DOCTORS_REQUEST,
        payload: '',
      }),
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });
  it('should handle FETCH_DOCTORS_SUCCESS', () => {
    expect(
      doctorsReducer(undefined, {
        type: types.FETCH_DOCTORS_SUCCESS,
        payload: [mockDoctor],
      }),
    ).toEqual({
      ...initialState,
      loading: false,
      data: [mockDoctor],
    });
  });
  it('should handle FETCH_DOCTORS_FAILURE', () => {
    expect(
      doctorsReducer(undefined, {
        type: types.FETCH_DOCTORS_FAILURE,
        payload: mockError,
      }),
    ).toEqual({
      ...initialState,
      loading: false,
      error: mockError,
    });
  });
  it('should handle ADD_DOCTOR_REQUEST', () => {
    expect(
      doctorsReducer(undefined, {
        type: types.ADD_DOCTOR_REQUEST,
        payload: '',
      }),
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });
  it('should handle ADD_DOCTOR_SUCCESS', () => {
    expect(
      doctorsReducer(undefined, {
        type: types.ADD_DOCTOR_SUCCESS,
        payload: mockDoctor,
      }),
    ).toEqual({
      ...initialState,
      loading: false,
      data: [mockDoctor],
    });
  });
  it('should handle ADD_DOCTOR_FAILURE', () => {
    expect(
      doctorsReducer(undefined, {
        type: types.ADD_DOCTOR_FAILURE,
        payload: mockError,
      }),
    ).toEqual({
      ...initialState,
      loading: false,
      error: mockError,
    });
  });
});
