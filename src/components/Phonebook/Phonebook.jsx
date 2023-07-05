import Notiflix from 'notiflix';
import css from './Phonebook.module.css';
import { ContactsForm } from '../ContactsForm/ContactsForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';

export const Phonebook = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <div className={css.sectionPhonebook}>
      <h1>Phonebook</h1>
      {isLoading && Notiflix.Notify.info('Loading..')};
      <ContactsForm />
      <ContactsList />
    </div>
  );
};
