import { useState, Fragment } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useUser } from '../hooks/useUser';
import CustomSnackbar from '../components/CustomSnackbar';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useProfile } from '../lib/firebase';
import { useSelector } from 'react-redux';
import SendEmail from './tool/SendEmail';

export default function ToolPanel({ clearText }) {
  const defaultText = useSelector((state) => state.input.text);

  const [user] = useUser();
  const [emailAlert, setEmailAlert] = useState(false);
  const [alertProps, setAlertProps] = useState({ message: '', severity: 'success', autoHideDuration: 2000 });
  const uid = user?.uid;
  const profile = useProfile(uid);
  const whatsappPhone = profile?.whatsapp?.find(x => x.active)?.phone;

  const copyText = () => {
    setAlertProps({ ...alertProps, message: 'Copied!' });
    setEmailAlert(true);
  };

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
            <SendEmail sx={{ boxShadow: 3 }} text={defaultText} showIcon={true}/>
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
