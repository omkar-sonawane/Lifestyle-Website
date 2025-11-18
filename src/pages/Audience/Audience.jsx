import React from 'react'
import './audience.css'
import aud1 from '../../assets/Audience_2.jpg'

const Audience = () => {
  return (
    <div className='audience-container'>
      <div className='audience-img'>
        <img src={aud1} alt="" />
      </div>
      <div className='audience-data'>
        <div >
            <h1>Audience Data</h1>
            <div className='data'>
                <div className='aud-data'>
                    <h2>270000</h2>
                    <h3>Monthly Visitors</h3>
                </div>
                <div className='aud-data'>
                    <h2>1950000</h2>
                    <h3>Page views per month</h3>
                </div>
                <div className='aud-data'>
                    <h2>56000</h2>
                    <h3>Email Subscribers</h3>
                </div>
                <div className='aud-data' >
                    <h2>48% / 52%</h2>
                    <h3>MOBILE / DESKTOP</h3>
                </div>
            </div>
            <div className='round'>
                <div className='btn1'>18% 
                    <h4>Owner</h4>
                </div>
                <div className='btn1'>27% 
                    <h4>Admin</h4>
                </div>
                <div className='btn1'>45% 
                    <h4>Partner</h4>
                </div>
                <div className='btn1'>10% 
                    <h4>Other</h4>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Audience
