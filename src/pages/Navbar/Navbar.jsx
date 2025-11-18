import React from 'react'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { IoLogoGitlab } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";


const Navbar = () => {

  const navigate = useNavigate()

  const logOut = () => {
    navigate("/");
    // setLogin(false);
  };
  return (
    <div>
      <nav >
        <div className='logo'><h2><IoLogoGitlab /></h2>Lifestyle Asia</div>
        <div className='list'>
          <ul>
            <li> <a className='linkText' href="#home">Home</a></li>
            {/* <li><Link className='linkText' to='/lifestyle'>Lifestyle</Link></li> */}
            <li><a className='linkText' href="#lifestyle">Lifestyle</a></li>
            <li><a className='linkText' href="#brand">Brand</a></li>
            <li><a className='linkText' href="#contact">Contact</a></li>
            {/* <li>Contact</li> */}
          </ul>
        </div>
        <div className='btn'>
          <button type='button' onClick={logOut}>LOG OUT <h2><IoIosLogOut /></h2></button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
