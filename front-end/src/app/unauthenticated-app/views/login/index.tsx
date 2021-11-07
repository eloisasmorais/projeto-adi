import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Link from '../../../../components/Link';
import { LoginItemsWrapper, LoginText, LoginWrapper } from './styles';
import useAuth from '../../../../hooks/useAuth';

const Login: React.FC = () => {
  const history = useHistory();
  const { requestAuthData, user } = useAuth();
  const scopes = encodeURIComponent('user-top-read');
  const url = `https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=user-top-read`;

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const codeParam = urlParams.get('code');

    const handleAuth = async (code: string) => requestAuthData(code);

    if (codeParam !== null && codeParam !== '') {
      handleAuth(codeParam);
    }
  }, []);

  // useEffect(() => {
  //   if (user.token) history.push('/retrospective');
  // }, [user]);

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
