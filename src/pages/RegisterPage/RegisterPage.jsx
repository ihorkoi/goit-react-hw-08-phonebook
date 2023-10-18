import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authOperations';
import { TextField, Box, Button } from '@mui/material';
import * as Yup from 'yup';

const signupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name too short!')
    .max(50, 'Name too Long!')
    .required('Required'),
  password: Yup.string()
    .min(7, 'Password too Short!')
    .max(50, 'Password too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});
export const RegisterPage = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: signupSchema,
    onSubmit: (user, { resetForm }) => {
      dispatch(registerUser(user));
      resetForm();
    },
  });

  return (
    <Box
      sx={{
        textAlign: 'center',
      }}
    >
      <h1>Sign in</h1>

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
            id="name"
            size="small"
            type="text"
            name="name"
            label="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
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
