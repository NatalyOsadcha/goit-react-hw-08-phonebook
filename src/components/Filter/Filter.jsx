import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contacts/filterSlice';
import { filterSelector } from 'redux/contacts/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);

  const changeFilter = evt => {
    dispatch(filterContacts(evt.target.value));
  };
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        name="filter"
        onChange={changeFilter}
        className={css.input}
      />
    </label>
  );
};
export default Filter;
