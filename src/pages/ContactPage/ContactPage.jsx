import { Box } from '@mui/material';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export const ContactPage = () => {
  const contacts = useSelector(selectContacts);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '16px',
        marginTop: '16px',
      }}
    >
      <Box sx={{ display: 'flex', gap: '24px', flexDirection: 'column' }}>
        <ContactForm />
        {contacts.length > 0 && <Filter />}
      </Box>
      <ContactsList />
    </div>
  );
};
