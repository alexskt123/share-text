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
        <Grid container spacing={2}>
          <Grid item>
            <Chip
              icon={<TextSnippetIcon />}
              label={loadingText}
              sx={{ marginTop: '10px' }}
              color="warning"
            />
          </Grid>
        </Grid>
        <TextField
          id="outlined-multiline-static"
          sx={{ marginTop: '10px', width: 1 }}
          hiddenLabel
          multiline
          rows={15}
          defaultValue=""
        />
        <Grid container spacing={2} sx={{ marginTop: '1px' }}>
          <Grid item>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
              Clear
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>

  )
}

