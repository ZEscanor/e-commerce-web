import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';


const Footer = () => {
  return (
    <div className='footer-container'>
      <div style={{display:'grid', gridTemplateColumns:"repeat(3,1fr)",height:"120px", fontSize:"19px"}}>
      <div className='column' style={{fontWeight:'100'}}>
      <h3>SHOP </h3>
      <p>Headphones</p>
      <p>Earphones</p>
      <p>Speakers</p>
      <p>Accessories</p>
      </div>
      <div className='column' style={{fontWeight:'100'}}>
      <h3>Support</h3>
      <p>Contact Us</p>
      <p>Shipping & Returns</p>
      <p>Warranty</p>
      <p>FAQs</p>
      </div>
      <div className='column' style={{fontWeight:'100'}}>
      <h3>ABOUT US</h3>
      <p>Our Story</p>
      <p>Careers</p>
      <p>Press</p>
      <p>Investors</p>
      </div>
      </div>
      </div>
  )
}

export default Footer