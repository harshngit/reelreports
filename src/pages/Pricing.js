import React from 'react'
import { motion } from 'framer-motion'
import AppLayout from '../components/layout/AppLayout'
import PricingCards from '../components/pricing/PricingCards'
import PricingTrust from '../components/pricing/PricingTrust'
import PricingComparison from '../components/pricing/PricingComparison'
import PricingFAQ from '../components/pricing/PricingFAQ'

const Pricing = () => {
  const base = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } }
  
  return (
    <AppLayout>
      <motion.div {...base} transition={{ duration: 0.5 }}>
        <PricingCards />
      </motion.div>
      <motion.div {...base} transition={{ duration: 0.5, delay: 0.1 }}>
        <PricingTrust />
      </motion.div>
      <motion.div {...base} transition={{ duration: 0.5, delay: 0.2 }}>
        <PricingComparison />
      </motion.div>
      <motion.div {...base} transition={{ duration: 0.5, delay: 0.3 }}>
        <PricingFAQ />
      </motion.div>
    </AppLayout>
  )
}

export default Pricing