import { useState, useEffect, Fragment, forwardRef } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function CustomSnackbar({ alert, setAlert, message }) {
  const [open, setOpen] = useState(false);

  const handleClose = (_event) => {
    setOpen(false);
    setAlert(false);
  };

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  useEffect(() => {
    alert && setOpen(true);
  }, [alert])
  
  //template
  return (
    <Fragment>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={(e) => handleClose(e)}
      >
        <Alert severity="success">
          {message}
        </Alert>
      </Snackbar>
    </Fragment>
  )
}

