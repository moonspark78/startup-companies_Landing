import React, { useState } from 'react'

const PricingSection = () => {
    const [productCount, setProductCount] = useState(1);

    const starterPrice = Math.round(4000 * (productCount / 50));
    const businessPrice = Math.round(7500 * (productCount / 50));
  return (
    <div>PricingSection</div>
  )
}

export default PricingSection