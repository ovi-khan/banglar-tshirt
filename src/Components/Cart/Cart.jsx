import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <div className='text-center'>
            <ToastContainer />
            <h1 className='text-3xl text-orange-500'>Order Summery: {cart.length}</h1>
            </div>
            <div className='mt-10'>
                {
                    cart.map(tshirt => <p
                    className='mt-5'
                        key={tshirt._id}
                    >{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}><span className='bg-red-400 px-3 py-1 rounded hover:bg-red-900 hover:border-black border border-spacing-1'>X</span></button></p>
                    )
                }
            </div>  
        </div>
    );
};

export default Cart;    