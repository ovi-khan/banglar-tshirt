import React, { useContext } from 'react';
import { ringContext } from '../../Grandpa/Grandpa';

const Brother = () => {
    const ring1 = useContext(ringContext)
    return (
        <div>
            <h1>Brother</h1>
            <p><span>ring1: {ring1}</span></p>
        </div>
    );
};

export default Brother;