import Link from 'next/link'
import React from 'react'
import { AiFillAccountBook, AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'

const TopBanner = () => {
  return (
    <div style={{height:"70px", backgroundColor:"orange", display:"flex",
    justifyContent: "center",
    alignItems: "center", fontWeight:"bolder", color:'darkblue'}}>
        <p style={{marginRight:"20px"}}>
            <span>Free Shipping on all orders over $100</span>
            
        </p>
        <p  style={{marginRight:"20px"}}>
            <span style={{
              textDecoration:"underline",
              color:"darkblue",
              fontWeight:"bolder"
              
              
            }}>Free Returns</span>
        </p>
        <p style={{textDecoration:"underline"
      
      }}>
          <span>
            
            <Link href='/listing'> 
            
            Shop NOW!
            
            </Link> </span>
        </p>
        {/* <div style={{marginLeft:"auto", display:"flex", alignItems:"center"}}>
          <div style={{marginRight:"20px"}}>
            <AiFillFacebook size="20px" />

          </div> */}
    </div>



  )
}

export default TopBanner