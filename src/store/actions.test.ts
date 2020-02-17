import configureMockStore from 'redux-mock-store';
import { AnyAction } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as types from './actionTypes';
import * as actions from './actions';
import sampleDataLocation from '../config';
import { StatusTypes, IState } from '../utilities/interfaces';

type DispatchExts = ThunkDispatch<IState, void, AnyAction>

const middleware = [thunk];
const mockStore = configureMockStore<IState, DispatchExts>(middleware);

const mockStudy = {
  id: '123',
  patientId: '456',
  description: 'Sample medical procedure',
  status: 'Planned' as StatusTypes,
  startTime: new Date('1 January 2020'),
  endTime: null,
};

const mockPatient = {
  id: '123',
  name: 'John Doe',
};

const mockDoctor = {
  id: '123',
  name: 'Dr. Doe',
};

const mockRoom = {
  id: '123',
  name: 'Sample OR',
};

const mockState = {
  doctors: {
    loading: true,
    error: '',
    data: [mockDoctor],
  },
  patients: {
    loading: true,
    error: '',
    data: [mockPatient],
  },
  rooms: {
    loading: true,
    error: '',
    data: [mockRoom],
  },
  studies: {
    loading: true,
    error: '',
    data: [mockStudy],
  },
};

const mockResponseHeaders = {
  'content-type': 'application/json',
};
const mockError = new Error('Failed to fetch data');
const store = mockStore();

