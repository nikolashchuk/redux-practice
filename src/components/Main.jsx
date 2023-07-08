import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar';

export const Main = () => {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
};
