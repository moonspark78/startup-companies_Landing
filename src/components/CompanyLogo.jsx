import React from 'react'

const CompanyLogo = () => {
    const logos = [slack, amazon, woocommerce, meundies, sitepoint]
  return (
    <div className='w-full container mx-auto py-20 px-4 sm:px-6 lg:px-8 flex sm:flex-row flex-col sm:items-center
    items-start'>
        <div className='w-[300px] shrink-0 px-5 text-gray-600 border-l-4 border-blue-500 bg-white py-2
        z-10 sm:text-base text-xl font-semibold text-left'>
            Proud partern at <br/> HubSpot & Segment
        </div>

        <div>
            {logos.map((logo,index) => (
                <img src={logo} alt='company logo'/>
            ))}
        </div>
    </div>
  )
}

export default CompanyLogo