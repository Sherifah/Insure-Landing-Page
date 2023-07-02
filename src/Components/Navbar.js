import React, { useState } from 'react'

const Navbar = () => {

  const [menu, setMenu] = useState('hidden')

  function handleClick() {
    if (menu == 'hidden') {
      setMenu('flex')
    } else {
      setMenu('hidden')
    }
    console.log('Clicked!');
  }

  return (
    <div className='navbar px-8 py-4 md:px-32 md:py-4 flex justify-between items-center'>
      <div className='logo'>
        <img src='/images/logo.svg' alt='web logo' />
      </div>
      <button className='btn' onClick={handleClick}>
        <img className='menu md:hidden' src='/images/icon-hamburger.svg'></img>
      </button>
      
      <nav className={`md:flex hidden gap-5 items-center`}>
        <ul className='flex gap-5 items-center'>
          <li className='nav-item cursor-pointer'>
            <a href='/how-we-work'>How we work</a>
          </li>
          <li className='nav-item cursor-pointer'>
            <a href='/Blog'>Blog</a>
          </li>
          <li className='nav-item cursor-pointer'>
            <a href='/Account'>Account</a>
          </li>
        </ul>
        <div className='bg-white px-8 py-2 font-body font-bold text-sm border-2 text-primary-100 border-primary-100 hover:text-white hover:bg-primary-100 cursor-pointer'>
          <button className='btn uppercase'>View Plans</button>
        </div>
      </nav>

      <nav className={`flex md:hidden ${menu} gap-5 items-center bg-neutral-200`}>
        <ul className='flex gap-5 items-center'>
          <li className='nav-item cursor-pointer'>
            <a href='/how-we-work'>How we work</a>
          </li>
          <li className='nav-item cursor-pointer'>
            <a href='/Blog'>Blog</a>
          </li>
          <li className='nav-item cursor-pointer'>
            <a href='/Account'>Account</a>
          </li>
        </ul>
        <div className='bg-white px-8 py-2 font-body font-bold text-sm border-2 text-primary-100 border-primary-100 hover:text-white hover:bg-primary-100 cursor-pointer'>
          <button className='btn uppercase'>View Plans</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
