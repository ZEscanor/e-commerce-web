import React, {useRef, useEffect, useState} from 'react';
import Link from 'next/link';


import {AiFillSetting, AiOutlineExclamationCircle, AiOutlineSearch, AiOutlineSetting, AiOutlineShopping} from "react-icons/ai";
import { TiWeatherSunny, TiWeatherNight } from 'react-icons/ti';
import { AiOutlineBorderHorizontal, AiOutlineMore } from 'react-icons/ai';
import {Cart} from "./";
import { useStateContext } from '../context/StateContext';
import ReactSwitch from 'react-switch';
import NavbarDrop from './NavbarDrop';







const Navbar = ({products}) => {
  
  const {showCart, setShowCart, darkMode,setDarkMode, menuOpen, setMenuOpen, expanded, setExpanded} = useStateContext();

  const menuTriggerCheck = useRef(null);
 
  
  
 const toggleMode = () => {
  setDarkMode(!darkMode);
 }

 const toggleExpanded = (name) => {
 
  
    setExpanded({
      expanded: true,
      name: name
  })
}

const unToggleExpanded = () => {
  setExpanded({
    expanded: false,
    name: ""
  })
}



 const toggleMenu = () => {
      if(menuOpen){
        return
      }
      else if(!menuOpen){
     setMenuOpen(true);
      }
 }

const menuChecker = (e)=>{
  if(!null){
    // console.log(menuTriggerCheck)
  if(menuTriggerCheck.current && !menuTriggerCheck.current?.contains(e.target)){
    // console.log("click happened outside the menu")
    setMenuOpen(false)
  }
}
}

 useEffect(() => {

  document.addEventListener("mousedown",menuChecker);
  return() => {
    document.removeEventListener("mousedown", menuChecker);
  }
})



  return (
    < >
    <nav className='navbar-container' onMouseLeave={()=>unToggleExpanded()} >
      <div className='logo'>
        <Link href='/'>
        {/* <img className="imgZ" src= "/headphones_b_1.webp" alt="headphone img"/> */}
        <img src='../png/headlogo.png' className='imgZ'/>  
     </Link>
        </div>


      <ul className='innerNavItems' >  {/* onMouseLeave={unToggleExpanded} */}
      <li className="firstList" onMouseEnter={()=>toggleExpanded("name")}  >
        <Link href="/listing" >
          
      Products
      
      </Link>
      
      </li>
       <li onMouseEnter={()=>toggleExpanded("Speaker")} >
        <Link href="/listing">
         Speakers
         </Link>
       </li>
       <li onMouseEnter={()=>toggleExpanded("Headphone")}>
        <Link href="/listing">
          Headphones
        </Link>
       </li >
       <li onMouseEnter={()=>toggleExpanded("Earphone")} >
        <Link href="/listing">
          Earphones
        </Link>
       </li>
       <li onMouseEnter={()=>toggleExpanded("Watch")} >
        <Link href="/listing">
          Accessories
        </Link>
       </li>

  
       
       <li>
      <Link href="/about">
        Mission
        
        
        </Link>
        </li>
       

      </ul>
         {expanded.expanded == true ? <NavbarDrop products={products} 
      /> : null}
       
      <div className="navMenu">
        <button type='button' className='cart-icon' style={{marginTop:"15px", marginLeft:"auto"}}>
          <Link href="/search">
          <AiOutlineSearch/>
          </Link>
        </button>
     
      </div>

       <div className='navMenu' ref={menuTriggerCheck}  >
      
        
        {menuOpen ?  (
       <button type='button' className='cart-icon' style={{marginTop:"15px"}}  ref={menuTriggerCheck} disabled>
          <AiFillSetting/>
      </button>) : ( <button type='button' className='cart-icon'  onClick={toggleMenu} style={{marginTop:"15px"}} ref={menuTriggerCheck}>
          <AiOutlineSetting/>
      </button>)}

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
   
      </>
  )
}

export default Navbar





