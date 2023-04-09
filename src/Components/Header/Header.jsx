import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='nav'>
             <nav className='text-center bg-slate-400 p-3'>
                <Link to="/">Home</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/grandpa">Grandpa</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
             </nav>
        </div>
    );
};

export default Header;