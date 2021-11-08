import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const useAuth = () => {
  const { getLocalStorage, requestTopArtists, logOff, requestAuthData, user } =
    useContext(AuthContext);

  return { getLocalStorage, requestTopArtists, logOff, requestAuthData, user };
};

export default useAuth;
