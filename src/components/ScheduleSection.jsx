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
              <h2 className='text-3xl md:text-4xl font-bold'>Streamline Your Business:
                <br/>
                With Smart Scheduling Solutions
              </h2>
            </div>

        </div>
    </section>
  )
}

export default ScheduleSection