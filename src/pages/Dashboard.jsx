import { useLogoutRedirect } from 'hooks/useLogoutRedirect';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'redux/store';

export const Dashboard = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.myValue);
  useLogoutRedirect();
  return (
    <div>
      {' '}
      Dashboard Page
      <hr />
      {value}
      <button onClick={() => dispatch(increment(10))}>increment</button>
      <button onClick={() => dispatch(decrement(10))}>decrement</button>
    </div>
  );
};
