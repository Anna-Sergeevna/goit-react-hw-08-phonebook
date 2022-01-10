import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { contactsOperations, contactsSelectors } from 'redux/contacts/index';
import s from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id =>
    dispatch(
      contactsOperations.deleteContact(id),
      toast.success('Delete contact'),
    );

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p className={s.name}>{name}:</p>
          <p className={s.phone}>{number}</p>

          <Button
            variant='contained'
            size='small'
            startIcon={<DeleteIcon />}
            type='button'
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
