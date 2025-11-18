import React from 'react'
import './advertise.css'
import advertise from '../../assets/Advertise.jpg'

const Advertise = () => {
  return (
    <div className='advertise-container'>
      <div className='advertise-data'>
        <h1>Reader tastes & habits</h1>
        <div className='percentage' >
            <p>  Fly exclusively in premium cabins; book 5-star hotels for stays</p>
        </div>
        <div>
            <p>  Go to fine-dining restaurants multiple times a week.</p>
        </div>
        <div>
            <p> Have high spending on beauty and grooming personal appearance matters</p>
        </div>
        <div>
            <p>Make luxury fashion purchases on regular basis, not just once in a while</p>
        </div>
        <div>
            <p> Own and collect multiple high-end wristwatches</p>
        </div>
      </div>
      <div className='advertise-img'>
        <img src={advertise} alt="" />
      </div>
    </div>
  )
}

export default Advertise
