import { useEffect } from 'react';
import PhonebookForm from '../components/PhonebookForm/PhonebookForm';
import Contacts from '../components/Contacts/Contacts';
import Filter from '../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getIsLoading, getError } from 'redux/contacts/selectors';
import { LineWave } from 'react-loader-spinner';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    backgroundColor: 'rgba(156, 214, 240, 1)',
    opacity: 0.6,
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
}
}

export default function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Add new contact</h2>
      <PhonebookForm />
      <h2 style={styles.title}>Contacts</h2>
      <Filter />
      {isLoading && <LineWave color="blue" />}
      {error && <b>{error}</b>}
      <Contacts />
      <ToastContainer autoClose={2000} position="top-center" theme="dark"/>
    </div>
  );
}
