import React, { useContext } from 'react';
import Causin from '../Causin/Causin';
import { moneyContext } from '../Grandpa/Grandpa';

const Aunty = ({ring}) => {
    const [money, setMoney] = useContext(moneyContext)
    return (
        <div>
            <h1>Aunty</h1> 
            <p><span>Grandpa Money: {money}</span></p>
            <button onClick={() => setMoney(money + 1000)} className='border px-2 py-2 rounded hover:bg-red-500 border-1 border-red-900'>Send 1000Tk</button>
            <section className='flex'>
                <Causin>Nibir</Causin>
                <Causin hasFriend={true} ring={ring}>Nibira</Causin>
            </section>
        </div>
    );
};

export default Aunty;