import { useSelector } from 'react-redux';
import { Nav } from './NavSection';
import { selectIsLoggedIn } from '../../redux/selectors';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';

export const NavSection = () => {
  const dispatch = useDispatch();
  const isLogedIn = useSelector(selectIsLoggedIn);
  return (
    <header>
      <Nav>
        {isLogedIn ? (
          <Button component={RouterLink} href="/contacts">
            Contacts
          </Button>
        ) : (
          <Button component={RouterLink} href="/">
            Home
          </Button>
        )}

        {isLogedIn ? (
          <Button
            component={RouterLink}
            type="button"
            onClick={() => dispatch(logOut())}
          >
            Log Out
          </Button>
        ) : (
          <>
            <Button component={RouterLink} href="/register">
              Sign In
            </Button>

            <Button component={RouterLink} href="/login">
              Log In
            </Button>
          </>
        )}
      </Nav>
    </header>
  );
};
