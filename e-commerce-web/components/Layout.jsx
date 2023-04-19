import React from 'react';
import Head from 'next/head'; // next js head
import Navbar from './Navbar';
import Footer from './Footer';
import MiddleSection from './MiddleSection';



 import { useStateContext } from '../context/StateContext';
import TopBanner from './TopBanner';
import FooterEnd from './FooterEnd';
import SearchBar from './SearchBar';



const Layout = ({children}) => {
  const {darkMode, setDarkMode} = useStateContext();


  return (
    <div className='layout' id = {darkMode? 'dark' : 'light'} >
      <Head>
        <title> Headphone Mart</title>
      </Head>

      <TopBanner/>
      <header>
     
    
        <Navbar/>
      </header>
      <main className='main-container'>
        {children}

      </main>
      <footer>
        <Footer/>
      </footer>
      <FooterEnd/>
      </div>
  )
}

export default Layout