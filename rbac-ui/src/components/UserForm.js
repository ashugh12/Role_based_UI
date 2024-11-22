import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Container } from '@mui/material';
import './UserForm.css';

const UserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('Active');

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser({ name, role, status });
    setName('');
    setRole('');
    setStatus('Active');
  };

  return (
    <Container className="user-form-container">
      <form onSubmit={handleSubmit} className="user-form">
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
          className="user-form-input"
        />
        <TextField
          label="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          fullWidth
          required
          className="user-form-input"
        />
        <FormControl fullWidth className="user-form-input">
          <InputLabel>Status</InputLabel>
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" className="user-form-button">
          Add User
        </Button>
      </form>
    </Container>
  );
};

export default UserForm;
