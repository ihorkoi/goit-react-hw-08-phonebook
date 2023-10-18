import { Formik, Field, ErrorMessage, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/operations';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(7, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});
export const RegisterPage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>Register Page</p>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={SignupSchema}
        onSubmit={(user, { resetForm }) => {
          dispatch(registerUser(user));
          resetForm();
        }}
      >
        <Form action="">
          <p>Name</p>
          <Field type="name" name="name" />
          <ErrorMessage name="name" component="div" />
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
