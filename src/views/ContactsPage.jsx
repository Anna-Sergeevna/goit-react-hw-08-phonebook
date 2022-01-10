import React from 'react';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

const Contacts = () => (
  <>
    <Section title='Add contacts'>
      <ContactForm />
    </Section>

    <Section title='Your contacts'>
      <Filter />
      <ContactList />
    </Section>
  </>
);

export default Contacts;
