import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useSelector } from 'react-redux';
import { IState } from '../../utilities/interfaces';
import { useStylesModal } from '../useStyles';

/**
 * The ModalWrapper component serves to implement modal forms and buttons
 * seperately.
 */
export default function ModalWrapper(
  { children, form }:
  {children: JSX.Element ; form: JSX.Element},
): JSX.Element {
  const classes = useStylesModal();
  const store: IState = useSelector((state: IState) => state);
  const [open, setOpen] = React.useState(false);

  const handleOpen = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
  };

  /**
   * The modal will close through changes in the store. This way once a form
   * is submitted it disappears.
   */
  React.useEffect((): void => {
    handleClose();
  }, [store]);

  return (
    <div
      data-testid="modal-wrapper"
    >
      <div
        tabIndex={-1}
        role="button"
        onKeyDown={handleOpen}
        onClick={handleOpen}
        data-testid="modal-button-wrapper"
      >
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        data-testid="modal"
      >
        <Fade in={open}>
          {form}
        </Fade>
      </Modal>
    </div>
  );
}
