import { Main } from '../components/Main';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from 'pages/LoginPage';
import { Dashboard } from 'pages/Dashboard';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
