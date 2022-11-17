import { createContext, ReactNode, useEffect, useState } from "react";
import { Api } from "../services/Api";

interface IContextProps {
  children: ReactNode;
}

export interface IUser {
    username: string
    password: string
}

interface IContextProvider {
    isUser: Object
    registerUser: (data: IUser) => void
}

export const Context = createContext<IContextProvider>({} as IContextProvider);

const ContextProvider = ({ children }: IContextProps) => {
  const [isUser, setIsUser] = useState({});

  const registerUser = (data: IUser) => {
  };

  return <Context.Provider value={{isUser, registerUser}}>{children}</Context.Provider>;
};

export default ContextProvider;
