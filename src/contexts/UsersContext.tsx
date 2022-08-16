import { createContext, ReactNode, useState } from 'react';

const UsersContext = createContext({});

interface UsersProviderProps {
  children: ReactNode;
}

type Users = {
  users: {
    name: string;
    imageUrl: string;
  }[];
};

export function UsersProvider({ children }: UsersProviderProps) {
  const [users, setUsers] = useState({} as Users);

  return <UsersContext.Provider value={{}}>{children}</UsersContext.Provider>;
}
