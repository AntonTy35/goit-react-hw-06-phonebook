import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { ContactListStyled } from './ContactList.styled';
import { getContacts } from 'redux/selectors';
import { ContactItemStyled } from 'components/ContactItem/ContactItem.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);
  // const dispatch = useDispatch();

  // const isContact = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  // console.log('contacts.id', contacts[0].id);
  return (
    <ContactListStyled>
      {contacts.length > 0
        ? contacts.map(contact => (
            <ContactItemStyled key={contact.id}>
              <ContactItem contact={contact} />
            </ContactItemStyled>
          ))
        : 'There is not contacts'}
    </ContactListStyled>
  );
};
