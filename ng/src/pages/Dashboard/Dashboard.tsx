import Balance from "../../components/Balance/Balance";
import Header from "../../components/Header/header";
import { Section, Transactions } from "./style";
import Debiteds from "../../components/Debiteds/Debiteds";
import Crediteds from "../../components/Crediteds/Crediteds";

const DashBoard = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Header />
        <Section>
          <Balance />
          <Transactions>
            <Debiteds/>
            <Crediteds/>
          </Transactions>
        </Section>
      </div>
    </>
  );
};

export default DashBoard;
