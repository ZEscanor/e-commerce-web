import React from 'react';
import Link from 'next/link';


import {AiOutlineShopping} from "react-icons/ai";
import {Cart} from "./";
import { useStateContext } from '../context/StateContext';

import ReactSwitch from 'react-switch';








const Navbar = () => {
  
  const {showCart, setShowCart, totalQuantities,darkMode,setDarkMode} = useStateContext();
  
 const toggleMode = () => {
  setDarkMode(!darkMode);
 }

  return (
    <div className='navbar-container' >
      <p className='logo'>
        <Link href='/'>
        {/* <img className="imgZ" src= "/headphones_b_1.webp" alt="headphone img"/> */}
       Headphone Mart
        
        </Link>
        </p>
        <div className= "switch">
      DarkMode
      <ReactSwitch onChange={toggleMode} checked={darkMode === true} />
      </div>
      <button type='button' className='cart-icon' onClick={()=>setShowCart(true)}>
       <AiOutlineShopping/>
       <span className='cart-item-qty'>
          {totalQuantities}
       </span>
      </button>
      {showCart && <Cart/>}
      </div>
  )
}

export default Navbar