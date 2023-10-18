import { Box, Typography } from '@mui/material';

export const Home = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%)',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h1"
        sx={{ fontSize: '4rem', fontWeight: '400', marginBottom: '24px' }}
      >
        Welcome to YourPhoneBook!
      </Typography>
      <Typography
        sx={{
          display: 'inline-block',
          width: '700px',
          textAlign: 'left',
          fontSize: '1.5rem',
        }}
      >
        Your digital address book for all your contacts. Never lose touch with
        your friends, family, and colleagues again. Easily manage, search, and
        connect with your contacts on the go. YourPhoneBook simplifies your
        life, making it easier than ever to stay in touch.
      </Typography>

      <Typography
        sx={{
          display: 'inline-block',
          width: '700px',
          fontSize: '1.5rem',
          textAlign: 'left',
        }}
      >
        Stay connected with YourPhoneBook - where your contacts are just a tap
        away. Start exploring and make managing your contacts a breeze!"
      </Typography>
    </Box>
  );
};
