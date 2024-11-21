import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RoleCard from './RoleCard';
import RoleForm from './RoleForm';

const RoleList = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/roles')
      .then(response => setRoles(response.data))
      .catch(error => console.error(error));
  }, []);

  const addRole = (role) => {
    axios.post('http://localhost:5000/roles', role)
      .then(response => setRoles([...roles, response.data]))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <RoleForm addRole={addRole} />
      {roles.map(role => (
        <RoleCard key={role.id} role={role} />
      ))}
    </div>
  );
};

export default RoleList;
