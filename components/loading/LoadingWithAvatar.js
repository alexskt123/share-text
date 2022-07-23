import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

export default function LoadingWithAvatar() {
  return (
    <Container>
      <Stack spacing={1} sx={{ paddingTop: '10px' }}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={'inherit'} height={'400px'} />
      </Stack>
    </Container>
  );
}
