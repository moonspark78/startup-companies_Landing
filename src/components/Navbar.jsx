import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-gray-100 text-white z-50 shadow-sm'>
      <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-8 md:h-20 lg:px-8 h-16'>
            {/* logo */}
            <div className='flex items-center gap-1 cursor-pointer'>
              <div className='w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity'></div>
              <div></div>
            </div>
            {/* desktop navitems */}
            {/* get in touch btn */}
            {/* mobile menu */}
      </div>
    </nav>
  )
}

export default Navbar