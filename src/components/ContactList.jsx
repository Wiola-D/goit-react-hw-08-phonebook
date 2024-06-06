import { useSelector } from 'react-redux';
import { selectfilteredContacts } from '../redux/filters/selectors';
import css from '../styles/ContactList.module.css';
import Contact from './Contact';
import { useEffect } from 'react';

const ContactsList = () => {
  const filteredContacts = useSelector(selectfilteredContacts);

  useEffect(() => {
    console.log(filteredContacts);
  }, []);
  return (
    <>
      {filteredContacts && filteredContacts.length > 0 ? (
        <ul className={css.list}>
          {filteredContacts.map(contact => (
            <li className={css.listItem} key={contact.id}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noContacts}>No contacts</p>
      )}
    </>
  );
};
export default ContactsList;
