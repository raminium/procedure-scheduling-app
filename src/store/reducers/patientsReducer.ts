import * as types from '../actionTypes';
import { IActionPayload, IPatientsState } from '../../utilities/interfaces';

export const initialState: IPatientsState = {
  loading: true,
  error: '',
  data: [],
};

export default function patientReducer(
  state = initialState, action: IActionPayload,
): IPatientsState {
  switch (action.type) {
    case types.FETCH_PATIENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_PATIENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      };
    case types.FETCH_PATIENTS_FAILURE:
      return {
        loading: false,
        data: state.data,
        error: action.payload,
      };
    case types.ADD_PATIENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.ADD_PATIENT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [
          ...state.data,
          action.payload,
        ],
        error: '',
      };
    case types.ADD_PATIENT_FAILURE:
      return {
        loading: false,
        data: state.data,
        error: action.payload,
      };
    default:
      return state;
  }
}
