import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input 
        type="text"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        placeholder="Role"
        required
      />
      <select 
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
