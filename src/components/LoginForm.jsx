import { useDispatch } from 'react-redux';
import { logIn } from 'redux/userSlice';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatsch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatsch(logIn(form.elements.login.value));
    form.reset();
    navigate('/dashboard', { replace: true });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <br />
      <button type="submit">Log In</button>
    </form>
  );
};
