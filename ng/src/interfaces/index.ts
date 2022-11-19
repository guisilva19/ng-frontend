import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IContextProps {
    children: ReactNode;
}

export interface IUser {
    username: string;
    password: string;
}

export interface ITransfer { 
    value: number
    username: string
}

export interface IContextProvider {
    isOpenModal: boolean;
    setIsOpenModal: Dispatch<SetStateAction<boolean>>;
    registerUser: (data: IUser) => void
    login: (data: IUser) => void
    logout: () => void
    user: IUserObject | undefined
    loading: boolean
    balance: number | undefined
    credited: ITransaction[]
    debited: ITransaction[]
    newTransaction: (data: ITransfer) => void
}

interface ITransaction {
    id: string
    value: number
    createdAt: string
    debited: string
    credited: string
}

interface Account {
    balance: number
    id: string
    credited: ITransaction[]
    debited: ITransaction[]
}

export interface IUserObject {
    username: string;
    password: string;
    id: string;
    account: Account
}