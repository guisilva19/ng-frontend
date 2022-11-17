import { Container, ContainerSession } from "./style";
import session from "../../assets/session.png";
import { Link } from "react-router-dom";

const Session = () => {
  return (
    <Container>
      <section>
        <div className="container-image">
          <img src={session} alt="image-session" />
        </div>
        <ContainerSession>
          <h2>Welcome!</h2>
          <p className="createAccountParaph">Sign in to continue</p>

          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
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
