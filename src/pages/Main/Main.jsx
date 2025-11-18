import React from 'react'
import './main.css'
import Main1 from "../../assets/Main.jpg"
import { motion } from "framer-motion";

const Main = () => {
  return (
    <div className='container'>
      <div className='left'>
        {/* <h2>MEDIA KIT 2024</h2> */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ fontSize: "28px", fontStyle: "italic" }}
        >
          MEDIA KIT 2024
        </motion.h2>
        {/* <h1>HONG KONG</h1> */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          style={{ fontSize: "80px", fontWeight: "bold", marginTop: "10px" }}
        >
          HONG KONG
        </motion.h1>
        <p>Gogoprop was create after repeated, firsthand expreiences with the prolongeed and challenging process of accessing traditional mortgages as an overseas buyer</p>
      </div>
      <div className='right'>
        <img src={Main1} alt="" />
      </div>
    </div>
  )
}

export default Main
