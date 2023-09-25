// import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { AppStyled } from './App.styled';
// import { useEffect, useState } from 'react';
import { resetContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
// import { getReset } from 'redux/selectors';

// const initialContacs = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const getLocalStorage = () => {
//   const saveContacts = localStorage.getItem('phonebook');
//   if (saveContacts !== null) {
//     return JSON.parse(saveContacts);
//   }
//   return contactsInitialState;
// };

export const App = () => {
  // const reset = useSelector(getReset);
  // console.log('reset', reset);
  const dispatch = useDispatch();
  // const [contacts, setContacts] = useState(getLocalStorage);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('phonebook', JSON.stringify(contacts));
  // }, [contacts]);

  // const defaultLocalStorage = () => setContacts(initialContacs);

  // const addContact = ({ name, number }) => {
  //   const isContact = contacts.find(
  //     contact => contact.name.toLowerCase() === name.toLowerCase()
  //   );

  //   if (isContact) {
  //     alert(`${name} is already in contacts.`);
  //     return;
  //   }

  //   setContacts(prevState => [
  //     ...prevState,
  //     {
  //       id: nanoid(),
  //       name: name,
  //       number: number,
  //     },
  //   ]);
  // };

  // const findContacts = event => setFilter(event);

  // const deleteContact = id =>
  //   setContacts(prevState => prevState.filter(contact => contact.id !== id));

  // const stateContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

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
    </AppStyled>
  );
};
