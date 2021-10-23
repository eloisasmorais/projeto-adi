import React, { createContext, useState } from 'react';

interface UserModel {
  name: string | null;
  token: string | null;
}

interface AuthContextInterface {
  user: UserModel;
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

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
