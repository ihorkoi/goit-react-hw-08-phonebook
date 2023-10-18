import { useEffect, useState } from 'react';
// import { ListItem, Button, Number } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contactsOperations';
import { selectContacts, selectFilterValue } from 'redux/selectors';
import { ModalWindow } from 'components/EditContactModal/EditContactModal';
import { Box, IconButton, List, ListItem, Typography } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilterValue);
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [contactId, setContactId] = useState('');

  const openModal = id => {
    setIsOpen(true);
    setContactId(id);
  };
  const afterOpenModal = () => {
    return;
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <List>
        {filteredContacts.map(({ name, id, number }) => {
          return (
            <ListItem
              key={id}
              sx={{
                width: '400px',
                marginBottom: '12px',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                border: '1px solid rgba(0, 0, 0, 0.33)',
                borderRadius: '8px',
              }}
            >
              <Typography sx={{ fontWeight: '400', fontSize: '20px' }}>
                {name}
              </Typography>
              :
              <Typography
                sx={{ fontWeight: '200', fontSize: '16px', marginLeft: '12px' }}
              >
                {number}
              </Typography>
              <Box sx={{ marginLeft: 'auto' }}>
                <IconButton
                  onClick={() => {
                    openModal(id);
                  }}
                >
                  <ModeEditIcon />
                </IconButton>
                <IconButton onClick={() => dispatch(deleteContact(id))}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </ListItem>
          );
        })}
      </List>
      <ModalWindow
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        contactId={contactId}
      ></ModalWindow>
    </div>
  );
};
// }
