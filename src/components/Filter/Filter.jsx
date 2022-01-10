import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import { TextField } from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { contactsActions, contactsSelectors } from 'redux/contacts/index';

function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <PersonSearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField
        type='text'
        label='Enter name'
        variant='standard'
        margin='normal'
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={value}
        onChange={e =>
          dispatch(contactsActions.changeFilter(e.currentTarget.value))
        }
      />
    </Box>
  );
}

export default Filter;
