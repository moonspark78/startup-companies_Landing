import React from 'react'

const NewsletterSection = () => {
  return (
    <section className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='bg-blue-600 rounded-2xl overflow-hidden'>
            <div className="relative md:px-16 py-16 px-6 md:py-24">

                {/* gradient bg */}
                <div className='absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant hidden md:block'></div>

                <div className='relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12'>
                    {/* left content */}
                    <div className='text-white text-center md:text-left max-w-lg'>
                        <h2>Subscribe to our newsletter</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewsletterSection