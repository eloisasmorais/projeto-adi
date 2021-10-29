import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Link from '../../../../components/Link';
import { LoginItemsWrapper, LoginText, LoginWrapper } from './styles';
import useAuth from '../../../../hooks/useAuth';

const Login: React.FC = () => {
  const history = useHistory();
  const { requestAuthData } = useAuth();
  const url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;
  useEffect(() => {
    const handleAuth = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const codeParam = urlParams.get('code');

      if (codeParam !== null && codeParam !== '') {
        // requestAuthData(codeParam);
        console.log(codeParam);
      }
    };

    handleAuth();
  }, []);

  return (
    <LoginWrapper>
      <LoginItemsWrapper>
        <LoginText>
          Faça o seu login
          <br />
          com o Spotify!
        </LoginText>
        <Link href={url}>Login</Link>
      </LoginItemsWrapper>
    </LoginWrapper>
  );
};

export default Login;
