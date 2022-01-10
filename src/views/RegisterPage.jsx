import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

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

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={styles.form} autoComplete='off'>
        <label style={styles.label}>
          <TextField
            type='text'
            name='name'
            label='Name'
            margin='normal'
            size='normal'
            value={name}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          <TextField
            type='email'
            name='email'
            label='Email'
            margin='normal'
            size='normal'
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          <TextField
            type='password'
            name='password'
            label='Password'
            margin='normal'
            size='normal'
            value={password}
            onChange={handleChange}
          />
        </label>

        <Button
          variant='contained'
          disabled={!name}
          startIcon={<AppRegistrationIcon />}
          type='submit'
        >
          Sign up
        </Button>
      </form>
    </div>
  );
}
