import React from 'react';
import Head from 'next/head'; // next js head
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
        <title> Store Of Kings</title>
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