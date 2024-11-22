import React, { useState } from 'react';
import { TextField, Button, FormControlLabel, Checkbox, Container } from '@mui/material';
import './RoleForm.css';

const RoleForm = ({ addRole }) => {
  const [name, setName] = useState('');
  const [permissions, setPermissions] = useState([]);

  const handlePermissionChange = (event) => {
    const { value, checked } = event.target;
    setPermissions(checked ? [...permissions, value] : permissions.filter(p => p !== value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRole({ name, permissions });
    setName('');
    setPermissions([]);
  };

  return (
    <Container className="role-form-container">
      <form onSubmit={handleSubmit} className="role-form">
        <TextField
          label="Role Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
          className="role-form-input"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={permissions.includes('read')}
              onChange={handlePermissionChange}
              value="read"
            />
          }
          label="Read"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={permissions.includes('write')}
              onChange={handlePermissionChange}
              value="write"
            />
          }
          label="Write"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={permissions.includes('delete')}
              onChange={handlePermissionChange}
              value="delete"
            />
          }
          label="Delete"
        />
        <Button type="submit" variant="contained" color="primary" className="role-form-button">
          Add Role
        </Button>
      </form>
    </Container>
  );
};

export default RoleForm;
