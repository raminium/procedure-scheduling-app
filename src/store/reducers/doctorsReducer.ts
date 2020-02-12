import * as types from '../actionTypes';
import { IDoctorsState, IActionPayload } from '../../utilities/interfaces';

export const initialState: IDoctorsState = {
  loading: true,
  error: '',
  data: [],
};

export default function doctorsReducer(
  state = initialState, action: IActionPayload,
): IDoctorsState {
  switch (action.type) {
    case types.FETCH_DOCTORS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_DOCTORS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      };
    case types.FETCH_DOCTORS_FAILURE:
      return {
        loading: false,
        data: state.data,
        error: action.payload,
      };
    case types.ADD_DOCTOR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.ADD_DOCTOR_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [
          ...state.data,
          action.payload,
        ],
        error: '',
      };
    case types.ADD_DOCTOR_FAILURE:
      return {
        loading: false,
        data: state.data,
        error: action.payload,
      };
    default:
      return state;
  }
}
