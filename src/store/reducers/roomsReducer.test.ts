import roomsReducer, { initialState } from './roomsReducer';
import * as types from '../actionTypes';

const mockAction = {
  type: '',
  payload: '',
};

const mockRoom = {
  id: '123',
  name: 'Sample OR',
};

const mockError = new Error('Failed to fetch rooms!');

describe('roomsReducer', () => {
  it('should return initial state', () => {
    expect(roomsReducer(undefined, mockAction)).toEqual(initialState);
  });
  it('should handle FETCH_ROOMS_REQUEST', () => {
    expect(
      roomsReducer(undefined, {
        type: types.FETCH_ROOMS_REQUEST,
        payload: '',
      }),
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });
  it('should handle FETCH_ROOMS_SUCCESS', () => {
    expect(
      roomsReducer(undefined, {
        type: types.FETCH_ROOMS_SUCCESS,
        payload: [mockRoom],
      }),
    ).toEqual({
      ...initialState,
      loading: false,
      data: [mockRoom],
    });
  });
  it('should handle FETCH_ROOMS_FAILURE', () => {
    expect(
      roomsReducer(undefined, {
        type: types.FETCH_ROOMS_FAILURE,
        payload: mockError,
      }),
    ).toEqual({
      ...initialState,
      loading: false,
      error: mockError,
    });
  });
  it('should handle ADD_ROOM_REQUEST', () => {
    expect(
      roomsReducer(undefined, {
        type: types.ADD_ROOM_REQUEST,
        payload: '',
      }),
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });
  it('should handle ADD_ROOM_SUCCESS', () => {
    expect(
      roomsReducer(undefined, {
        type: types.ADD_ROOM_SUCCESS,
        payload: mockRoom,
      }),
    ).toEqual({
      ...initialState,
      loading: false,
      data: [mockRoom],
    });
  });
  it('should handle ADD_ROOM_FAILURE', () => {
    expect(
      roomsReducer(undefined, {
        type: types.ADD_ROOM_FAILURE,
        payload: mockError,
      }),
    ).toEqual({
      ...initialState,
      loading: false,
      error: mockError,
    });
  });
});
