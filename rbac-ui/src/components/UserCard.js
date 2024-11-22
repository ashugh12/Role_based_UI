import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import './UserCard.css';

const UserCard = ({ user, deleteUser }) => {
  return (
    <Card className="user-card">
      <CardContent>
        <Typography variant="h5" className="user-card-title">{user.name}</Typography>
        <Typography variant="body2" className="user-card-role">Role: {user.role}</Typography>
        <Typography variant="body2" className="user-card-status">Status: {user.status}</Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={() => deleteUser(user.id)}
          className="user-card-button"
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default UserCard;
