import React from 'react'

const Features = () => {
  return (
    <div className='px-8 py-36 md:px-0 md:py-0 md:mt-44 md:mx-32 text-neutral-100'>
      <div className='flex justify-center md:block'>
        <hr className='w-28 h-px bg-primary-100 opacity-50 border-0 '/>
      </div>
      
      <div className='font-headings text-4xl md:text-5xl pt-8 pb-16 leading-18'>
        <h2>We are different</h2>
      </div>

      {/* The features cards */}
      <div className='flex flex-col md:flex-row gap-10 items-center justify-between'>
        <div className='md:block flex flex-col items-center'>
          <div>
            <img src='images/icon-snappy-process.svg' alt='icon for snappy process' className='w-14 h-14 mb-5' />
          </div>
          <div>
            <h3 className='font-headings text-2xl mb-2 '>Snappy Process</h3>
            <span className='font-body text-sm font-normal text-neutral-200 leading-5'>Our application process can be completed in minutes, not hours. Don’t get 
              stuck filling in tedious forms.</span>
          </div>
        </div>
        <div className='md:block flex flex-col items-center'>
          <div>
            <img src='images/icon-affordable-prices.svg' alt='icon for affordable prices' className='w-14 h-14 mb-5' />
          </div>
          <div>
            <h3 className='font-headings text-2xl mb-2 '>Affordable Prices</h3>
            <span className='font-body text-sm font-normal text-neutral-200 leading-5 '>We don’t want you worrying about high monthly costs. Our prices may be low, 
              but we still offer the best coverage possible.</span>
          </div>
        </div>
        <div className='md:block flex flex-col items-center'>
          <div>
            <img src='images/icon-people-first.svg' alt='icon for people first' className='w-14 h-14 mb-5' />
          </div>
          <div>
            <h3 className='font-headings text-2xl mb-2 '>People First</h3>
            <span className='font-body text-sm font-normal text-neutral-200 leading-5 '>Our plans aren’t full of conditions and clauses to prevent payouts. We make 
              sure you’re covered when you need it.</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Features
