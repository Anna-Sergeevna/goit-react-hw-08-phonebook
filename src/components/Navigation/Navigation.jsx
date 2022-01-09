import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import s from './Navigation.module.css';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav className={s.nav}>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to='/contacts'
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
