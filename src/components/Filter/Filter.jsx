import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <TextField
        size="small"
        type="text"
        label="Search"
        onChange={evt => {
          dispatch(setFilter(evt.target.value.trim()));
        }}
      />
    </>
  );
};
