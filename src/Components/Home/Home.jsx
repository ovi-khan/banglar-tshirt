import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import Cart from "../Cart/Cart";
import "./Home.css";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([])
  const handleAddToCart = tShirt => {
    const exists = cart.find(ts => ts._id === tShirt._id)
    if(exists) {
      // alert('bal er toast kaj kore na')
      toast('bal er toast')
    } else {
      const newCart = [...cart, tShirt]
      setCart(newCart)
    }
  }
  const handleRemoveFromCart = id => {
    const remaining = cart.filter(ts => ts._id !== id);
    setCart(remaining)
  }
  return (
    <div className="grid grid-cols-3 gap-10">
        <div>
            
        </div>
      <div className="grid grid-cols-3 gap-5">
        {
          tshirts.map(tShirt =>
          <Tshirt 
          key={tShirt._id} 
          handleAddToCart = {handleAddToCart}
          tShirt={tShirt}
          >
          </Tshirt>
        )
        }
      </div>
      <div className="mt-5">
        <Cart 
        cart={cart}
        handleRemoveFromCart={handleRemoveFromCart}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;
