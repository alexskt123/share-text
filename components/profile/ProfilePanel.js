import { useState } from 'react';
import Tab from '@mui/material/Tab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import EmailPanel from './EmailPanel';
import WhatsappPanel from './WhatsappPanel';
import UserPanel from './UserPanel';

export default function ProfilePanel() {
  const [value, setValue] = useState('1');

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab icon={<PersonPinIcon />} value="1" label="User" />
            <Tab icon={<MailOutlineIcon />} value="2" label="Email" />
            <Tab icon={<WhatsAppIcon />} value="3" label="Whatsapp" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <UserPanel />
        </TabPanel>
        <TabPanel value="2">
          <EmailPanel />
        </TabPanel>
        <TabPanel value="3">
          <WhatsappPanel />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
