import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Role Name"
        required
      />
      <div>
        <label>
          <input 
            type="checkbox"
            value="read"
            checked={permissions.includes('read')}
            onChange={handlePermissionChange}
          />
          Read
        </label>
        <label>
          <input 
            type="checkbox"
            value="write"
            checked={permissions.includes('write')}
            onChange={handlePermissionChange}
          />
          Write
        </label>
        <label>
          <input 
            type="checkbox"
            value="delete"
            checked={permissions.includes('delete')}
            onChange={handlePermissionChange}
          />
          Delete
        </label>
      </div>
      <button type="submit">Add Role</button>
    </form>
  );
};

export default RoleForm;
