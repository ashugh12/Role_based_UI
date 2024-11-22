import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Typography } from '@mui/material';
import RoleCard from './RoleCard';
import RoleForm from './RoleForm';
import './RoleList.css';

const RoleList = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get('https://role-based-ui.onrender.com/roles');
        setRoles(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRoles();
  }, []);

  const addRole = async (role) => {
    try {
      const response = await axios.post('https://role-based-ui.onrender.com/roles', role);
      setRoles([...roles, response.data]);
    } catch (err) {
      console.error(err);
    }
  };
  const deleteRole = async (roleId) => {
    try {
      await axios.delete(`https://role-based-ui.onrender.com/roles${roleId}`);
      setRoles(roles.filter((role) => role.id !== roleId));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container className="role-list-container">
      <Typography variant="h4" className="role-list-title" gutterBottom>Role Management</Typography>
      <RoleForm addRole={addRole} />
      <Grid container spacing={2} className="role-list-grid">
        {roles.map((role) => (
          <Grid item xs={12} sm={6} md={4} key={role.id}>
            <RoleCard role={role} deleteRole={deleteRole}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RoleList;
