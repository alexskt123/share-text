import { useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useUser } from '../../hooks/useUser';
import CustomSnackbar from '../CustomSnackbar';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useProfile } from '../../lib/firebase';

export default function SendEmail({ sx, text, showIcon }) {
  const title = useSelector((state) => state.input.title);

  const [user] = useUser();
  const [emailAlert, setEmailAlert] = useState(false);
  const [alertProps, setAlertProps] = useState({ message: '', severity: 'success', autoHideDuration: 2000 });
  const uid = user?.uid;
  const profile = useProfile(uid);
  const userEmail = profile?.email?.find(x => x.active)?.to;

  const handleSend = () => {
    const targetEmail = userEmail || user?.email;


    uid && targetEmail && axios.post('/api/email', null,
      { params: { to: userEmail || user.email, content: text, title } }
    );

    setAlertProps({ ...alertProps, message: `Email sent to ${targetEmail}!` });
    setEmailAlert(true);
  };

  return <>
    <Button size='small' sx={{ ...sx }} onClick={() => handleSend()} variant="text" endIcon={showIcon && <SendIcon />}>
      {'Send'}
    </Button>
    <CustomSnackbar alert={emailAlert} setAlert={setEmailAlert} alertProps={alertProps} />
  </>;
}