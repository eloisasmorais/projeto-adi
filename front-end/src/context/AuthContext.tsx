import React, { createContext, useState } from 'react';

interface UserModel {
  name: string | null;
  token: string | null;
}

interface AuthContextInterface {
  user: UserModel;
  logOff: () => void;
  requestAuthData: () => void;
}

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextInterface);

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<UserModel>({
    name: null,
    token: null,
  });

  const logOff = () =>
    setUser({
      name: null,
      token: null,
    });

  const requestAuthData = () => {};

  return (
    <AuthContext.Provider value={{ user, logOff, requestAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};
