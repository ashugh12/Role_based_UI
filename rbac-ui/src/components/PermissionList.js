import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const PermissionList = ({ role }) => {
  return (
    <List>
      {role.permissions.map((permission, index) => (
        <ListItem key={index}>
          <ListItemText primary={permission} />
        </ListItem>
      ))}
    </List>
  );
};

export default PermissionList;
