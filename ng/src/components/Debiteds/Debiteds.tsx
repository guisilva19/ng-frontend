import { useContext } from "react";
import { Context } from "../../context/AuthContext";
import { Container } from "./style";

const Debiteds = () => {
  const { debited } = useContext(Context);

  return (
    <Container>
      <div>
        <h2>Debited</h2>
      </div>
      <ul>
        {debited.map((debit) => (
          <li key={debit.id}>
            <h4>R$ -{debit.value.toFixed(2).replace('.', ',')}</h4>
            <div>
              <p>
                Date:{" "}
                {debit.createdAt.split("T")[0].split("-").reverse().join("/")}
              </p>
              <p>Hours: {debit.createdAt.split("T")[1].split(".")[0]}</p>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Debiteds;
