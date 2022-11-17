import { Container } from "./style";
import { GrAdd } from "react-icons/gr";

const Transactions = () => {

  return (
    <Container>
      <div>
        <h2>Transactions</h2>
        <button>
          <GrAdd size={20}/>
        </button>
      </div>
      <ul>
        <li>
          <h4>R$ -50,00</h4>
          <span>2022-11-17T13:01:43</span>
        </li>
        <li>
          <h4>R$ -30,00</h4>
          <span>2022-11-17T13:01:43</span>
        </li>
        <li>
          <h4>R$ -10,00</h4>
          <span>2022-11-17T13:01:43</span>
        </li>
        <li>
          <h4>R$ -150,00</h4>
          <span>2022-11-17T13:01:43</span>
        </li>
      </ul>
    </Container>
  );
};

export default Transactions;
