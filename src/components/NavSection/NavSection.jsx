import { useSelector } from 'react-redux';
import { Nav } from './NavSection';
import { selectIsLoggedIn } from '../../redux/selectors';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';

export const NavSection = () => {
  const dispatch = useDispatch();
  const isLogedIn = useSelector(selectIsLoggedIn);
  return (
    <header>
      <Nav>
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
      </Nav>
    </header>
  );
};
