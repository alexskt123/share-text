import { useEffect, useState, Fragment } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useUser } from '../hooks/useUser';
import axios from 'axios';
import CustomSnackbar from '../components/CustomSnackbar';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useProfile } from '../lib/firebase';

export default function ToolPanel({ inputText, clearText }) {
  const [user, _setUser] = useUser();
  const [defaultText, setDefaultText] = useState('');
  const [emailAlert, setEmailAlert] = useState(false);
  const [alertProps, setAlertProps] = useState({ message: '', severity: 'success', autoHideDuration: 2000 });
  const uid = user?.uid;
  const profile = useProfile(uid);
  const whatsappPhone = profile?.whatsapp?.find(x => x.active)?.phone;
  const userEmail = profile?.email?.find(x => x.active)?.to;

  const copyText = () => {
    setAlertProps({ ...alertProps, message: 'Copied!' });
    setEmailAlert(true);
  };

  const handleSend = () => {
    const targetEmail = userEmail || user?.email;

    uid && targetEmail && axios.post('/api/email', null,
      { params: { to: userEmail || user.email, content: defaultText } }
    );

    setAlertProps({ ...alertProps, message: `Email sent to ${targetEmail}!` });
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
          <Grid item>
            <Button size='small' sx={{ boxShadow: 3, color: 'green' }} variant="text" endIcon={<WhatsAppIcon />} disabled={!whatsappPhone}>
              <a href={`https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${defaultText}`}>
                {'Share'}
              </a>
            </Button>
          </Grid>
        </Grid>
      }
      <CustomSnackbar alert={emailAlert} setAlert={setEmailAlert} alertProps={alertProps} />
    </Fragment>
  );
}
