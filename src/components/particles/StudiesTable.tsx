import React, { ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { updateProcedure } from '../../store/actions';
import { useStylesTable } from '../useStyles';
import * as types from '../../utilities/interfaces';
import HeadingWrapper from '../elements/HeadingWrapper';

/**
 * Component that produces a table for each status ('Planned', 'In Progress'
 * and 'Finished')
 */
export default function StudiesTable(
  { status, dataTestId }: { status: string; dataTestId?: string },
): JSX.Element {
  const classes = useStylesTable();
  const dispatch = useDispatch();
  const store: types.IState = useSelector((state: types.IState) => state);
  const selectedStudies: types.IStudy[] = store
    .studies.data.filter((study: types.IStudy) => (
      study.status === status
    ));

  const findPatient = (patientId: string): string => {
    const foundPatient: types.IPatient | undefined = store
      .patients.data.find((patient: types.IPatient) => (
        patient.id === patientId
      ));
    return (foundPatient !== undefined) ? foundPatient.name : '';
  };

  const handleStatusChange = (study: types.IStudy) => (
    event: ChangeEvent<{ value: unknown }>,
  ): void => {
    event.preventDefault();
    if (event.target.value === undefined) return;
    dispatch(updateProcedure({
      ...study,
      status: event.target.value as types.StatusTypes,
    }));
  };

  return (
    <>
      <HeadingWrapper pt="15px">
        <Typography variant="h6" align="left">
          {status}
        </Typography>
      </HeadingWrapper>
      <TableContainer
        component={Paper}
        data-testid={dataTestId}
      >
        <Table
          className={classes.table}
          aria-label="table of studies"
          data-testid="studies-table"
        >
          <TableHead
            data-testid="studies-table-head"
          >
            <TableRow>
              <TableCell>
                Description
              </TableCell>
              <TableCell align="right">
                Patient
              </TableCell>
              <TableCell align="right">
                Status
              </TableCell>
              <TableCell align="right">
                Start Time
              </TableCell>
              <TableCell align="right">
                End Time
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody data-testid="studies-table-body">
            {selectedStudies.map(
              (study: types.IStudy): JSX.Element => (
                <TableRow key={study.id}>
                  <TableCell component="th" scope="row">
                    {study.description}
                  </TableCell>
                  <TableCell align="right">
                    {findPatient(study.patientId)}
                  </TableCell>
                  <TableCell align="right">
                    <Select
                      labelId="patient-gender"
                      id="patient-gender-select"
                      value={study.status}
                      onChange={handleStatusChange(study)}
                      displayEmpty
                    >
                      <MenuItem value="Planned">
                        Planned
                      </MenuItem>
                      <MenuItem value="In Progress">
                        In Progress
                      </MenuItem>
                      <MenuItem value="Finished">
                        Finished
                      </MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell align="right">
                    {moment(study.startTime).format('HH:mm')}
                  </TableCell>
                  <TableCell align="right">
                    {
                      study.endTime
                        ? moment(study.endTime).format('HH:mm')
                        : ''
                    }
                  </TableCell>
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
