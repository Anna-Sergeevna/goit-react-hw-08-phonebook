import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const active = ({ isActive }) => (isActive ? s.activeLink : s.link);

export default function AuthNav() {
  return (
    <nav>
      <NavLink to='/register' className={active}>
        Sing up
      </NavLink>
      <NavLink to='/login' className={active}>
        Login
      </NavLink>
    </nav>
  );
}
