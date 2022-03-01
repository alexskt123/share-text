import { Fragment, useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SignInModal from './SignInModal';
import { getAuth } from 'firebase/auth';
import { Divider } from '@mui/material';
import { useUser } from '../hooks/useUser';
import { deepPurple } from '@mui/material/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

export default function UserAvatar() {

  const [anchorEl, setAnchorEl] = useState(null);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [user, setUser] = useUser();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setShowSignInModal(false);
  };
  const handleLogIn = () => {
    setShowSignInModal(true);
  }

  const handleLogOut = () => {
    const auth = getAuth();
    auth.signOut();
    setUser(null);
    handleClose();
  }

  return (
    <Fragment>
      <Avatar
        sx={{ boxShadow: 3, cursor: 'pointer', width: 35, height: 35, bgcolor: user?.uid && deepPurple[500] }}
        onClick={(e) => handleClick(e)}
      >
        {user?.uid && user?.displayName.split('').find(x => x)}
      </Avatar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>
          <AccountCircleIcon />
          <span style={{ marginLeft: '7px' }}>
            {'Profile'}
          </span>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <TextSnippetIcon />
          <span style={{ marginLeft: '7px' }}>
            {'Text List'}
          </span>
        </MenuItem>
        <Divider />
        {!user && <MenuItem onClick={() => handleLogIn()}>
          <LoginIcon />
          <span style={{ marginLeft: '7px' }}>
            {'Log In'}
          </span>
        </MenuItem>}
        {user && <MenuItem onClick={() => handleLogOut()}>
          <LogoutIcon />
          <span style={{ marginLeft: '7px' }}>
            {'Log Out'}
          </span>
        </MenuItem>}
      </Menu>
      <SignInModal show={showSignInModal} handleClose={handleClose} />
    </Fragment>
  )
}