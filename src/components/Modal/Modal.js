import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import { FaSave } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { editContact } from 'redux/contacts/operations';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ contact, toggleModal }) {
  const dispatch = useDispatch();
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [toggleModal]);

  const handleEdit = () => {
    dispatch(editContact({ name, number, id: contact.id }));
    toast.success(`Contact ${name} was updated successfully.`);
    toggleModal();
  };

  const handleOverlay = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={handleOverlay}>
      <div className={css.modal}>
        <label className={css.label}>
          Name
          <input
            type="text"
            name="name"
            className={css.input}
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label className={css.label}>
          Email
          <input
            type="email"
            name="email"
            className={css.input}
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
        </label>
        <div className={css.buttonWrapper}>
          <button type="button" className={css.button} onClick={handleEdit}>
            <FaSave size={25} />
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}
