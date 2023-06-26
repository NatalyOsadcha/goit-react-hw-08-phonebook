import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactsItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { ImBin, ImPencil } from 'react-icons/im';
import { toast } from 'react-toastify';
import Modal from 'components/Modal/Modal';

const ContactsItem = ({ contact }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <li className={css.contactsItem}>
      <span className={css.span}>{contact.name}</span>
      <span className={css.span}>{contact.number}</span>
      <button type="button" className={css.contactsBtn} onClick={toggleModal}>
        <ImPencil size={20} />
      </button>
      <button
        type="button"
        className={css.contactsBtn}
        onClick={() =>
          dispatch(deleteContact(contact.id)) &&
          toast.success(`Contact ${contact.name} was deleted successfully.`)
        }
      >
        <ImBin size={20} />
      </button>
      {showModal && <Modal toggleModal={toggleModal} contact={contact} />}
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
