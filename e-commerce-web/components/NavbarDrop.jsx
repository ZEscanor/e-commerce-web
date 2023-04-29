import React, {useState, useRef,useEffect} from 'react';
import {Product} from '.'
import {client} from '../lib/client';
import { useStateContext } from '../context/StateContext';
import Link from 'next/link';



const NavbarDrop = ({products}) => {
  

  
  const [searchArray, setSearchArray] = useState(products);
  //const random = Math.floor(Math.random() * products.length);
  const dropRef = useRef(null);
  const [bgColor, setBgColor] = useState('white');
  const currPath = window.location.pathname;
  
  console.log(window.location.pathname);


const {expanded, setExpanded} = useStateContext();

function handleMouseEnter() {
  setBgColor('white');
}


 if(products.length === 0) {
  
  window.location.replace("/");
  console.log('bad reload, redirecting to home page');

 }
  return (
     
    <div style={
      {
        backgroundColor: bgColor,
        height: '400px',
        width: '100%',
        position: 'absolute',
        zIndex: '100000',
        marginTop: '100px'
      }
    }  

    onMouseEnter={handleMouseEnter} >
    <div className='products-container' ref={dropRef} >
      {searchArray?.filter((product) => {
        if(product.name?.toLowerCase().includes(expanded.name.toLowerCase())) {
          return product
        }
        
        
      }).map((product)=>
             <Product key={product.id} product= {product}/>
      )}
     
    
     
      {searchArray.slice(0, 5).map((product)=> {
            if(expanded.name === 'name') {
              return <Product key={product.id} product= {product}/>
        }
       

      })} 
      
      
       <button style={{
        backgroundColor: 'orange',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        width: '100%',
        height: '50px',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: 'black',
        marginTop: '10px'
      
       }} >
        <Link href='/products'>See all products</Link>

      </button>
      </div>
     
    </div>
  )
}





// export const getServerSideProps = async () => {
//   const query = '*[_type == "product"]' // grab all products from sanity dashboard
//   const products = await client.fetch(query);

//   return {
//     props: {
//       products, bannerData
//     }
//   }
// }

export default NavbarDrop