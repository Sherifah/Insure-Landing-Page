import React from 'react'
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter,  } from 'react-icons/ai';
import { FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-neutral-300 px-8 py-24 md:px-32 md:py-16 mt-40 relative'>
      <div className=' z-10 relative md:block'>
        <div className='flex flex-col md:flex-row gap-6 md:gap-0 items-center justify-center md:justify-between'>
          <div className='logo'>
            <img src='/images/logo.svg' alt='web logo' />
          </div>
          <div className='social-media flex items-center gap-5'>
            <AiFillFacebook size={20} className='fill-neutral-200 hover:fill-neutral-100' />
            <AiOutlineTwitter size={20} className='fill-neutral-200 hover:fill-neutral-100' />
            <FaPinterest size={20} className='fill-neutral-200 hover:fill-neutral-100' />
            <AiOutlineInstagram size={20} className='fill-neutral-200 hover:fill-neutral-100' />
          </div>
        </div>
        <hr className='bg-neutal-100 my-10 md:my-8' />
        <div className='links flex flex-col md:flex-row gap-8 md:gap-44 '>
          <div>
            <div>
              <p className='links-heading font-body text-sm uppercase font-bold text-neutral-200 pb-8'>Our company</p>
            </div> 
            <div>
              <div>
                <p className='link'>How we work</p>
              </div>
              <div>
                <p className='link'>Why insure?</p>
              </div>
              <div>
                <p className='link'>View plans</p>
              </div>
              <div>
                <p className='link'>Reviews</p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <p className='links-heading font-body text-sm uppercase font-bold text-neutral-200 pb-8'>Help me</p>
            </div> 
            <div>
              <div>
                <p className='link'>FAQ</p>
              </div>
              <div>
                <p className='link'>Terms of use</p>
              </div>
              <div>
                <p className='link'>Privacy Policy</p>
              </div>
              <div>
                <p className='link'>Cookies</p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <p className='links-heading font-body text-sm uppercase font-bold text-neutral-200 pb-8'>Contact</p>
            </div> 
            <div>
              <div>
                <p className='link'>Sales</p>
              </div>
              <div>
                <p className='link'>Support</p>
              </div>
              <div>
                <p className='link'>Live chat</p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <p className='links-heading font-body text-sm uppercase font-bold text-neutral-200 pb-8'>Others</p>
            </div> 
            <div>
              <div>
                <p className='link'>Careers</p>
              </div>
              <div>
                <p className='link'>Press</p>
              </div>
              <div>
                <p className='link'>Licenses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src='images/bg-pattern-footer-desktop.svg' alt='patterns' className='absolute hidden md:block top-0 left-0 z-9 pattern-one' />
        <img src='images/bg-pattern-footer-mobile.svg' alt='patterns' className='absolute md:hidden top-0 left-0 w-[100%] z-9 pattern-one' />
      </div>
    </div>
  )
}

export default Footer
