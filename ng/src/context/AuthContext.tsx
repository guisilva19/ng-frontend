import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface IContextProps {
  children: ReactNode;
}

export interface IUser {
  username: string;
  password: string;
}

interface IContextProvider {
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

export const Context = createContext<IContextProvider>({} as IContextProvider);

const ContextProvider = ({ children }: IContextProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <Context.Provider value={{ isOpenModal, setIsOpenModal }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
