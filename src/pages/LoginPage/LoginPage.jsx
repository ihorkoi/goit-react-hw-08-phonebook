import { Formik, Field, ErrorMessage, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(7, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export const LoginPage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>Log In Page</p>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SignupSchema}
        onSubmit={user => {
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
