import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

const Contacts = () => {
  return (
    <main>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </main>
  );
};

export default Contacts;
