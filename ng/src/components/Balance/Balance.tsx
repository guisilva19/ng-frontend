import { GrAdd } from "react-icons/gr";
import { Container } from "./style";

const Balance = () => {
  const balance = 100.5;
  return (
    <Container>
      <div>
        <h2>Balance</h2>
        <span>
          R$<p>{balance.toFixed(2)}</p>
        </span>
      </div>
      <button>
        <GrAdd size={20} />
      </button>
    </Container>
  );
};

export default Balance;
