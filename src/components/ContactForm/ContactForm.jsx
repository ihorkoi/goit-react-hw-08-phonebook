import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/selectors';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, TextField, Button } from '@mui/material';

const contactsSubmitSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { name: '', number: '' },
    validationSchema: contactsSubmitSchema,
    onSubmit: (newContact, { resetForm }) => {
      const alreadyIn = contacts.find(
        ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
      );
      if (alreadyIn) {
        alert(`${newContact.name} is already in contacts`);
        resetForm();
        return;
      }
      dispatch(addContact(newContact));
      resetForm();
    },
  });

  return (
    <div>
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <h1>Contacts</h1>
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
              type="tel"
              name="number"
              label="Phone"
              onChange={formik.handleChange}
              value={formik.values.number}
              error={formik.touched.number && Boolean(formik.errors.number)}
              helperText={formik.touched.number && formik.errors.number}
            />
            <Button variant="contained" type="submit" size="small">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
};
