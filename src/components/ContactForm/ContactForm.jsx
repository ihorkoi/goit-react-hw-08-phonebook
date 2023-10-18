import { useSelector, useDispatch } from 'react-redux';
// import { FormContact, Input, Button } from './ContactForm.styled';
import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/selectors';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={SignupSchema}
      onSubmit={(newContact, { resetForm }) => {
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
      }}
    >
      <Form>
        <p>Name</p>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="div" />
        <p>Phone</p>
        <Field type="tel" name="number" />
        <ErrorMessage name="tel" component="div" />
        <button>Add contact</button>
      </Form>
    </Formik>
  );
};
