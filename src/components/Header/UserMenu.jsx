import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch;
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome in your Phonebook, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut(user))}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
