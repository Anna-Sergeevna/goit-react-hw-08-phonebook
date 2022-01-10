import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import defaultAvatar from './default-avatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 800,
    marginRight: 25,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <img src={avatar} alt='' width='32' style={styles.avatar} />
      <span style={styles.name}>Welcome, {name}</span>

      <Button
        variant='contained'
        startIcon={<LogoutIcon />}
        type='button'
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </Button>
    </div>
  );
}