describe('fetchPatients', () => {
  beforeEach(() => {
    fetchMock.restore();
    store.clearActions();
  });
  it('creates FETCH_PATIENTS_REQUEST and afterwards FETCH_PATIENTS_SUCCESS with the correct payload when fetching is successful', () => {
    fetchMock.getOnce(sampleDataLocation, {
      body: mockState,
      headers: mockResponseHeaders,
    });
    const expectedActions = [
      { type: types.FETCH_PATIENTS_REQUEST },
      { type: types.FETCH_PATIENTS_SUCCESS, payload: mockState.patients },
    ];
    return store.dispatch(actions.fetchPatients())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it('creates FETCH_PATIENTS_REQUEST and afterwards FETCH_PATIENTS_FAILURE with the correct payload when fetching failed', () => {
    fetchMock.getOnce(sampleDataLocation, {
      throws: mockError,
    });
    const expectedActions = [
      { type: types.FETCH_PATIENTS_REQUEST },
      { type: types.FETCH_PATIENTS_FAILURE, payload: mockError },
    ];
    return store.dispatch(actions.fetchPatients())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe('fetchDoctors', () => {
  beforeEach(() => {
    fetchMock.restore();
    store.clearActions();
  });
  it('creates FETCH_DOCTORS_REQUEST and afterwards FETCH_DOCTORS_SUCCESS with the correct payload when fetching is successful', () => {
    fetchMock.getOnce(sampleDataLocation, {
      body: mockState,
      headers: mockResponseHeaders,
    });
    const expectedActions = [
      { type: types.FETCH_DOCTORS_REQUEST },
      { type: types.FETCH_DOCTORS_SUCCESS, payload: mockState.doctors },
    ];
    return store.dispatch(actions.fetchDoctors())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it('creates FETCH_DOCTORS_REQUEST and afterwards FETCH_DOCTORS_FAILURE with the correct payload when fetching failed', () => {
    fetchMock.getOnce(sampleDataLocation, {
      throws: mockError,
    });
    const expectedActions = [
      { type: types.FETCH_DOCTORS_REQUEST },
      { type: types.FETCH_DOCTORS_FAILURE, payload: mockError },
    ];
    return store.dispatch(actions.fetchDoctors())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe('fetchRooms', () => {
  beforeEach(() => {
    fetchMock.restore();
    store.clearActions();
  });
  it('creates FETCH_ROOMS_REQUEST and afterwards FETCH_ROOMS_SUCCESS with the correct payload when fetching is successful', () => {
    fetchMock.getOnce(sampleDataLocation, {
      body: mockState,
      headers: mockResponseHeaders,
    });
    const expectedActions = [
      { type: types.FETCH_ROOMS_REQUEST },
      { type: types.FETCH_ROOMS_SUCCESS, payload: mockState.rooms },
    ];
    return store.dispatch(actions.fetchRooms())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it('creates FETCH_ROOMS_REQUEST and afterwards FETCH_ROOMS_FAILURE with the correct payload when fetching failed', () => {
    fetchMock.getOnce(sampleDataLocation, {
      throws: mockError,
    });
    const expectedActions = [
      { type: types.FETCH_ROOMS_REQUEST },
      { type: types.FETCH_ROOMS_FAILURE, payload: mockError },
    ];
    return store.dispatch(actions.fetchRooms())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe('fetchStudies', () => {
  beforeEach(() => {
    fetchMock.restore();
    store.clearActions();
  });
  it('creates FETCH_STUDIES_REQUEST and afterwards FETCH_STUDIES_SUCCESS with the correct payload when fetching is successful', () => {
    fetchMock.getOnce(sampleDataLocation, {
      body: mockState,
      headers: mockResponseHeaders,
    });

    // because of the server response dates will be in JSON
    const expectedActions = [
      { type: types.FETCH_STUDIES_REQUEST },
      {
        type: types.FETCH_STUDIES_SUCCESS,
        payload: {
          ...mockState.studies,
          data: [{
            ...mockStudy,
            startTime: mockStudy.startTime.toJSON(),
          }],
        },
      }];
    return store.dispatch(actions.fetchStudies())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it('creates FETCH_STUDIES_REQUEST and afterwards FETCH_STUDIES_FAILURE with the correct payload when fetching failed', () => {
    fetchMock.getOnce(sampleDataLocation, {
      throws: mockError,
    });
    const expectedActions = [
      { type: types.FETCH_STUDIES_REQUEST },
      { type: types.FETCH_STUDIES_FAILURE, payload: mockError },
    ];
    return store.dispatch(actions.fetchStudies())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});

describe('addPatient', () => {
  beforeEach(() => {
    store.clearActions();
  });
  it('creates ADD_PATIENT_REQUEST and afterwards ADD_PATIENT_SUCCESS with the correct payload when request is successful', () => {
    const expectedActions = [
      { type: types.ADD_PATIENT_REQUEST },
      { type: types.ADD_PATIENT_SUCCESS, payload: mockPatient },
    ];
    store.dispatch(actions.addPatient(mockPatient));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('addDoctor', () => {
  beforeEach(() => {
    store.clearActions();
  });
  it('creates ADD_DOCTOR_REQUEST and afterwards ADD_DOCTOR_SUCCESS with the correct payload when request is successful', () => {
    const expectedActions = [
      { type: types.ADD_DOCTOR_REQUEST },
      { type: types.ADD_DOCTOR_SUCCESS, payload: mockDoctor },
    ];
    store.dispatch(actions.addDoctor(mockDoctor));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('addRoom', () => {
  beforeEach(() => {
    store.clearActions();
  });
  it('creates ADD_ROOM_REQUEST and afterwards ADD_ROOM_SUCCESS with the correct payload when request is successful', () => {
    const expectedActions = [
      { type: types.ADD_ROOM_REQUEST },
      { type: types.ADD_ROOM_SUCCESS, payload: mockRoom },
    ];
    store.dispatch(actions.addRoom(mockRoom));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('addRoom', () => {
  beforeEach(() => {
    store.clearActions();
  });
  it('creates ADD_ROOM_REQUEST and afterwards ADD_ROOM_SUCCESS with the correct payload when request is successful', () => {
    const expectedActions = [
      { type: types.ADD_ROOM_REQUEST },
      { type: types.ADD_ROOM_SUCCESS, payload: mockState.rooms.data[0] },
    ];
    store.dispatch(actions.addRoom(mockRoom));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('addStudy', () => {
  beforeEach(() => {
    store.clearActions();
  });
  it('creates ADD_STUDY_REQUEST and afterwards ADD_STUDY_SUCCESS with the correct payload when request is successful', () => {
    const expectedActions = [
      { type: types.ADD_STUDY_REQUEST },
      { type: types.ADD_STUDY_SUCCESS, payload: mockStudy },
    ];
    store.dispatch(actions.addStudy(mockStudy));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('updateProcedure', () => {
  beforeEach(() => {
    store.clearActions();
  });
  it('creates UPDATE_PROCEDURE_REQUEST and afterwards UPDATE_PROCEDURE_SUCCESS with the correct payload when request is successful', () => {
    const expectedActions = [
      { type: types.UPDATE_PROCEDURE_REQUEST },
      { type: types.UPDATE_PROCEDURE_SUCCESS, payload: mockStudy },
    ];
    store.dispatch(actions.updateProcedure(mockStudy));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
