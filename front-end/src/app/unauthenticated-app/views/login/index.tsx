import React from 'react';
import Button from '../../../../components/Button';
import { LoginItemsWrapper, LoginText, LoginWrapper } from './styles';

const Login: React.FC = () => (
  <LoginWrapper>
    <LoginItemsWrapper>
      <LoginText>
        Faça o seu login
        <br />
        com o Spotify!
      </LoginText>
      <Button onClick={() => console.log('click test')}>Login</Button>
    </LoginItemsWrapper>
  </LoginWrapper>
);

export default Login;
