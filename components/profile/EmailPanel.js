import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useProfile } from '../../lib/firebase';
import { useUser } from '../../hooks/useUser';

export default function EmailPanel() {

  const [user, _setUser] = useUser();
  const userProfile = useProfile(user?.uid);

  return (
    <Stack direction="row" spacing={1}>
      {
        userProfile?.email.map((item, idx) => {
          return <Chip key={idx} label={item.to} color={item?.active ? 'success' : undefined} variant={"outlined"} />
        })
      }
    </Stack>
  );
}
