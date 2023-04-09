import React from 'react';
import Special from '../Special/Special';

const Myself = ({ring}) => {
    return (
        <div>
            <h1>Myself</h1>
            <Special ring={ring}></Special>
        </div>
    );
};

export default Myself;