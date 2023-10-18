import { Formik, Field, ErrorMessage, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';

export const LoginPage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>Log In Page</p>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};

          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={user => {
          console.log(user);
          dispatch(logIn(user));
        }}
      >
        <Form action="">
          <p>Email</p>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <p>Password</p>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
