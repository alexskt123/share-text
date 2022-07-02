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

export default function Home() {
  const height = use100vh();
  const [user, _setUser] = useUser();
  const [defaultText, setDefaultText] = useState('');
  const uid = user?.uid;

  const text = useText(uid);
  useEffect(() => {
    text && setDefaultText(text?.text);
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
          </Box>
        </Container>
      }
    </Fragment>
  );
}
