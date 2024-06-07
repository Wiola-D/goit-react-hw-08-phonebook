import { useAuth } from '../../hooks/useAuth';
import Navigation from '../Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>

        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}

    </header>
  );
};

export default Header;
