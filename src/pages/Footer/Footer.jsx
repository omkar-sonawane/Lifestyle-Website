import React from 'react'
import './footer.css'
import { IoLogoGitlab } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
    return (
        // <div>
        //   helooooooooooooo
        // </div>
        <footer id='contact'>
            <div className='left-footer'>
                <h2><IoLogoGitlab /> &nbsp; Lifestyle Asia</h2>
                <p>Lifestyle asia is the region's market leader in online luxury publishing Our team of luxury lifestyle experts are trained to deliver cutting-edge content for a demanding audience</p>
            </div>
            <div className='center-footer'>
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact US</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='right-footer'>
                <h2>Subscribe to our NewsLetter</h2>
                <p>Our readers are connected 24/7 and looking to engage on multiple platforms. Our brand reaches more than 1 million. high-net-worth individuals via the web, social media, and e-mail</p>
                <input type='text' />
                <button className='footer-btn'>Subscribe</button>
            </div>
            <div className='bottom-footer'><p>© 2025 Omkar Sonawane | All rights reserved. </p></div>
            <div className='xyz'></div>
            <div className='footer-icons'>
                <FaFacebook />
                <FaInstagramSquare />
                <FaTwitterSquare />
            </div>
        </footer>
    )
}

export default Footer
