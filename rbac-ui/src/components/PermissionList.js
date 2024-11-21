import React from 'react';

const PermissionList = ({ role }) => {
  return (
    <div>
      <h4>Permissions for {role.name}</h4>
      <ul>
        {role.permissions.map((permission, index) => (
          <li key={index}>{permission}</li>
        ))}
      </ul>
    </div>
  );
};

export default PermissionList;
