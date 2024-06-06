import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import { Helmet } from 'react-helmet';

const Contacts = () => {
  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;
