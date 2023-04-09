import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0) {
        message = <p>Please add some Product</p>
    }
    else {
        message = <h1>You are added some cart</h1>
    }
    return (
        <div>
            <div className='text-center'>
            <ToastContainer />
            <h1 className='text-3xl text-orange-500'><span className={cart.length === 1 ? 'text-blue-700' : 'text-red-800'}c>Order Summery:</span> {cart.length}</h1>
            </div>
            {message}
            {cart.length === 2 ? "requirement fill" : "requirement not fill"}
            <div className='mt-10'>
                {
                    cart.map(tshirt => <p
                    className='mt-5'
                        key={tshirt._id}
                    >{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt._id)}><span className='bg-red-400 px-3 py-1 rounded hover:bg-red-900 hover:border-black border border-spacing-1'>X</span></button></p>
                    )
                }
                {
                    cart.length === 2 && <span>2 item added</span>
                }
                {
                    cart.length === 3 || <span>fixed 3 card add</span>
                }
            </div>  
        </div>
    );
};

export default Cart;    