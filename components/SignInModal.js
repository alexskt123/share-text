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
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        // const userResult = result.user;

        handleClose();
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
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
