import MenuItem from '@mui/material/MenuItem';

export default function CustomMenuItem({ onClick, icon, text }) {
  return <MenuItem onClick={() => onClick()}>
    {icon}
    <span style={{ marginLeft: '7px' }}>
      {text}
    </span>
  </MenuItem>;
}