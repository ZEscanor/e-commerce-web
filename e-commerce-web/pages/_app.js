import React from "react";
import '../styles/globals.css'

import {Layout} from "../components";
import {StateContext} from '../context/StateContext';
import {Toaster} from 'react-hot-toast';
function MyApp({ Component, pageProps }) {

  return (
    <StateContext>
    <Layout> 
    <Toaster/>
      <Component {...pageProps} />
    </Layout >
  </StateContext>
  )
} // when we wrap our layout it wont render so we use "children so layout has access"



export default MyApp
