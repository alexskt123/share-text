import { useEffect, useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { use100vh } from 'react-div-100vh';
import { useText, writeText } from '../lib/firebase';
import { debounce } from 'debounce';
import { useUser } from '../hooks/useUser';
import ArchivePanel from '../components/ArchivePanel';
import ToolPanel from '../components/ToolPanel';
import HeaderPanel from '../components/HeaderPanel';
import LoadingOverlay from 'react-loading-overlay';
LoadingOverlay.propTypes = undefined;

export default function Home() {
  const height = use100vh();
  const [user, _setUser] = useUser();
  const [defaultText, setDefaultText] = useState('');
  const uid = user?.uid;

  const [isLoading, setIsLoading] = useState(uid ? true : false);

  const text = useText(uid);
  useEffect(() => {
    if (text) {
      setDefaultText(text?.text);
      setIsLoading(false);
    }
  }, [text]);

  const handleChange = debounce(async (e) => {
    uid && e.target.value && writeText(uid, e.target.value);
  }, 1000);

  const changeText = (e) => {
    setDefaultText(e.target.value);
    handleChange(e);
  };

  const clearText = () => {
    uid && writeText(uid, '');
    setDefaultText('');
  };

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
            <HeaderPanel />
            <LoadingOverlay
              active={isLoading}
              spinner
              text='Loading your content...'
            >
              <TextField
                id="outlined-multiline-static"
                sx={{ marginTop: '10px', width: 1, boxShadow: 3 }}
                hiddenLabel
                multiline
                rows={15}
                value={defaultText}
                onChange={e => changeText(e)}
              />
              <ToolPanel inputText={defaultText} clearText={clearText} />
              <ArchivePanel inputText={defaultText} uid={uid} />
            </LoadingOverlay>
          </Box>
        </Container>
      }
    </Fragment>
  );
}
