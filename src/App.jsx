import React from 'react'
import Navbar from './pages/Navbar/Navbar'
import Main from './pages/Main/Main'
import Lifestyle from './pages/Lifestyle/Lifestyle'
import Brand from './pages/Brand/Brand'
import Audience from './pages/Audience/Audience'
import Advertise from './pages/Advertise/Advertise'
import Login from './pages/Login/Login'
import { Route ,Routes } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import All from './pages/All/All'
import Footer from './pages/Footer/Footer'


const App = () => {
  return (
    <div>
      <Routes>
        
        <Route path='/login' element={<Login/>}></Route>
        {/* <Navbar /> */}
         {/* <Route path='/' element={<Layout><Main /><Lifestyle/><Brand/><Audience/><Advertise/></Layout>}></Route> */}
         <Route path='/' element={<Layout><All/></Layout>}></Route>

         <Route path='/lifestyle' element={<Layout><Lifestyle/></Layout>}></Route>

         <Route path='/brand' element={<Layout><Brand/></Layout>}></Route>

         <Route path='/audience' element={<Layout><Audience/></Layout>}></Route>

         <Route path='/advertise' element={<Layout><Advertise/></Layout>}></Route>

         <Route path='/footer' element={<Layout><Footer/></Layout>}></Route>
        {/* <Lifestyle/>
        <Brand/>
        <Audience/>
        <Advertise/> */}
      </Routes>
      
    </div>
  )
}

export default App
