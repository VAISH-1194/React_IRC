import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function Sidebar({ open, onClose, width }) {
  const listItemTextStyle = {
    fontSize: '35px',
    color: 'black',
  };

  const logoStyle = {
    color: '#00174b',
    textDecoration: 'none', 
    fontSize: '40px',
  };

  const rblyStyle = {
    fontFamily: 'poppins, sans-serif', 
    marginLeft: '-3px', 
    letterSpacing: '-3px',
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          background: 'linear-gradient(to right, #2980b9, #6dd5fa, #ffffff)',
          width: 250,
          opacity: 0.99,
        },
      }}
    >
      <div>
        {/* Logo at the top of the sidebar */}
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <a href="" className="logo" style={{ marginRight: '10px', ...logoStyle }}>
                <i className="fas fa-book" style={{ marginLeft: 1 }}></i>
                <span style={rblyStyle}>RBLY</span>
              </a>
            </ListItemIcon>
            <ListItemText primary="" />
          </ListItemButton>
        </ListItem>
        <Divider />

        {/* Other sidebar contents */}
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon style={{ fontSize: '40px' }}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  style={listItemTextStyle}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon style={{ fontSize: '40px' }}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  style={{ ...listItemTextStyle, fontSize: '100px', fontWeight: 'bolder' }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
}
