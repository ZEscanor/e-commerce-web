import React, {useEffect} from 'react';
import Head from 'next/head'; // next js head
import Navbar from './Navbar';
import Footer from './Footer';
import MiddleSection from './MiddleSection';




 import { useStateContext } from '../context/StateContext';
import TopBanner from './TopBanner';
import FooterEnd from './FooterEnd';
import SearchBar from './SearchBar';
import NavbarDrop from './NavbarDrop';
import Popup from './Popup';



const Layout = ({children}) => {
  const {darkMode, setDarkMode, expanded, products, setExpanded} = useStateContext();

// {console.log(expanded)}


  useEffect(() => {
  
  }, [expanded])


  return (
    <div className='layout' id = {darkMode? 'dark' : 'light'} >
      <Head>
        <title> Headphone Mart</title>
      </Head>

      <TopBanner/>
      <header >
    
        <Navbar products={products}/>
        {/* {expanded.expanded == true ? <NavbarDrop products={products} onMouseEnter={()=>setExpanded({
        expanded: true,
        ...expanded
      })}
      /> : null} */}
      </header>
      <main className='main-container'>
        {children}

      </main>
      <Popup/>
      
      <footer>
        <Footer/>
      </footer>
      <FooterEnd/>
      </div>
  )
}

export default Layout