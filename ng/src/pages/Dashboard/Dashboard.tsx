import Balance from "../../components/Balance/Balance";
import Header from "../../components/Header/header";
import Transactions from "../../components/Transactions/Transactions";
import { Section } from "./style";

const DashBoard = () => {




  return (
    <>
      <div style={{ display: "flex" }}>
        <Header />
        <Section>
          <Balance />
          <Transactions/>
        </Section>
      </div>
    </>
  );
};

export default DashBoard