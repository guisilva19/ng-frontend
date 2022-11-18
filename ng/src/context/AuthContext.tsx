import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";


interface IContextProps {
  children: ReactNode;
}

export interface IUser {
  username: string;
  password: string;
}

interface IContextProvider {
  isUser: Object;
}

export const Context = createContext<IContextProvider>({} as IContextProvider);

const ContextProvider = ({ children }: IContextProps) => {
  const [isUser, setIsUser] = useState({});

  return (
    <Context.Provider value={{ isUser }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
