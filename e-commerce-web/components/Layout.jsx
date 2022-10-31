import React from 'react';
import Head from 'next/head'; // next js head
import Navbar from './Navbar';
import Footer from './Footer';



 import { useStateContext } from '../context/StateContext';



const Layout = ({children}) => {
  const {darkMode, setDarkMode} = useStateContext();


  return (
    <div className='layout' id = {darkMode? 'dark' : 'light'} >
      <Head>
        <title> Headphone Mart</title>
      </Head>

      
      <header>
     
    
        <Navbar/>
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
      </div>
  )
}

export default Layout