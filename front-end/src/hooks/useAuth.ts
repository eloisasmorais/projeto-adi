import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const useAuth = () => {
  const { requestTopItems, logOff, requestAuthData, user } =
    useContext(AuthContext);

  return { requestTopItems, logOff, requestAuthData, user };
};

export default useAuth;
