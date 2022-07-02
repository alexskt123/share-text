import { Fragment } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useProfile, writeProfile } from '../../lib/firebase';
import { useUser } from '../../hooks/useUser';
import { fabStyle } from '../../config';
import { fireProfileModal } from '../../lib/swal';
import DeleteIcon from '@mui/icons-material/Delete';

export default function EmailPanel() {

  const [user, _setUser] = useUser();
  const userProfile = useProfile(user?.uid);

  const handleAdd = async () => {
    const input = await fireProfileModal({
      title: 'Add email address',
      input: 'email',
      inputPlaceholder: 'Enter your email address'
    });

    if (input && input !== '') {
      await writeProfile(user?.uid, {
        ...userProfile,
        email: [
          ...(userProfile?.email || []),
          {
            to: input,
            active: false
          }
        ]
      });
    }

  };

  const handleClick = async (e) => {
    const newEmailList = (userProfile?.email || []).map(item => {
      return {
        ...item,
        active: item.to === e ? true : false
      };
    });

    await writeProfile(user?.uid, {
      ...userProfile,
      email: [
        ...newEmailList
      ]
    });
  };

  const handleDelete = async (e) => {
    await writeProfile(user?.uid, {
      ...userProfile,
      email: userProfile?.email.filter(x => x.to !== e)
    });
  };

  return (
    <Fragment>
      <Stack direction="row" spacing={1}>
        {
          userProfile?.email?.map((item, idx) => {
            return <Chip
              key={idx}
              label={item.to}
              color={item?.active ? 'success' : undefined}
              variant={'outlined'}
              onClick={() => handleClick(item.to)}
              onDelete={() => handleDelete(item.to)}
              deleteIcon={<DeleteIcon />}
            />;
          })
        }
      </Stack>
      <Fab color="primary" aria-label="add" sx={fabStyle} onClick={() => handleAdd()}>
        <AddIcon />
      </Fab>
    </Fragment>
  );
}
