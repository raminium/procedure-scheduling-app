import React from 'react';
import { useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { useStylesTable } from '../useStyles';
import { IState, IPatient } from '../../utilities/interfaces';
import TemplateContainer from '../elements/TemplateContainer';
import HeadingWrapper from '../elements/HeadingWrapper';
import AddPatientForm from '../particles/AddPatientForm';
import ModalWrapper from '../elements/ModalWrapper';

export default function Patients(): JSX.Element {
  const classes = useStylesTable();
  const patients: IPatient[] = useSelector((state: IState) => state.patients.data);

  return (
    <TemplateContainer>
      <HeadingWrapper>
        <Typography variant="h4" align="left">
          Patients
        </Typography>
        <ModalWrapper form={<AddPatientForm />}>
          <IconButton
            color="primary"
            data-testid="patients-add-button"
          >
            <AddIcon fontSize="large" />
          </IconButton>
        </ModalWrapper>
      </HeadingWrapper>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          aria-label="table of patients"
          data-testid="patients-table"
        >
          <TableHead data-testid="patients-table-head">
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Birthday</TableCell>
            </TableRow>
          </TableHead>
          <TableBody data-testid="patients-table-body">
            {
              patients.map((patient: IPatient): JSX.Element => (
                <TableRow key={patient.id}>
                  <TableCell component="th" scope="row">
                    {patient.name}
                  </TableCell>
                  <TableCell align="right">
                    {patient.gender}
                  </TableCell>
                  <TableCell align="right">
                    {
                      patient.birthday !== undefined
                        ? moment(patient.birthday).format('Do MMM YYYY')
                        : ''
                    }
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </TemplateContainer>
  );
}
