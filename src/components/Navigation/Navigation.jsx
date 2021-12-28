import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={s.nav}>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Home
      </NavLink>
      <NavLink
        to='/contacts'
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Contacts
      </NavLink>
    </nav>
  );
}

export default Navigation;
