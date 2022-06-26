import { Fragment, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { deleteArchiveText } from '../lib/firebase';
import CopyToClipboard from 'react-copy-to-clipboard';
import CustomSnackbar from './CustomSnackbar';
import moment from 'moment';
import { GLOBAL_DATETIME_FORMAT } from '../config';

export default function BasicCard({ title, text, createdAt, id }) {

  const createdAtFormatted = moment(createdAt).format(GLOBAL_DATETIME_FORMAT);

  const [emailAlert, setEmailAlert] = useState(false);
  const [alertProps, setAlertProps] = useState({ message: '', severity: 'success', autoHideDuration: 2000 });

  const deleteArchive = async (docID) => {
    deleteArchiveText(docID);

  }

  const copyText = () => {
    setAlertProps({ ...alertProps, message: `Copied!` });
    setEmailAlert(true);
  }

  return (
    <Fragment>
      <Card sx={{ minWidth: 250, maxWidth: 500 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Typography sx={{ background: '#f2f4f7', padding: '5px'}} variant="body2">
            {text}
          </Typography>
          <Typography sx={{ fontSize: 10, marginTop: '10px' }} color="text.secondary">
            {createdAtFormatted}
          </Typography>
        </CardContent>
        <CardActions>
          <CopyToClipboard text={text}
            onCopy={() => copyText()}>
            <Button size="small" sx={{ color: 'blue' }}>{'Copy'}</Button>
          </CopyToClipboard>
          <Button size="small" sx={{ color: 'red' }} onClick={() => deleteArchive(id)}>{'Delete'}</Button>
        </CardActions>
      </Card>
      <CustomSnackbar alert={emailAlert} setAlert={setEmailAlert} alertProps={alertProps} />
    </Fragment>
  );
}
