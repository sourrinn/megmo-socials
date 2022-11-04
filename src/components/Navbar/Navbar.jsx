import React from 'react'
import { IconContext } from "react-icons";
import { FaBars } from "react-icons/fa";
import './Navbar.css';
import { AiOutlineSearch } from 'react-icons/ai';
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Megmo" />
      </div>
      <div className="navbar-search-input">
        <input type="text" placeholder='Search' />
        <IconContext.Provider value={{ size: "25px", color: "red" }}>
          <div>
            <AiOutlineSearch />
          </div>
        </IconContext.Provider>
      </div>
      <div className='navbar-dropdown-button'>
        <IconContext.Provider value={{ size: "25px" }}>
          <div>
            <FaBars />
          </div>
        </IconContext.Provider>

      </div>
    </div>
  )
}

export default Navbar