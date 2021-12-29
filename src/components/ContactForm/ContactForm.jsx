import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { contactsOperations, contactsSelectors } from 'redux/contacts/index';
import s from './ContactForm.module.css';

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
    <form onSubmit={haldleSubmit}>
      <label>
        <p className={s.text}>Name</p>
        <input
          type='text'
          name='name'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          className={s.input}
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        <p className={s.text}>Number</p>
        <input
          type='tel'
          name='number'
          pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
          title='Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +'
          required
          className={s.input}
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type='submit' disabled={!name} className={s.button}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
