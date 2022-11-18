import { Container, ContainerSession } from "./style";
import session from "../../assets/session.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../../services/Api";
import { IUser } from "../../context/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form'
import { schemaUser } from "../../validators";
const Session = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(schemaUser),
  });

  const navigate = useNavigate();

  const login = async (data: IUser) => {
    await Api.post("/login", data)
      .then(() => {
        toast.success("Cadastro feito com sucesso! Faça o login.", {
          autoClose: 2000,
        });
        navigate("/dashboard", { replace: true });
      })
      .catch((err) => {
        console.log("err", err);
        toast.error("Algo deu errado! Confira todos os campos preenchidos", {
          autoClose: 2000,
        });
      });
  };

  return (
    <Container>
      <section>
        <div className="container-image">
          <img src={session} alt="image-session" />
        </div>
        <ContainerSession>
          <h2>Welcome!</h2>
          <p className="createAccountParaph">Sign in to continue</p>

          <form onSubmit={handleSubmit(login)}>
            <input type="text" placeholder="Username" {...register('username')}/>
            <input type="text" placeholder="Password" {...register('password')}/>
            <button>Sign in</button>
          </form>

          <span>or</span>

          <p className="signParaph">
            Do have an account? <Link to="/register">Sign in</Link>
          </p>
        </ContainerSession>
      </section>
    </Container>
  );
};

export default Session;
