import React from 'react';
import css from './ContactsItem.module.css';
import ContactsItem from './ContactsItem';
import {useSelector } from 'react-redux';
import {filterSelector, sortContacts } from 'redux/contacts/selectors';

const Contacts = () => {
  const filterValue = useSelector(filterSelector);
  const items = useSelector(sortContacts);
 

  const getFilteredContacts = () => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase().trim())
    );
  };
  const filteredContacts = getFilteredContacts();
  return (
    <ul className={css.contactsList}>
      {filteredContacts.map(contact => (
        <ContactsItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default Contacts;
