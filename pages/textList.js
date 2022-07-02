import { Fragment } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { use100vh } from 'react-div-100vh';
import ArchiveCard from '../components/ArchiveCard';
import HeaderPanel from '../components/HeaderPanel';
import { Grid } from '@mui/material';
import { useUser } from '../hooks/useUser';
import { useArchiveText } from '../lib/firebase';

export default function TextList() {

  const height = use100vh();
  const [user, _setUser] = useUser();
  const archiveTextList = useArchiveText(user?.uid);

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
            <Grid container spacing={2} sx={{ marginTop: '1px' }}>
              {archiveTextList?.map((item, idx) => {
                return (
                  <Grid item key={idx}>
                    <ArchiveCard {...item} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
      }
    </Fragment>
  );
}