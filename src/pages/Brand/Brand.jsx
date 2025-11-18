import React from 'react'
import './brand.css'
import brand from '../../assets/brand.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


const Brand = () => {
  return (
    <div id='brand' className='brand-container'>
      <div className='brand-img'>
        <img src={brand} alt="" />
      </div>
      <div className='brand-right-container'>
        <h1>Our brand reaches more than 1 million affluent readers across Asia</h1>
        <h2>THE ESSENTIAL PUBLICATION FOR A DIGITAL-SAVVY AUDIENCE.</h2>
        <p>Our readers are connected 24/7 and looking to engage on multiple platforms. Our brand reaches more than 1 million. high-net-worth individuals via the web, social media, and e-mail.</p>
        <div className='icons'>
          <FaFacebook />
          <FaInstagramSquare />
          <FaTwitterSquare />
        </div>
      </div>

    </div>
  )
}

export default Brand
