import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <AppBar position="static" className="app-bar">
      <Toolbar className="toolbar">
        <Typography variant="h6">
          RBAC System
        </Typography>
        <div>
          <Button color="inherit" component={Link} to="/users">
            User Management
          </Button>
          <Button color="inherit" component={Link} to="/roles">
            Role Management
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
