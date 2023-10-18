import { useSelector } from 'react-redux';
import { Nav } from './NavSection';
import { selectIsLoggedIn } from '../../redux/selectors';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import Button from '@mui/material/Button';
import { RouterLink } from '@mui/material/Link';

export const NavSection = () => {
  const dispatch = useDispatch();
  const isLogedIn = useSelector(selectIsLoggedIn);
  return (
    <header>
      <Nav>
        {isLogedIn ? (
          <Button href="/contacts">Contacts</Button>
        ) : (
          <Button href="/">Home</Button>
        )}

        {isLogedIn ? (
          <Button type="button" onClick={() => dispatch(logOut())}>
            Log Out
          </Button>
        ) : (
          <>
            <Button href="/register">Sign In</Button>

            <Button href="/login">Log In</Button>
          </>
        )}
      </Nav>
    </header>
  );
};
