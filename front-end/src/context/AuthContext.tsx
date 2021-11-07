import React, { createContext, useState } from 'react';

interface UserModel {
  name: string | null;
  token: string | null;
}

interface AuthContextInterface {
  user: UserModel;
  logOff: () => void;
  requestAuthData: (code: string) => void;
  requestTopItems: (token: string) => void;
}

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextInterface);

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const ngrok = 'http://3a6c-2804-14c-1a1-27a2-4c1f-6842-2e49-9709.ngrok.io';

  const [user, setUser] = useState<UserModel>({
    name: null,
    token: null,
  });

  const logOff = () =>
    setUser({
      name: null,
      token: null,
    });

  const requestAuthData = async (code: string) => {
    const response = await fetch(`${ngrok}/auth/getResults`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });

    if (response) {
      const data = await response.json();
      setUser({
        name: 'teste',
        token: data.access_token,
      });
      localStorage.setItem('@Adi/Auth', JSON.stringify(data));

      return true;
    }

    return null;
  };

  const requestTopItems = async (token: string) => {
    try {
      const response = await fetch(`${ngrok}/auth/getTopItems`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
      // const response = await fetch('https://api.spotify/v1/me/top/artists', {
      //   method: 'GET',
      //   mode: 'cors',
      //   headers: {
      //     'Content-type': 'application/json',
      //     Authorization: `Bearer ${token}`,
      //   },
      // });
      if (response) {
        const data = await response.json();
        return data;
      }
    } catch (e) {
      console.log(e);
    }
    return {
      error: 500,
      message: 'internal error',
    };
  };

  return (
    <AuthContext.Provider
      value={{ requestTopItems, logOff, requestAuthData, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};
