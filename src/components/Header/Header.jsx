import { useAuth } from '../../hooks/useAuth';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <h1>Phonebook</h1>
      <div>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default Header;
