import { Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h2>Find your contacts by name</h2>
      <Input
        type="tel"
        onChange={evt => {
          dispatch(setFilter(evt.target.value.trim()));
        }}
      />
    </>
  );
};
