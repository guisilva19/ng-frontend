import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/register.png";
import { ContainerRegister, Container } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schemaUser } from "../../validators";
// import { useContext } from "react";
import { Context, IUser } from "../../context/AuthContext";
import { BiErrorCircle } from "react-icons/bi";
import { Api } from "../../services/Api";
import { toast } from "react-toastify";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(schemaUser),
  });

  const navigate = useNavigate();

  const registerUser = async (data: IUser) => {
    // console.log(data)

    try {
    await Api.post("/register", data)
    toast.success("Cadastro feito com sucesso! Faça o login.", {
            autoClose: 2000,
          });
      
    } catch (err) {
      toast.error("Algo deu errado! Confira todos os campos preenchidos", {
              autoClose: 2000,
            });
    }
  };

  return (
    <Container>
      <section>
        <ContainerRegister>
          <h2>Hi!</h2>
          <p className="createAccountParaph">Create a new account</p>

          <form onSubmit={handleSubmit(registerUser)}>
            <input
              type="text"
              placeholder="Username"
              {...register("username")}
            />
            {errors?.username && (
              <p className="message-error">
                <BiErrorCircle size={15} /> {errors.username.message}
              </p>
            )}
            <input
              type="text"
              placeholder="Password"
              {...register("password")}
            />
            {errors?.password && (
              <p className="message-error">
                <BiErrorCircle size={15} /> {errors.password.message}
              </p>
            )}

            <button type="submit">Sign up</button>
          </form>

          <span>or</span>

          <p className="signParaph">
            Do have an account? <Link to="/session"> Sign in</Link>
          </p>
        </ContainerRegister>
        <div className="container-image">
          <img src={logo} alt="" />
        </div>
      </section>
    </Container>
  );
};

export default Register;
