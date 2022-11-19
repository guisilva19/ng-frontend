import { AxiosResponse } from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  IContextProps,
  IContextProvider,
  ITransfer,
  IUser,
} from "../interfaces";
import { Api } from "../services/Api";

export const Context = createContext<IContextProvider>({} as IContextProvider);

const ContextProvider = ({ children }: IContextProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [user, setUser] = useState();
  const [balance, setBalance] = useState(0);
  const [credited, setCredited] = useState([]);
  const [debited, setDebited] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("@token");

  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      if (token) {
        try {
          Api.defaults.headers.common.Authorization = `Bearer ${token}`;
          const { data } = await Api.get(`/user`);
          setBalance(data.account.balance);
          setCredited(data.account.credited);
          setDebited(data.account.debited);
          setUser(data);
          navigate("/dashboard", { replace: true });
        } catch (error) {
          console.error(error);
        }
      }

      setLoading(false);
    };
    loadUser();
  }, [token]);

  const registerUser = async (data: IUser) => {
    try {
      await Api.post("/register", data);
      toast.success("Cadastro feito com sucesso! Faça o login.", {
        autoClose: 2000,
      });
      navigate("/session", { replace: true });
    } catch (err) {
      toast.error("Algo deu errado! Confira todos os campos preenchidos", {
        autoClose: 2000,
      });
    }
  };

  const login = async (data: IUser) => {
    await Api.post("/login", data)
      .then((res) => {
        toast.success("Cadastro feito com sucesso! Faça o login.", {
          autoClose: 2000,
        });
        localStorage.setItem("@token", res.data.token);
        navigate("/dashboard", { replace: true });
      })
      .catch((err) => {
        console.log("err", err);
        toast.error("Algo deu errado! Confira todos os campos preenchidos", {
          autoClose: 2000,
        });
      });
  };

  const logout = () => {
    localStorage.clear();
    navigate("/session", { replace: true });
  };

  const newTransaction = async (data: ITransfer) => {
    if (balance < data.value) {
      return toast.error(
        "Verique se username está correto ou se está tentando tranferir para voçe mesmo"
      );
    }
    try {
      await Api.post("transaction", data);
      await window.location.reload();
      toast.success("Transação feita com sucesso");
      setIsOpenModal(false);
    } catch (err) {
      toast.error(
        "Verique se username está correto ou se está tentando tranferir para voçe mesmo"
      );
    }
  };

  return (
    <Context.Provider
      value={{
        isOpenModal,
        setIsOpenModal,
        registerUser,
        login,
        logout,
        user,
        loading,
        balance,
        credited,
        debited,
        newTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
