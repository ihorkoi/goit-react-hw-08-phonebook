import { Box, Button, TextField } from '@mui/material';
import { Formik, Field, ErrorMessage, Form, useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import * as Yup from 'yup';

const logInSchema = Yup.object().shape({
  password: Yup.string()
    .min(7, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export const LoginPage = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: logInSchema,
    onSubmit: (user, { resetForm }) => {
      dispatch(logIn(user));
    },
  });
  return (
    <Box
      sx={{
        textAlign: 'center',
      }}
    >
      <h1>Log In</h1>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TextField
            size="small"
            type="email"
            name="email"
            label="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            size="small"
            type="password"
            name="password"
            label="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button variant="outlined" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};
