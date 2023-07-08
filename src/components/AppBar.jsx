import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserMenu } from './UserMenu';

export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <header
      style={{
        padding: 8,
        display: 'flex',
        justifyContent: 'space-between',
        gap: 10,
        marginBottom: 12,
        borderBottom: '1px solid black',
      }}
    >
      <nav>
        {!isLoggedIn && <Link to="/login">Log In</Link>}
        {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
      </nav>

      {isLoggedIn && <UserMenu />}
    </header>
  );
};
