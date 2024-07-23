import React, { useState } from 'react'
import './Navbar.css'
import './Navbar.scss'
import {BiLogoMediumOld} from 'react-icons/bi'  // Import icons
import {AiFillCloseCircle} from 'react-icons/ai'
import {PiDotsNineBold} from 'react-icons/pi'

const Navbar = () => {
  // state to track and update navBar
  const [navBar, setNavBar] = useState('menu');
  
  // function to show NavBar
  const showNavBar = () => {
    setNavBar("menu showNavBar");
  }
  // function to show NavBar
  const removeNavBar = () => {
    setNavBar("menu");
  }

  return (
    <div className='navBar'>
      <div className="logoDiv">
        <BiLogoMediumOld className='icon' />
        <span>OU-Trips</span>
      </div>

      <div className={navBar}>
        <ul>
          <li className='navList'>Destination</li>
          <li className='navList'>About Us</li>
          <li className='navList'>Testimonial</li>
          <li className='navList'>Gallery</li>
        </ul>
        {/* Icon to remove Navbar */}
        <AiFillCloseCircle className='icon closeIcon' onClick={removeNavBar} />
      </div>
      <button className='signUpBtn btn'>Sign Up</button>
      {/* Icon to toggle Navbar */}
      <PiDotsNineBold className='icon menuIcon' onClick={showNavBar} />
    </div>
  )
}

export default Navbar