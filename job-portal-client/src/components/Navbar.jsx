import React, { useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../style/Button.css'
import Logo from '../assets/Logo.png'
import 'tailwindcss/tailwind.css'
import { FaBarsStaggered, FaHand, FaXmark } from 'react-icons/fa6'


function Navbar() {
  const [isMenuOpen, setisMenuopen] = useState(false)
  const handlemenuToggle = () => setisMenuopen(!isMenuOpen);
  const navItems = [
    { path: '/', title: 'Start a search' },
    { path: '/my-job', title: 'My jobs' },
    { path: '/salary', title: 'Salary Estimate' },
    { path: '/post-job', title: 'Post a job' }
  ]
  return (
    <header className='bg-gray-100 h-20'>
      <nav className='flex justify-around items-center h-full p-4'>
        <a href="/">
          <img className='h-16 w-16' src={Logo} alt="Logo" />
        </a>

        <ul className='hidden md:flex gap-4'>
          {navItems.map(({ path, title }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) => isActive ? "active" : ""} >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className='text-base text-primary font-medium space-x-5 hidden lg:block '>
          <Link to="/login" className="white-button">
            Login
          </Link>
          <Link to="/signup" className="blue-button">
            SigbnUp
          </Link>
        </div>
        <div className='md:hidden block'>
          <button onClick={handlemenuToggle}>
            {
              isMenuOpen ? <FaXmark className='w-5 h-5 text-primary' /> : <FaBarsStaggered className='w-5 h-5 text-primary' />
            }
          </button></div>
      </nav>

      {/* NavIcons for Mobile view */}
      <div className={`px-4 bg-black rounded-sm ${isMenuOpen ? "" : "hidden"}`} >
        <ul>
          {navItems.map(({ path, title }) => (
            <li key={path} className='text-base text-white  '>
              <NavLink
                to={path}
                className={({ isActive }) => isActive ? "active" : ""} >
                {title}
              </NavLink>
            </li>
          ))}
          <li className='text-white py-1'><Link to="/login">
            Login
          </Link></li>

        </ul>
      </div>
    </header>
  )
}

export default Navbar

