import * as types from '../actionTypes';
import { IAction, IRoomsState } from '../../utilities/interfaces';

export const initialState: IRoomsState = {
  loading: true,
  error: '',
  data: [],
};

export default function roomsReducer(state = initialState, action: IAction): IRoomsState {
  switch (action.type) {
    case types.FETCH_ROOMS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_ROOMS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      };
    case types.FETCH_ROOMS_FAILURE:
      return {
        loading: false,
        data: state.data,
        error: action.payload,
      };
    case types.ADD_ROOM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.ADD_ROOM_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [
          ...state.data,
          action.payload,
        ],
        error: '',
      };
    case types.ADD_ROOM_FAILURE:
      return {
        loading: false,
        data: state.data,
        error: action.payload,
      };
    default:
      return state;
  }
}
