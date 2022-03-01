import { useEffect, useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import useTypingEffect from 'use-typing-effect';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import { use100vh } from 'react-div-100vh';
import { db, getText, writeText } from '../lib/firebase';
import UserAvatar from '../components/UserAvatar';
import { debounce } from 'debounce'
import { useUser } from '../hooks/useUser';
import axios from 'axios'
import CustomSnackbar from '../components/CustomSnackbar';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function Home() {
  const loadingText = useTypingEffect(['Type Below...']);
  const height = use100vh();
  const [user, _setUser] = useUser();
  const [defaultText, setDefaultText] = useState("");
  const [emailAlert, setEmailAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const uid = user?.uid;

  useEffect(() => {

    if (uid) {
      const text = getText(db, uid);
      text.then(result => result?.text && setDefaultText(result?.text));
    }
  }, [user])

  const handleChange = debounce(async (e) => {
    uid && e.target.value && writeText(uid, e.target.value);
  }, 1000)

  const changeText = (e) => {
    setDefaultText(e.target.value);
    handleChange(e);
  }

  const copyText = () => {
    setAlertMsg(`Copied!`);
    setEmailAlert(true);
  }

  const clearText = () => {
    uid && writeText(uid, "");
    setDefaultText("");
  }

  const handleSend = () => {
    uid && user?.email && axios.post('/api/email', null,
      { params: { to: user.email, content: defaultText } }
    )

    setAlertMsg(`Email sent to ${user?.email}!`);
    setEmailAlert(true);
  }

  //template
  return (
    <Fragment>
      {
        height && <Container sx={{ height: height }}>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ width: 1, height: height }}
          >
            <Grid container spacing={1}>
              <Grid item sx={{ marginTop: '8px' }}>
                <UserAvatar />
              </Grid>
              <Grid item>
                <Chip
                  icon={<TextSnippetIcon />}
                  label={loadingText}
                  sx={{ marginTop: '10px', boxShadow: 3 }}
                  color="warning"
                />
              </Grid>
            </Grid>
            <TextField
              id="outlined-multiline-static"
              sx={{ marginTop: '10px', width: 1, boxShadow: 3 }}
              hiddenLabel
              multiline
              rows={15}
              value={defaultText}
              onChange={e => changeText(e)}
            />
            <Grid container spacing={2} sx={{ marginTop: '1px' }}>
              <Grid item>
                <CopyToClipboard text={defaultText}
                  onCopy={() => copyText()}>
                  <Button sx={{ boxShadow: 3, color: 'black' }} variant="text" startIcon={<ContentCopyIcon />}>
                    Copy
                  </Button>
                </CopyToClipboard>
              </Grid>
              <Grid item>
                <Button sx={{ boxShadow: 3, color: 'red' }} onClick={() => clearText()} variant="text" startIcon={<DeleteIcon />}>
                  Clear
                </Button>
              </Grid>
              <Grid item>
                <Button sx={{ boxShadow: 3 }} onClick={() => handleSend()} variant="text" endIcon={<SendIcon />}>
                  Send
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      }
      <CustomSnackbar alert={emailAlert} setAlert={setEmailAlert} message={alertMsg} />
    </Fragment>
  )
}

