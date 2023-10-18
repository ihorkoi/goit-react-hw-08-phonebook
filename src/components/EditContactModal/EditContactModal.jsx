import Modal from 'react-modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  updateContact,
} from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/selectors';
import { Box, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const contactsEditSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string().required('Required'),
});

export const ModalWindow = ({
  isOpen,
  onRequestClose,
  closeModal,
  contactId,
}) => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();
  const customStyles = {
    overlay: {
      zIndex: '10',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  const formik = useFormik({
    initialValues: { name: '', number: '' },
    validationSchema: contactsEditSchema,
    onSubmit: (update, { resetForm }) => {
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
    },
  });
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <IconButton
        onClick={closeModal}
        sx={{ position: 'relative', left: '80%' }}
      >
        <CloseIcon />
      </IconButton>

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
    </Modal>
  );
};
