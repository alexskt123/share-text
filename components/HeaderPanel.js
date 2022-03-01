import { Fragment } from 'react';
import useTypingEffect from 'use-typing-effect';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import UserAvatar from '../components/UserAvatar';

export default function HeaderPanel() {
  const loadingText = useTypingEffect(['Type Below...']);

  //template
  return (
    <Fragment>
      {
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
      }
    </Fragment>
  )
}

