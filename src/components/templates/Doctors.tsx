import React from 'react';
import { useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { useStylesTable } from '../useStyles';
import { IState, IDoctor } from '../../utilities/interfaces';
import TemplateContainer from '../elements/TemplateContainer';
import HeadingWrapper from '../elements/HeadingWrapper';
import AddDoctorForm from '../particles/AddDoctorForm';
import ModalWrapper from '../elements/ModalWrapper';

export default function Doctors(): JSX.Element {
  const classes = useStylesTable();
  const doctors: IDoctor[] = useSelector((state: IState) => state.doctors.data);

  return (
    <TemplateContainer>
      <HeadingWrapper>
        <Typography variant="h4" align="left">
          Doctors
        </Typography>
        <ModalWrapper form={<AddDoctorForm />}>
          <IconButton
            color="primary"
            data-testid="doctors-add-button"
          >
            <AddIcon fontSize="large" />
          </IconButton>
        </ModalWrapper>
      </HeadingWrapper>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          aria-label="table of doctors"
          data-testid="doctors-table"
        >
          <TableHead
            data-testid="doctors-table-head"
          >
            <TableRow>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            data-testid="doctors-table-body"
          >
            {
              doctors.map((doctor: IDoctor): JSX.Element => (
                <TableRow key={doctor.id}>
                  <TableCell component="th" scope="row">
                    {doctor.name}
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
