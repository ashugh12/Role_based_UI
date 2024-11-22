import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import PermissionList from './PermissionList';
import './RoleCard.css';

const RoleCard = ({ role, deleteRole }) => {
  return (
    <Card className="role-card">
      <CardContent>
        <Typography variant="h5" className="role-card-title">{role.name}</Typography>
        <PermissionList role={role} />
        <Button 
          variant="contained" 
          className="role-card-button"
          onClick={() => deleteRole(role.id)}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default RoleCard;
