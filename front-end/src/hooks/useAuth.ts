import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const useAuth = () => {
  const { user, logOff, requestAuthData } = useContext(AuthContext);

  return { user, logOff, requestAuthData };
};

export default useAuth;
