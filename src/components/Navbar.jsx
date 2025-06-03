import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')


  const navLinks = [
    {href: '#home', label: 'Home'},
    {href: '#about', label: 'About'},
    {href: '#services', label: 'Services'},
    {href: '#testimonials', label: 'Testimonials'},
  ]
  return (
    <nav className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-gray-100 text-white z-50 shadow-sm'>
      <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-8 md:h-20 lg:px-8 h-16'>
            {/* logo */}
            <div className='flex items-center gap-1 cursor-pointer'>
              <div className='w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity'></div>
              <div className='w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-100 hover:opacity-75 transition-opacity'></div>
            </div>
            {/* desktop navitems */}
            <div>
              {
                navLinks.map((link, index) =>(
                  <a href={link.href} key={index}
                    onClick={() => setActiveLink(link.href)}
                    className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5
                     after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${activeLink === 
                     link.href ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    {link.label}
                  </a>
                ))
              }
            </div>
            {/* get in touch btn */}
            {/* mobile menu */}
      </div>
    </nav>
  )
}

export default Navbar