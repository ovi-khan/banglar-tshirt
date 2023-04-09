import React, { useContext } from 'react';
import { moneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money] = useContext(moneyContext)
    return (
        <div>
            <h1>Sister</h1>
            <p><span>Grandpa Money: {money}</span></p>
        </div>
    );
};

export default Sister;