import { useContext } from "react";
import { GrAdd } from "react-icons/gr";
import { Context } from "../../context/AuthContext";
import { Container } from "./style";

const Balance = () => {
  const { setIsOpenModal, balance, credited } = useContext(Context);
  return (
    <Container>
      <div>
        <h2>Balance</h2>
        <span>
          R$<p>{balance?.toFixed(2).replace('.', ',')}</p>
        </span>
      </div>
      <button>
        <GrAdd size={20} onClick={() => setIsOpenModal(true)} />
      </button>
    </Container>
  );
};

export default Balance;
