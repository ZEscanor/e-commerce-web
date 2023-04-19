import React, {useState,useEffect} from 'react';
import {Product} from './';

const SearchBar = ({products }) => {

const [searchTerm, setSearchTerm] = useState('')
const [searchQuery, setSearchQuery] = useState(''); // This is the debounced search term
const [productSearch, setProductSearch] = useState(products); 
const [searchProducts, setSearchProducts] = useState([]);


const handleChange = (e) => {
  setSearchTerm(e.target.value)
}

useEffect(() => {
  // console.log(searchTerm,productSearch )
  // Use debouncing 

  const timerId = setTimeout(() => {
    
    setSearchQuery(searchTerm);
    //filter the products by name and return the ones that match the search term 
    console.log(searchTerm, "debounced" ,  searchProducts)

    
  }
  , 1000)

 if (searchTerm !== '') {
  setSearchProducts(productSearch?.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase())))
}
else if (searchTerm === '' && searchProducts.length > 0) {
  setSearchProducts([])
}

  return () => {
    clearTimeout(timerId)
  }

  
}, [searchTerm])




   
  return (

    <div>
      <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange}/>
        <div className='products-container'>
        {searchProducts <= 0 ? <p>No products found</p> : null}
        {searchProducts?.map((pro) => 
          <Product key={pro.id} product={pro} />
        )}


        </div>


    
    
        
        
        
        </div>
  )
}

export default SearchBar