import * as types from '../actionTypes';
import {
  IAction, IStudiesState, IStudy,
} from '../../utilities/interfaces';

export const initialState = {
  loading: true,
  error: '',
  data: [],
};

export default function roomsReducer(state = initialState, action: IAction): IStudiesState {
  switch (action.type) {
    case types.FETCH_STUDIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_STUDIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      };
    case types.FETCH_STUDIES_FAILURE:
      return {
        loading: false,
        data: state.data,
        error: action.payload,
      };
    case types.ADD_STUDY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.ADD_STUDY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [
          ...state.data,
          action.payload,
        ],
        error: '',
      };
    case types.ADD_STUDY_FAILURE:
      return {
        loading: false,
        data: state.data,
        error: action.payload,
      };
    case types.UPDATE_PROCEDURE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_PROCEDURE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.map((study: IStudy) => (
          study.id === action.payload.id
            ? { ...study, status: action.payload.status }
            : study
        )),
        error: '',
      };
    case types.UPDATE_PROCEDURE_FAILURE:
      return {
        loading: false,
        data: state.data,
        error: action.payload,
      };
    default:
      return state;
  }
}
