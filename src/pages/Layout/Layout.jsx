import React from 'react'
import Navbar from '../Navbar/Navbar'
import All from '../All/All'

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout
