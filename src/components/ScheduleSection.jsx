import React from 'react'
import scheduleImage from "../assets/stats.webp"

const ScheduleSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>

            {/* Left side content */}
            <div className='md:w-1/2 w-full'>
                <img src={scheduleImage} alt='schedule image' className='w-full h-auto'/>
            </div>

            {/* right */}
            <div className='md:w-1/2 w-full'>
              <p className='text-orange-500 font-semibold'>SCHEDULE</p>
              <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6'>Streamline Your Business:
                <br/>
                With Smart Scheduling Solutions
              </h2>
              <p className='text-gray-600 mb-8'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum ullamcorper magna tincidunt posuere.
                  Donec maximus arcu vel suscipit hendrerit. Ut viverra sapien at nunc eleifend lobortis.
                  Mauris condimentum massa.
              </p>
            </div>

        </div>
    </section>
  )
}

export default ScheduleSection