import { Section } from "./style";
import { AiFillCloseCircle } from "react-icons/ai";
import { schemaNewTransaction } from "../../validators";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { BiErrorCircle } from "react-icons/bi";
import { Context } from "../../context/AuthContext";

interface ITransaction {
  username: string;
  value: number;
}

const NewTransaction = () => {
  const{ isOpenModal, setIsOpenModal } = useContext(Context)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITransaction>({
    resolver: yupResolver(schemaNewTransaction),
  });

  const newTransaction = (data: ITransaction) => {
    // console.log(data);
  };

  return (
    <Section style={{display: isOpenModal ? 'flex' : 'none'}}>
      <div>
        <div>
          <h2>New Transaction</h2>
          <button>
            <AiFillCloseCircle size={30} onClick={() => setIsOpenModal(false)}/>
          </button>
        </div>

        <form onSubmit={handleSubmit(newTransaction)}>
          <input type="number" placeholder="Value" {...register("value")} />
          {errors?.value && (
            <p className="message-error">
              <BiErrorCircle size={15} /> Value is required
            </p>
          )}
          <input type="text" placeholder="Username" {...register("username")} />
          {errors?.username && (
            <p className="message-error">
              <BiErrorCircle size={15} /> Username is required
            </p>
          )}
          <button type="submit">Transfer</button>
        </form>
      </div>
    </Section>
  );
};

export default NewTransaction;
