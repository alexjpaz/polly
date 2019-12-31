import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if(!navigator || !navigator.mediaDevices) {
      console.warn("Could not detect media devices. This may be because the application was not loaded over a secure context (e.g. https). https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia#Security");
      setOpen(true);

      return;
    }

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(() => {
        setOpen(false);
      })
      .catch(() => {
        setOpen(true);
      })
    ;

    return () => {};
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
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
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography variant="h5">
                This application requires access to your microphone. 
            </Typography>
            <Typography variant="body1">

            </Typography>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
