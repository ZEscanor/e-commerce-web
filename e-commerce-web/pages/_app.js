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


export const getServerSideProps = async () => {
  const query = '*[_type == "product"]' // grab all products from sanity dashboard
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]' // grab all banner from sanity dashboard
  const bannerData = await client.fetch( bannerQuery);

  return {
    props: {
      products, bannerData
    }
  }
}

export default MyApp
