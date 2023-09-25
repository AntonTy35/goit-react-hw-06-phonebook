import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { resetContact } from 'redux/contactsSlice';
import { AppStyled } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();

  return (
    <AppStyled>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <button onClick={() => dispatch(resetContact())}>
        Factory settings 😀
      </button>
      <ToastContainer />
    </AppStyled>
  );
};
