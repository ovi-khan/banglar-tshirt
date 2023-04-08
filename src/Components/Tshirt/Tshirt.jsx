import React from 'react';
import './Tshirt.css'

const Tshirts = ({tShirt, handleAddToCart}) => {
    const {_id, price, name, gender, picture} = tShirt
    return (
        <div className='border-teal-100 border p-2 rounded-lg mt-10'>
            <img className='border rounded-lg' src={picture} alt="" />
            <h3>Name: {name}</h3>
            <h3>Price: {price}</h3>
            <button onClick={() => handleAddToCart(tShirt)} className='px-3 py-2 mt-3 rounded-md bg-blue-200'>Buy Now</button>
        </div>
    );
};

export default Tshirts;