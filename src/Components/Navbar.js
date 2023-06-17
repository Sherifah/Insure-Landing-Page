import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar px-32 py-4 flex justify-between items-center'>
      <div className='logo'>
        <img src='/images/logo.svg' alt='web logo' />
      </div>
      <nav className='flex gap-5 items-center'>
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
