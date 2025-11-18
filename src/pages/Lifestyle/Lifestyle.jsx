import React from 'react'
import './lifestyle.css'

import img1 from "../../assets/lifestyle-img-1.jpg"
import img2 from "../../assets/lifestyle-img-2.jpg"
import img3 from "../../assets/lifestyle-img-3.jpg"
import img4 from "../../assets/lifestyle-img-4.jpg"
import img5 from "../../assets/lifestyle-img-5.jpg"
import img6 from "../../assets/lifestyle-img-6.jpg"
import img7 from "../../assets/lifestyle-img-7.jpg"
import img8 from "../../assets/lifestyle-img-8.jpg"
import img9 from "../../assets/lifestyle-img-9.jpg"

const Lifestyle = () => {
    return (
        <div id='lifestyle' className='container1'>
            <div className='left1'>
                
                <img src={img1} id='img1' alt="" />
                <img src={img2} id='img2' alt="" />
                <img src={img3} id='img3' alt="" />
                <img src={img4} id='img4' alt="" />
                <img src={img5} id='img5' alt="" />
                <img src={img6} id='img6' alt="" />
                <img src={img7} id='img7' alt="" />
                <img src={img8} id='img8' alt="" />
                <img src={img9} id='img9' alt="" />
                

            </div>
            <div className='right1'>
               <h1>Lifestyle asia is the region's market leader in online luxury publishing</h1>
               <div className='mini-container'>
               <div className='bar'>
                <h2>An innovative approach to digital media</h2>
                <p>We are Asia's first online publication with a fully responsive layout and an interactive lookbook format</p>
               </div>
               <div className='bar'>
                <h2>10 YEARS OF SUCCESS</h2>
                <p>We've pioneered the industry with more than a decade of experience in the digital luxury space.</p>
               </div>
               <div className='bar'>
                <h2>DIGITAL-FIRST EDITORIAL TEAM</h2>
                <p>Our team of luxury lifestyle experts are trained to deliver cutting-edge content for a demanding audience</p>
               </div>
               </div>
            </div>
        </div>
    )
}

export default Lifestyle
