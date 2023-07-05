import React from 'react'

const Menubar = (props) => {


  return (
    <div className='bg-primary-100 relative top-0  left-0 w-full h-full md:hidden'>
        <div className='relative z-10'>
            <div className='navbar bg-white px-8 py-4 md:hidden flex justify-between items-center'>
                <div className='logo'>
                    <img src='/images/logo.svg' alt='web logo' />
                </div>
                <button className='btn' onClick={() => props.setMenuView(true)}>
                    <img className='menu md:hidden' src='/images/icon-close.svg'></img>
                </button>
            </div>
            <div className=' text-white px-8 py-8 w-full h-full'>
                <nav className={` md:hidden`}>
                    <ul className=''>
                        <li className='nav-item-menu cursor-pointer'>
                            <a href='/how-we-work'>How we work</a>
                        </li>
                        <li className='nav-item-menu cursor-pointer'>
                            <a href='/Blog'>Blog</a>
                        </li>
                        <li className='nav-item-menu cursor-pointer'>
                            <a href='/Account'>Account</a>
                        </li>
                    </ul>
                <div className='px-8 py-2 font-body font-bold text-sm border-2 text-white border-white hover:text-primary-100 hover:bg-white cursor-pointer'>
                    <button className='btn uppercase'>View Plans</button>
                </div>
            </nav>
            {/* <div>
                <img src='images/bg-pattern-mobile-nav.svg' alt='patterns' className='absolute md:hidden z-20 bottom-0 w-[100%]' />
            </div> */}
            </div>
        </div> 
    </div>
  )
}

export default Menubar
