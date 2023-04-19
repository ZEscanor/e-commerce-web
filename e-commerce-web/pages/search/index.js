
import React, {useState} from 'react';
import { SearchBar } from '../../components';
import {client} from "../../lib/client";

const searchIndex = ({products}) => {
  
  return (
    <div>
        <SearchBar products={products}/>
    </div>

  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]' // grab all products from sanity dashboard
  const products = await client.fetch(query);

  return {
    props: {
      products
    }
  }
}

export default searchIndex