import { useEffect, useState } from 'react';
import { ListItem, Button, Number } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { selectContacts, selectFilterValue } from 'redux/selectors';
import { ModalWindow } from 'components/EditContactModal/EditContactModal';

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
      <ul>
        {filteredContacts.map(({ name, id, number }) => {
          return (
            <ListItem key={id}>
              {name}: <Number>{number}</Number>
              <Button
                onClick={() => {
                  openModal(id);
                }}
              >
                Edit
              </Button>
              <Button onClick={() => dispatch(deleteContact(id))}>
                Delete
              </Button>
            </ListItem>
          );
        })}
      </ul>
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
