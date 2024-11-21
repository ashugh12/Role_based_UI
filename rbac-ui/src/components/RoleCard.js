import React from 'react';
import PermissionList from './PermissionList';

const RoleCard = ({ role }) => {
  return (
    <div>
      <h3>{role.name}</h3>
      <PermissionList role={role} />
    </div>
  );
};

export default RoleCard;
