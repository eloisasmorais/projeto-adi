import { useContext, useEffect } from 'react';
import AuthenticatedApp from './app/authenticated-app/views';
import UnauthenticatedApp from './app/unauthenticated-app';
import { AuthContext } from './context/AuthContext';
import AppWrapper from './styles';
import './styles.css';

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <AppWrapper>
      {user.token ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </AppWrapper>
  );
};

export default App;
