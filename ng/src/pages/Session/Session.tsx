import { Container, ContainerSession } from "./style";
import session from "../../assets/session.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../../services/Api";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form'
import { schemaUser } from "../../validators";
import { IUser } from "../../interfaces";
import { useContext } from "react";
import { Context } from "../../context/AuthContext";
const Session = () => {
  const {login} = useContext(Context)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(schemaUser),
  });
 

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
