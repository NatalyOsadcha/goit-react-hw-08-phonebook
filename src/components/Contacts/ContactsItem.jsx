import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactsItem.module.css';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { deleteContact, editContact} from 'redux/contacts/operations';
import { ImBin, ImPencil } from "react-icons/im";
import { FaSave } from "react-icons/fa";
import { toast } from 'react-toastify';


const ContactsItem = ({ contact }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleEdit = () => {
    setIsEdit(prevState => !prevState);
    if (isEdit) {
      dispatch(editContact({ name, number, id: contact.id }));
      toast.success(`Contact ${name} was updated successfully.`);
    }
  };

  return (
    <li className={css.contactsItem}>
      {isEdit ? (
        <>
          <TextField
            id="standard-basic"
            label="name"
            variant="standard"
            required
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="number"
            variant="standard"
            required
            name="name"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
        </>
      ) : (
        <>
          <span className={css.span}>{name}</span> <span className={css.span}>{number}</span>
        </>
      )}

      <button type="button" className={css.contactsBtn} onClick={handleEdit}>
        {isEdit ? <FaSave size={20} />: <ImPencil size={20} />}
      </button>
      <button
        type="button"
        className={css.contactsBtn}
        onClick={() => dispatch(deleteContact(contact.id)) && toast.success(`Contact ${name} was deleted successfully.`)}
      >
         <ImBin size={20} />
      </button>
    </li>
  );
};

ContactsItem.protoTypes = {
  contact: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactsItem;
