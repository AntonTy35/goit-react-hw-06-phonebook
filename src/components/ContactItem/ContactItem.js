import { useDispatch } from 'react-redux';
import { ContactData } from './ContactItem.styled';
// import { getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ contact }) => {
  // const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  // const { id, name, number } = contacts;

  const onDelete = () => {
    console.log('contact', contact.id);
    dispatch(deleteContact(contact.id));
  };

  return (
    <>
      <ContactData>{contact.name} :</ContactData>
      <ContactData>{contact.number}</ContactData>
      <button type="button" onClick={onDelete}>
        <b>Delete</b>
      </button>
    </>
  );
};
