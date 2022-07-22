import { useState, useEffect, Fragment, forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function CustomSnackbar({ alert, setAlert, alertProps }) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setAlert(false);
  };

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  useEffect(() => {
    alert && setOpen(true);
  }, [alert]);

  //template
  return (
    <Fragment>
      {alertProps && <Snackbar
        open={open}
        autoHideDuration={alertProps.autoHideDuration}
        onClose={(e) => handleClose(e)}
      >
        <Alert severity={alertProps.severity}>
          {alertProps.message}
        </Alert>
      </Snackbar>}
    </Fragment>
  );
}

