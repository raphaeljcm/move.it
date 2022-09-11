import { v4 as uuidv4 } from 'uuid';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

type User = {
  id: string;
  name: string;
  imageUrl: string;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
};
interface UsersContextData {
  users: User[];
  addUser: (data: { name: string; imageUrl: string }) => void;
}
interface UsersProviderProps {
  children: ReactNode;
}

const UsersContext = createContext({} as UsersContextData);

export function UsersProvider({ children }: UsersProviderProps) {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = useCallback((data: { name: string; imageUrl: string }) => {
    setUsers(prevUsers => [
      ...prevUsers,
      {
        id: uuidv4(),
        name: data.name,
        imageUrl: data.imageUrl,
        level: 0,
        currentExperience: 0,
        challengesCompleted: 0,
      },
    ]);
  }, []);

  console.log(users);

  return (
    <UsersContext.Provider value={{ users, addUser }}>
      {children}
    </UsersContext.Provider>
  );
}

export const useUsers = () => useContext(UsersContext);
