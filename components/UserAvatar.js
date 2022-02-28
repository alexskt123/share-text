import { Fragment, useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SignInModal from './SignInModal';
import { getAuth } from 'firebase/auth';
import { Divider } from '@mui/material';
import { useUser } from '../hooks/useUser';

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
        sx={{ cursor: 'pointer', width: 35, height: 35 }}
        onClick={(e) => handleClick(e)}
      />
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Text List</MenuItem>
        <Divider />
        {!user && <MenuItem onClick={() => handleLogIn()}>Log In</MenuItem>}
        {user && <MenuItem onClick={() => handleLogOut()}>Log Out</MenuItem>}
      </Menu>
      <SignInModal show={showSignInModal} handleClose={handleClose} />
    </Fragment>
  )
}