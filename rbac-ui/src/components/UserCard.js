import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>Role: {user.role}</p>
      <p>Status: {user.status}</p>
    </div>
  );
};

export default UserCard;
