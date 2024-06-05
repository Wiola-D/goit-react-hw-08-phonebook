import { useAuth } from '../../hooks/useAuth';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <h1>Phonebook</h1>
      <div></div>
    </header>
  );
};
