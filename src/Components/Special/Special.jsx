import React, { useContext } from 'react';
import { ringContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const goldRing = useContext(ringContext)
    return (
        <div>
            <h1>Special</h1>
            <p><span>Ring: {ring}</span></p>
            <p><span>ring: {goldRing}</span></p>
        </div>
    );
};

export default Special;