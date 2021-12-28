import React from 'react';
// import { useSelector } from 'react-redux';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
// import { getLoading } from './redux/contacts/contacts-selectors';

const Contacts = () => (
  // const isLoadingContacts = useSelector(getLoading);

  <>
    <Section title='Phonebook'>
      <ContactForm />
    </Section>

    {/* {isLoadingContacts && <Loader />} */}

    <Section title='Contacts'>
      <Filter />
      <ContactList />
    </Section>
  </>
);

export default Contacts;
