import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import UserForm from './UserForm';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);
      } catch (err) {
        setError('Error fetching users. Please try again.');
        console.error(err);
      }
    };
    fetchUsers();
  }, []);

  const addUser = async (user) => {
    try {
      const response = await axios.post('http://localhost:5000/users', user);
      setUsers([...users, response.data]);
    } catch (err) {
      setError('Error adding user. Please try again.');
      console.error(err);
    }
  };

  return (
    <div>
        <h1>Users</h1>
      {error && <p>{error}</p>}
      <UserForm addUser={addUser} />
      {users.length > 0 ? (
        users.map((user) => <UserCard key={user.id} user={user} />)
      ) : (
        <p>No users available.</p>
      )}
    </div>
  );
};

export default UserList;
