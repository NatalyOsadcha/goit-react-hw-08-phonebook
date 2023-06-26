import React, { useState } from 'react';
import css from './PhonebookForm.module.css';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getItems } from 'redux/contacts/selectors';

export default function PhonebookForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getItems)

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
    contacts.some(
      contact =>
        contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    )
  ) {
    toast.error(`${name} is already in the contacts.`);
    return;
  }
    toast.success(`${name} was added to the contacts successfully.`);
    dispatch(addContact({name, number}));
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>Name</label>
      <input
        type="text"
        name="name"
        className={css.input}
        // pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$"
        // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      />

      <label className={css.label}>Number</label>
      <input
        type="tel"
        name="number"
        className={css.input}
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
      />

      <button type="submit" className={css.button}>
        Add contact
      </button>
      </form>
  );
}
