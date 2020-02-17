/**
 * All interfaces and types for the application other than strictly for testing.
 */

export interface IAction {
  type: string,
  payload?: IStudy | IRoom | IPatient |
  IDoctor | IDoctorsState | IStudiesState |
  IStudy[] | IDoctor[] | Error | string | any,
}

// Manipulated verison of the AppointmentModel
// type from the @devexpress/dx-react-scheduler npm package.
// It is adjusted for the fact that procedures can be scheduled without an end date.
export interface IAppointmentModel {
  startDate: SchedulerDateTime,
  endDate?: SchedulerDateTime,
  title?: string,
  allDay?: boolean,
  id?: number | string,
  rRule?: string | undefined,
  exDate?: string | undefined,
  [propertyName: string]: any,
}

export interface IData {
  doctors: IDoctor[],
  patients: IPatient[],
  studies: IStudy[],
  rooms: IRoom[],
}

export interface IDoctor {
  id: string,
  name: string,
}

export interface IDoctorsState {
  loading: boolean,
  error: string,
  data: IDoctor[],
}

export interface IHeadingWrapperProps {
  pb?: string,
  pt?: string,
  px?: string,
}

export interface IPatient {
  id: string,
  name: string,
  gender?: GenderTypes,
  birthday?: Date,
}

export interface IPatientsState {
  loading: boolean,
  error: string,
  data: IPatient[],
}

export interface IPatientForm {
  name: string,
  gender: GenderTypes | undefined,
  birthday: Date | null,
}

export interface IRoom {
  id: string,
  name: string,
}

export interface IRoomsState {
  loading: boolean,
  error: string,
  data: IRoom[],
}

export interface IState {
  doctors: IDoctorsState,
  patients: IPatientsState,
  rooms: IRoomsState,
  studies: IStudiesState,
}

export interface IStudy {
  id: string,
  patientId: string,
  description: string,
  status: StatusTypes,
  startTime: Date,
  endTime: Date | null,
}

export interface IStudiesState {
  loading: boolean,
  error: string,
  data: IStudy[],
}

export interface IScheduleStudy {
  id: string,
  patientId: string | undefined,
  description: string,
  status: StatusTypes,
  date: Date | null,
  startTime: Date | null,
  endTime: Date | null,
}

export type GenderTypes = 'Male' | 'Female' | 'Other'
export type StatusTypes = 'Planned' | 'In Progress' | 'Finished'

// see IAppointmentModel for comment.
export type SchedulerDateTime = Date | number | string
