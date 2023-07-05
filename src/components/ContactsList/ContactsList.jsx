import { useDispatch } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { deleteContact } from 'redux/operations';
import { Filter } from 'components/Filter/Filter';
import css from './ContactsList.module.css';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().startsWith(filter && filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return contacts.length !== 0 ? (
    <div className={css.sectionContacts}>
      <h3>Contacts</h3>
      <ul className={css.contactsList}>
        {filter
          ? filteredContacts.map(c => (
              <li key={c.id}>
                {c.name}: {c.number}
                <button type="button" onClick={() => handleDelete(c.id)}>
                  Delete
                </button>
              </li>
            ))
          : contacts &&
            contacts.map(c => (
              <li key={c.id}>
                {c.name}: {c.number}
                <button type="button" onClick={() => handleDelete(c.id)}>
                  Delete
                </button>
              </li>
            ))}
      </ul>
      <Filter />
    </div>
  ) : (
    <p>You have no contacts.</p>
  );
};
