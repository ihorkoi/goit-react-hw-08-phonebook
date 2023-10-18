import { useDispatch } from 'react-redux';

import { useEffect } from 'react';
import { refreshUser } from 'redux/operations';

import { useAuth } from './useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home/Home';
import { Layout } from '../pages/Layout/Layout';
import { ContactPage } from '../pages/ContactPage/ContactPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Loading...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
      </Route>
    </Routes>
    // <div
    //   style={{
    //     // height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101',
    //   }}
    // >
    //   <NavSection />
    //   <h1>Phonebook</h1>
    //   <ContactForm />
    //   {isLoading && !error ? (
    //     <b>Request in progress...</b>
    //   ) : contacts.length === 0 ? (
    //     <p>You don`t have any contact yet</p>
    //   ) : (
    //     <>
    //       <h2>Contacts</h2>
    //       <Filter></Filter>
    //       <ContactsList />
    //     </>
    //   )}
    // </div>
  );
};
