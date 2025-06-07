import React from 'react'
import { FaStar } from "react-icons/fa";


const Hero = () => {
  return (
    <section className='container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8'>

        {/* left col */}
        <div className='w-full md:w-1/2 space-y-8'>
            {/* star badge */}
            <div>
                <span className='text-blue-600 group-hover:scale-110 transition-transform'><FaStar /></span>
                <span className='text-sm font-medium'>Jump start your growth</span>
            </div>
        </div>





        {/* right co */}
        <div className="w-full md:w-1/2">

        </div>
    </section>
  )
}

export default Hero