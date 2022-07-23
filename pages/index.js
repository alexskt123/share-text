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
import { useDispatch, useSelector } from 'react-redux';
import { setText } from '../store/feature/inputSlice';
import LoadingOverlay from 'react-loading-overlay';
LoadingOverlay.propTypes = undefined;

export default function Home() {
  const height = use100vh();
  const [user] = useUser();
  const uid = user?.uid;

  const defaultText = useSelector((state) => state.input.text);
  const dispatch = useDispatch();
  const text = useText(uid);

  const [isLoading, setIsLoading] = useState(uid ? true : false);

  useEffect(() => {
    if (text) {
      dispatch(setText(text?.text));
      setIsLoading(false);
    }
  }, [text, dispatch]);

  const handleChange = debounce(async (e) => {
    uid && e.target.value && writeText(uid, e.target.value);
  }, 1000);

  const changeText = (e) => {
    dispatch(setText(e.target.value));
    handleChange(e);
  };

  const clearText = () => {
    uid && writeText(uid, '');
    dispatch(setText(''));
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
            <ToolPanel clearText={clearText} />
            <ArchivePanel uid={uid} />
            </LoadingOverlay>
          </Box>
        </Container>
      }
    </Fragment>
  );
}
