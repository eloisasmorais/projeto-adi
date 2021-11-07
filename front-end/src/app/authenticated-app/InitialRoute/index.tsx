import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const InitialRoute = () => {
  const history = useHistory();
  const { user, requestTopItems } = useAuth();

  useEffect(() => {
    const getTopItems = (token: string) => {
      requestTopItems(token);
    };

    if (user.token) getTopItems(user.token);
  }, [user]);

  useEffect(() => {
    history.push('/');
  }, []);

  return (
    <div>
      <p>Oi</p>
    </div>
  );
};

export default InitialRoute;
