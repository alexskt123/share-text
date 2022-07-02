import { useState, Fragment } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArchiveIcon from '@mui/icons-material/Archive';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CustomSnackbar from './CustomSnackbar';
import { Box, TextField } from '@mui/material';
import moment from 'moment';
import { archive } from '../lib/firebase';
import { GLOBAL_DATETIME_FORMAT } from '../config';

export default function ToolPanel({ inputText, uid }) {
  const nowUnixTime = moment().unix() * 1000;
  const nowTime = moment(nowUnixTime).format(GLOBAL_DATETIME_FORMAT);

  const [titleText, setTitleText] = useState(nowTime);
  const [emailAlert, setEmailAlert] = useState(false);
  const [alertProps, setAlertProps] = useState({ message: '', severity: 'success', autoHideDuration: 2000 });

  const archiveText = () => {
    setAlertProps({ ...alertProps, message: 'Archived!' });
    setEmailAlert(true);
    archive(uid, { title: titleText, text: inputText, uid, createdAt: nowUnixTime });
  };

  const changeText = (e) => {
    setTitleText(e.target.value);
  };

  //template
  return (
    <Fragment>
      {
        <Grid container spacing={2} sx={{ marginTop: '1px', alignItems: 'flex-end' }}>
          <Grid item>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <ListAltIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField sx={{ width: '200px' }} id="input-with-sx" label="Title" variant="standard" value={titleText} onChange={e => changeText(e)} />
            </Box>
          </Grid>
          <Grid item>
            <Button size='small' sx={{ boxShadow: 3, color: 'green' }} onClick={() => archiveText()} variant="text" startIcon={<ArchiveIcon />}>
              {'Archive'}
            </Button>
          </Grid>
        </Grid>
      }
      <CustomSnackbar alert={emailAlert} setAlert={setEmailAlert} alertProps={alertProps} />
    </Fragment>
  );
}

