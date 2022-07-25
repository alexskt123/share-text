import { Fragment } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { use100vh } from 'react-div-100vh';
import ProfilePanel from '../components/profile/ProfilePanel';
import HeaderPanel from '../components/HeaderPanel';

export default function Profile() {

  const height = use100vh();

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
            <Box sx={{ marginLeft: '5px', marginTop: '15px' }}>
              <ProfilePanel />
            </Box>
          </Box>
        </Container>
      }
    </Fragment>
  );
}