import studiesReducer, { initialState } from './studiesReducer';
import * as types from '../actionTypes';

const mockAction = {
  type: '',
  payload: '',
};

const mockStudy = {
  id: '123',
  patientId: '456',
  description: 'Sample medical procedure',
  status: 'Planned',
  startTime: new Date('1 January 2020'),
  endTime: null,
};

const mockError = new Error('Failed to fetch studies!');

describe('studiesReducer', () => {
  it('should return initial state', () => {
    expect(studiesReducer(undefined, mockAction)).toEqual(initialState);
  });
  it('should handle FETCH_STUDIES_REQUEST', () => {
    expect(
      studiesReducer(undefined, {
        type: types.FETCH_STUDIES_REQUEST,
        payload: '',
      }),
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });
  it('should handle FETCH_STUDIES_SUCCESS', () => {
    expect(
      studiesReducer(undefined, {
        type: types.FETCH_STUDIES_SUCCESS,
        payload: [mockStudy],
      }),
    ).toEqual({
      ...initialState,
      loading: false,
      data: [mockStudy],
    });
  });
  it('should handle FETCH_STUDIES_FAILURE', () => {
    expect(
      studiesReducer(undefined, {
        type: types.FETCH_STUDIES_FAILURE,
        payload: mockError,
      }),
    ).toEqual({
      ...initialState,
      loading: false,
      error: mockError,
    });
  });
  it('should handle ADD_STUDY_REQUEST', () => {
    expect(
      studiesReducer(undefined, {
        type: types.ADD_STUDY_REQUEST,
        payload: '',
      }),
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });
  it('should handle ADD_STUDY_SUCCESS', () => {
    expect(
      studiesReducer(undefined, {
        type: types.ADD_STUDY_SUCCESS,
        payload: mockStudy,
      }),
    ).toEqual({
      ...initialState,
      loading: false,
      data: [mockStudy],
    });
  });
  it('should handle ADD_STUDY_FAILURE', () => {
    expect(
      studiesReducer(undefined, {
        type: types.ADD_STUDY_FAILURE,
        payload: mockError,
      }),
    ).toEqual({
      ...initialState,
      loading: false,
      error: mockError,
    });
  });
});
