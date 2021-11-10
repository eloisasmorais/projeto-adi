import React, { createContext, useState } from 'react';

interface UserModel {
  name: string | null;
  token: string | null;
}

interface AuthContextInterface {
  user: UserModel;
  getLocalStorage: () => object | null;
  logOff: () => void;
  requestAuthData: (code: string) => void;
}

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextInterface);

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const ngrok = 'http://6ebe-2804-14c-1a1-27a2-8557-127e-2600-7598.ngrok.io';

  const [user, setUser] = useState<UserModel>({
    name: null,
    token: null,
  });

  const logOff = () =>{
    console.log("aidhoasjd")
    setUser({
      name: null,
      token: null,
    });
    localStorage.removeItem('@Adi/Auth');
    console.log("1" + user.token)
    const storage = localStorage.getItem('@Adi/Auth');
    console.log('2' +storage)
  }

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

  
  const getLocalStorage = () => {
    const storage = localStorage.getItem('@Adi/Auth');

    if (storage) {
      const ls = JSON.parse(storage);
      setUser({ ...ls, token: ls.access_token });
      return ls;
    }

    return null;
  };

  return (
    <AuthContext.Provider
      value={{
        getLocalStorage,
        logOff,
        requestAuthData,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
