import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import RoleList from './components/RoleList';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/users" element={<UserList />} />
        <Route path="/roles" element={<RoleList />} />
        <Route path="/" element={<h1>Home</h1>}/>
      </Routes>
    </div>
  );
};

export default App;
