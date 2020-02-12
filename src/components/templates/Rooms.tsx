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
import { IState, IRoom } from '../../utilities/interfaces';
import TemplateContainer from '../elements/TemplateContainer';
import HeadingWrapper from '../elements/HeadingWrapper';
import AddRoomForm from '../particles/AddRoomForm';
import ModalWrapper from '../elements/ModalWrapper';

export default function Doctors(): JSX.Element {
  const classes = useStylesTable();
  const rooms: IRoom[] = useSelector((state: IState) => state.rooms.data);

  return (
    <TemplateContainer>
      <HeadingWrapper>
        <Typography variant="h4" align="left">
          Rooms
        </Typography>
        <ModalWrapper form={<AddRoomForm />}>
          <IconButton
            color="primary"
            data-testid="rooms-add-button"
          >
            <AddIcon fontSize="large" />
          </IconButton>
        </ModalWrapper>
      </HeadingWrapper>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          aria-label="table of ORs"
          data-testid="rooms-table"
        >
          <TableHead data-testid="rooms-table-head">
            <TableRow>
              <TableCell>Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody data-testid="rooms-table-body">
            {
              rooms.map((room: IRoom): JSX.Element => (
                <TableRow key={room.id}>
                  <TableCell component="th" scope="row">
                    {room.name}
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
