import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';

const InitialRoute = () => {
  const { user, requestTopItems } = useAuth();

  useEffect(() => {
    const getTopItems = (token: string) => {
      requestTopItems(token);
    };

    if (user.token) getTopItems(user.token);
  }, [user]);

  return (
    <div>
      <p>Oi</p>
    </div>
  );
};

export default InitialRoute;
