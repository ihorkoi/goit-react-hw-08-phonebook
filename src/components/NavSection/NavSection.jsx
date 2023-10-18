import { useSelector } from 'react-redux';
import { Nav, NavList } from './NavSection';
import { selectIsLoggedIn } from '../../redux/selectors';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/operations';

export const NavSection = () => {
  const dispatch = useDispatch();
  const isLogedIn = useSelector(selectIsLoggedIn);
  return (
    <header>
      <Nav>
        <NavList>
          {isLogedIn ? (
            <NavLink to="/contacts"> Contacts </NavLink>
          ) : (
            <NavLink to="/"> Home </NavLink>
          )}

          {isLogedIn ? (
            <button type="button" onClick={() => dispatch(logOut())}>
              Log Out
            </button>
          ) : (
            <>
              <NavLink to="/register">Register</NavLink>

              <NavLink to="/login">Log In</NavLink>
            </>
          )}
        </NavList>
      </Nav>
    </header>
  );
};
