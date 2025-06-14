import { describe } from "node:test";


const PurposeSection = () => {
  const features = [
    {
      icon: "🟣", // Replace with your actual icon component or image
      title: "Built for impact",
      description: "We identify and nurture a truly diverse team of designers, developers and marketers"
    },
    {
      icon: "🔴", // Replace with your actual icon component or image
      title: "In sync with you",
      description: "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless."
    }
  ];


  return (
    <section className='w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8'>
    <div className="max-w-6xl mx-auto ">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">

            {/* Heading text */}
            <div className="">
                <p className="text-sm text-purple-600 font-medium mb-2">ACHIEVE MORE</p>
                <h2 className="text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900">
                Purpose of a convoy is to keep your team
                </h2>
            </div>

            {/* bullet points */}
            <div>
              {
                features.map((feature, index) => (
                  <div key={index} className="flex space-x-4">
                    <div>{feature.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))
              }
            </div>


        </div>
    </div>

    </section>
  )
}

export default PurposeSection