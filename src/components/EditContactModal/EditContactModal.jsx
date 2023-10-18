import Modal from 'react-modal';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, updateContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const ModalWindow = ({
  isOpen,
  onAfterOpen,
  onRequestClose,
  closeModal,
  contactId,
}) => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <button onClick={closeModal}>close</button>
      <Formik
        initialValues={{ name: '', number: '', id: '' }}
        validationSchema={SignupSchema}
        onSubmit={(update, { resetForm }) => {
          const alreadyIn = contacts.find(
            ({ name }) => name.toLowerCase() === update.name.toLowerCase()
          );
          if (alreadyIn) {
            alert(`${update.name} is already in contacts`);
            resetForm();
            return;
          }
          dispatch(updateContact({ ...update, id: contactId }));
          resetForm();
          dispatch(fetchContacts());
        }}
      >
        <Form>
          <p>Name</p>
          <Field type="text" name="name" />
          <ErrorMessage name="text" component="div" />
          <p>Phone</p>
          <Field type="tel" name="number" />
          <ErrorMessage name="tel" component="div" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </Modal>
  );
};
