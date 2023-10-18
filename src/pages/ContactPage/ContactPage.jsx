import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';

export const ContactPage = () => {
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
      <ContactForm />
      <ContactsList />
    </div>
  );
};
