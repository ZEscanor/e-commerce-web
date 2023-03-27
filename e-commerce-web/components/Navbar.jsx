import React, {useRef, useEffect} from 'react';
import Link from 'next/link';


import {AiOutlineShopping} from "react-icons/ai";
import { TiWeatherSunny, TiWeatherNight } from 'react-icons/ti';
import { AiOutlineBorderHorizontal, AiOutlineMore } from 'react-icons/ai';
import {Cart} from "./";
import { useStateContext } from '../context/StateContext';

import ReactSwitch from 'react-switch';








const Navbar = () => {
  
  const {showCart, setShowCart, totalQuantities,darkMode,setDarkMode, menuOpen, setMenuOpen} = useStateContext();

  let menuTriggerCheck = useRef();
  
 const toggleMode = () => {
  setDarkMode(!darkMode);
 }

 const toggleMenu = () => {
     setMenuOpen(!menuOpen);
 }

 useEffect(() => {
  let menuChecker = (e)=>{
    if(!null){
      // console.log(menuTriggerCheck)
    if(!menuTriggerCheck.current?.contains(e.target)){
      setMenuOpen(false)
    }
  }
  };

  document.addEventListener("mousedown",menuChecker);
  

  return() => {
    document.removeEventListener("mousedown", menuChecker);
  }
})

  return (
    <nav className='navbar-container'>
      <div className='logo'>
        <Link href='/'>
        {/* <img className="imgZ" src= "/headphones_b_1.webp" alt="headphone img"/> */}
        <img src='../png/headlogo.png' className='imgZ'/>  
     </Link>
        </div>


      <ul className='innerNavItems'>
      <li className="firstList" >
        <Link href='listing'>
      Products
      {/* <ReactSwitch onChange={toggleMode} checked={darkMode === true} /> */}
      </Link>
      </li>
      {/* <li>
        Plans
      </li> */}
      
      {/* <li>
      <Link href="about">
        Mission
        
        
        </Link>
        </li>
       */}

      </ul>
       


       <div className='navMenu' ref={menuTriggerCheck} >
       <button type='button' className='cart-icon'  onClick={toggleMenu} style={{marginTop:"15px"}} >
          <AiOutlineMore />
      </button>

      {menuOpen && (
          <ul className='navBarMenuItems' ref={menuTriggerCheck}>
            <li onClick={()=>setShowCart(true)}>
              
            <AiOutlineShopping/>
               Cart
            </li>
            <li   onClick={()=>setShowCart(true)}>
              WishList
            </li>
            <li onClick={toggleMode}>
              {darkMode? <TiWeatherSunny/> : <TiWeatherNight/>}
              DarkMode
            </li>
          </ul>
          )
        }
       </div>
      
      
      {showCart && <Cart/>}
      </nav>
  )
}

export default Navbar