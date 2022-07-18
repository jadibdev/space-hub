import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../planet.png';

const Navbar = () => (
  <div className="nav-container">
    <div className="logo-container">
      <img id="logo" alt="logo" src={logo} />
      <h2>Space Travelers Hub</h2>
    </div>
    <div>
      <ul className="nav-list">
        <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/rockets">Rockets</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/missions">Missions</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/profile">Profile</NavLink></li>
      </ul>
    </div>
  </div>
);

export default Navbar;
