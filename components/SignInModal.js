import { Fragment } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import GoogleIcon from '@mui/icons-material/Google';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Grid from '@mui/material/Grid';
import { getAuth, GoogleAuthProvider, signInWithPopup } from '../lib/firebase';
import Divider from '@mui/material/Divider';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const SignInModal = ({ show, handleClose }) => {

  const sigInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then(() => {
        handleClose();
      });
  };

  return (
    <Fragment>
      <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Sign In
          </Typography>
          <Divider />
          <Grid container spacing={2} sx={{ marginTop: '5px'}}>
            <Grid item>
              <GoogleIcon sx={{ color: 'success.main', cursor: 'pointer' }} onClick={()=> sigInWithGoogle()} />
            </Grid>
            <Grid item>
              <MailOutlineIcon sx={{ color: 'secondary.main', cursor: 'pointer' }}/>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Fragment>
  );
};

export default SignInModal;
