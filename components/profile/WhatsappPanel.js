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

export default function WhatsappPanel() {

  const [user, _setUser] = useUser();
  const userProfile = useProfile(user?.uid);

  const handleAdd = async () => {
    const input = await fireProfileModal({
      title: 'Add Whatsapp Phone No.',
      input: 'text',
      inputPlaceholder: 'Enter your Phone No.'
    });

    if (input && input !== '') {
      await writeProfile(user?.uid, {
        ...userProfile,
        whatsapp: [
          ...(userProfile?.whatsapp || []),
          {
            phone: input,
            active: false
          }
        ]
      });
    }

  };

  const handleClick = async (e) => {
    const newwhatsappList = (userProfile?.whatsapp || []).map(item => {
      return {
        ...item,
        active: item.phone === e ? true : false
      };
    });

    await writeProfile(user?.uid, {
      ...userProfile,
      whatsapp: [
        ...newwhatsappList
      ]
    });
  };

  const handleDelete = async (e) => {
    await writeProfile(user?.uid, {
      ...userProfile,
      whatsapp: userProfile?.whatsapp.filter(x => x.phone !== e)
    });
  };

  return (
    <Fragment>
      <Stack direction="row" spacing={1}>
        {
          userProfile?.whatsapp?.map((item, idx) => {
            return <Chip
              key={idx}
              label={item.phone}
              color={item?.active ? 'success' : undefined}
              variant={'outlined'}
              onClick={() => handleClick(item.phone)}
              onDelete={() => handleDelete(item.phone)}
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
