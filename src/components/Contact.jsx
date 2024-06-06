import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contacts/API';
import css from '../styles/Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <div className={css.container}>
        <p className={css.liName}>{contact.name}: </p>
        <p>{contact.phone}</p>
      </div>
      <button className={css.buttonDelete} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};
export default Contact;
