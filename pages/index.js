import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import useTypingEffect from 'use-typing-effect';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { use100vh } from 'react-div-100vh';

export default function Home() {
  const loadingText = useTypingEffect(['Type Here...']);
  const height = use100vh();

  //template
  return (
    height && <Container sx={{ height: height }}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ width: 1, height: height }}
      >
        <Chip
          icon={<TextSnippetIcon />}
          label={loadingText}
          sx={{ marginTop: '10px' }}
          color="warning"
          />
        <TextField
          id="outlined-multiline-static"
          sx={{ marginTop: '10px', width: 1 }}
          hiddenLabel
          multiline
          rows={15}
          defaultValue=""
        />
      </Box>
    </Container>

  )
}

