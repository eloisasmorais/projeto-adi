import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const useAuth = () => {
  const { getLocalStorage, logOff, requestAuthData, user } =
    useContext(AuthContext);

  return { getLocalStorage, logOff, requestAuthData, user };
};

export default useAuth;
