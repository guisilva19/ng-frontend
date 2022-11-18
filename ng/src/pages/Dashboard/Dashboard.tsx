import Balance from "../../components/Balance/balance";
import Header from "../../components/Header/header";
import { Section, Transactions } from "./style";
import Debiteds from "../../components/Debiteds/debiteds";
import Crediteds from "../../components/Crediteds/crediteds";
import NewTransaction from "../../components/NewTransaction/newTransaction";

const DashBoard = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
    <NewTransaction/>
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
