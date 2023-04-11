import React, {useEffect, useState} from 'react'
import { Product } from '../../components'
import {client} from "../../lib/client";
import {AiOutlineArrowUp, AiOutlineArrowDown ,AiFillFunnelPlot, AiFillEdit} from 'react-icons/ai';
const Home = ({products,bannerData}) => { //We Get our prouducts from the async call at the bottom
    const [sorted, setSorted] = useState(products);
    const [sortBool, setSortBool] = useState(false);

  const sort = () => {
    
    setSortBool(true);
    setSorted(sorted.sort((a, b) => a.price - b.price));
     
  
  }
  const reverseSort = () => {
    setSortBool(true);
   setSorted(sorted.sort((a, b) => b.price - a.price));
  }

  const nameSort = () => {
    setSortBool(true);
      setSorted(sorted.sort((a, b) => a.name.localeCompare(b.name)));
  }

 // State change when sort button is clicked
 useEffect(() => {
  if(sortBool){
    setSortBool(false);
  }
 }, [sorted,sortBool]);
    
  



 
  return (
    <>
    <div>
    <h1>Products</h1>

             <AiFillFunnelPlot/>
           <AiOutlineArrowUp onClick={()=> sort()} /> s
            <AiOutlineArrowDown onClick={()=>reverseSort()}/>
            <AiFillEdit onClick={()=>nameSort()}/>
            </div>
      
    {console.log(products)}
    
   

    <div className='products-container'>
      {sorted?.map((product)=>
             <Product key={product.id} product= {product}/>
      )}
    </div>

    </>
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
export default Home