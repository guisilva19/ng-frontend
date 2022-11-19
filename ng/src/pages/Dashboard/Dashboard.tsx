import Balance from "../../components/Balance/Balance";
import Header from "../../components/Header/header";
import { Load, Section, Transactions } from "./style";
import Debiteds from "../../components/Debiteds/Debiteds";
import Crediteds from "../../components/Crediteds/Crediteds";
import NewTransaction from "../../components/NewTransaction/newTransaction";
import { useContext } from "react";
import { Context } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const { user, loading} = useContext(Context);
  const navigate = useNavigate();


  if (!user) {
    navigate("/session", { replace: true });
  }
  
  if (loading)
    return (
      <Load>
        <div></div>
      </Load>
    );

  return (
    <>
      <div style={{ display: "flex" }}>
        <NewTransaction />
        <Header />
        <Section>
          <Balance />
          <Transactions>
            <Debiteds />
            <Crediteds />
          </Transactions>
        </Section>
      </div>
    </>
  );
};

export default DashBoard;
