import { Fragment } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import { getAuth } from 'firebase/auth';

export default function UserPanel() {
  const auth = getAuth();
  const userInfo = auth?.currentUser;

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <PersonIcon />
        </ListItemAvatar>
        <ListItemText
          primary="User Name"
          secondary={
            <Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {userInfo?.displayName}
              </Typography>
            </Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <EmailIcon />
        </ListItemAvatar>
        <ListItemText
          primary="Log In Email"
          secondary={
            <Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {userInfo?.email}
              </Typography>
            </Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
