import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Typography } from '@mui/material';
import UserCard from './UserCard';
import UserForm from './UserForm';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://role-based-ui.onrender.com/users');
        setUsers(response.data);
      } catch (err) {
        setError('Error fetching users. Please try again.');
        console.error('Fetch Users Error:', err);
      }
    };
    fetchUsers();
  }, []);

  const addUser = async (user) => {
    try {
      const response = await axios.post('https://role-based-ui.onrender.com/users', user);
      setUsers([...users, response.data]);
    } catch (err) {
      setError('Error adding user. Please try again.');
      console.error('Add User Error:', err);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`https://role-based-ui.onrender.com/users/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (err) {
      setError('Error deleting user. Please try again.');
      console.error('Delete User Error:', err);
    }
  };

  return (
    <Container className="user-list-container">
      <Typography variant="h4" className="user-list-title" gutterBottom>User Management</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <UserForm addUser={addUser} />
      <Grid container spacing={2} className="user-list-grid">
        {users.length > 0 ? (
          users.map((user) => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <UserCard user={user} deleteUser={deleteUser} />
            </Grid>
          ))
        ) : (
          <Typography>No users available.</Typography>
        )}
      </Grid>
    </Container>
  );
};

export default UserList;
