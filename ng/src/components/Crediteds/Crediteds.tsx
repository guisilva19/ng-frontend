import { useContext } from "react";
import { Context } from "../../context/AuthContext";
import { Container } from "./style";

import React from "react";

const Crediteds = () => {
  const { credited } = useContext(Context);

  return (
    <Container>
      <div>
        <h2>Credited</h2>
      </div>
      <ul>
        {credited.map((credit) => (
          <li key={credit.id}>
            <h4>R$ {credit.value.toFixed(2).replace(".", ",")}</h4>
            <div>
              <p>
                Date:{" "}
                {credit.createdAt.split("T")[0].split("-").reverse().join("/")}
              </p>
              <p>Hours: {credit.createdAt.split("T")[1].split(".")[0]}</p>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Crediteds;
