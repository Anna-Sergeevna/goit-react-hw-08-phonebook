import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { contactsOperations, contactsSelectors } from 'redux/contacts/index';

const styles = {
  form: {
    width: 280,
    marginTop: 15,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
  },
};

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

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

  const haldleSubmit = e => {
    e.preventDefault();

    if (contacts.map(contact => contact.name).includes(name)) {
      toast.error(`${name} is already in contacts.`);
    } else {
      dispatch(contactsOperations.addContact({ name, number }));
      toast.success('Add contact');
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    // <form onSubmit={haldleSubmit} autoComplete='off'>
    <form style={styles.form} onSubmit={haldleSubmit}>
      <label style={styles.label}>
        <TextField
          type='text'
          name='name'
          label='Name'
          margin='normal'
          size='normal'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label style={styles.label}>
        <TextField
          type='tel'
          name='number'
          label='Number'
          margin='normal'
          size='normal'
          pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
          title='Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +'
          required
          value={number}
          onChange={handleChange}
        />
      </label>

      <Button
        variant='contained'
        disabled={!name}
        startIcon={<AddIcCallIcon />}
        type='submit'
      >
        Add contact
      </Button>
    </form>
  );
}

export default ContactForm;
