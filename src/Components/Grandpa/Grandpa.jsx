import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

export const ringContext = createContext("Gold");
export const moneyContext = createContext(0);
const Grandpa = () => {
  const ring = "Dimond";
  const [money, setMoney] = useState(0);
  return (
    <div className="grandpa">
      <h1>Grandpa</h1>
      <p>My Money: {money}</p>
      <moneyContext.Provider value={[money, setMoney]}>
        <ringContext.Provider value="Goldren ring">
          <section className="flex">
            <Father ring={ring}></Father>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </section>
        </ringContext.Provider>
      </moneyContext.Provider>
    </div>
  );
};

export default Grandpa;
