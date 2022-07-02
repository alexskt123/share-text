import { useEffect, useState, Fragment } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import { useUser } from '../hooks/useUser';
import axios from 'axios';
import CustomSnackbar from '../components/CustomSnackbar';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function ToolPanel({ inputText, clearText }) {
  const [user, _setUser] = useUser();
  const [defaultText, setDefaultText] = useState('');
  const [emailAlert, setEmailAlert] = useState(false);
  const [alertProps, setAlertProps] = useState({ message: '', severity: 'success', autoHideDuration: 2000 });
  const uid = user?.uid;

  const copyText = () => {
    setAlertProps({ ...alertProps, message: 'Copied!' });
    setEmailAlert(true);
  };

  const handleSend = () => {
    uid && user?.email && axios.post('/api/email', null,
      { params: { to: user.email, content: defaultText } }
    );

    setAlertProps({ ...alertProps, message: `Email sent to ${user?.email}!` });
    setEmailAlert(true);
  };

  useEffect(() => {
    setDefaultText(inputText);
  }, [inputText]);

  //template
  return (
    <Fragment>
      {
        <Grid container spacing={2} sx={{ marginTop: '1px' }}>
          <Grid item>
            <CopyToClipboard text={defaultText}
              onCopy={() => copyText()}>
              <Button size='small' sx={{ boxShadow: 3, color: 'black' }} variant="text" startIcon={<ContentCopyIcon />}>
                {'Copy'}
              </Button>
            </CopyToClipboard>
          </Grid>
          <Grid item>
            <Button size='small' sx={{ boxShadow: 3, color: 'red' }} onClick={() => clearText()} variant="text" startIcon={<DeleteIcon />}>
              {'Clear'}
            </Button>
          </Grid>
          <Grid item>
            <Button size='small' sx={{ boxShadow: 3 }} onClick={() => handleSend()} variant="text" endIcon={<SendIcon />}>
              {'Send'}
            </Button>
          </Grid>
        </Grid>
      }
      <CustomSnackbar alert={emailAlert} setAlert={setEmailAlert} alertProps={alertProps} />
    </Fragment>
  );
}
