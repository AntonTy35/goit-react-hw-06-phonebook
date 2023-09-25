import { useSelector } from 'react-redux';

import { ContactItem } from '../ContactItem/ContactItem';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactListStyled, ContactItemStyled } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const stateContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ContactListStyled>
      {stateContacts.length > 0 ? (
        stateContacts.map(contact => (
          <ContactItemStyled key={contact.id}>
            <ContactItem contact={contact} />
          </ContactItemStyled>
        ))
      ) : (
        <ContactItemStyled>There is not contacts</ContactItemStyled>
      )}
    </ContactListStyled>
  );
};
