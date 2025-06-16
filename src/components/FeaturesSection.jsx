import React from 'react'


  const feature = [
    {
      icon: "🔍", 
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like"
    },
    {
      icon: "⚙️",
      title: "Work out the details", 
      description: "Communication protocols apart from engagement models"
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing"
    }
  ]

const FeaturesSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16'>
        {/* heading text */}
        <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>How can we help your business ?</h2>
            <p className='text-gray-600'>When you resell benik, you build trust and incresse</p>
        </div>
    </section>
  )
}

export default FeaturesSection