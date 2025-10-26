import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import Hero from '../components/home/Hero'
import TestimonialCarousel from '../components/home/TestimonialCarousel'
import WhySynthesia from '../components/home/WhySynthesia'
import FeaturesSection from '../components/home/FeaturesSection'
import SolutionsSection from '../components/home/SolutionsSection'
import LogoMarquee from '../components/home/LogoMarquee'
import FAQ from '../components/home/FAQ'
import { motion } from 'framer-motion'

const Home = () => {
  const base = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } }
  return (
    <AppLayout>
      <motion.div {...base} transition={{ duration: 0.5 }}>
        <Hero />
      </motion.div>
      <motion.div {...base} transition={{ duration: 0.5, delay: 0.05 }}>
        <TestimonialCarousel />
      </motion.div>
      <motion.div {...base} transition={{ duration: 0.5, delay: 0.1 }}>
        <WhySynthesia />
      </motion.div>
      <motion.div {...base} transition={{ duration: 0.5, delay: 0.15 }}>
        <FeaturesSection />
      </motion.div>
      <motion.div {...base} transition={{ duration: 0.5, delay: 0.2 }}>
        <SolutionsSection />
      </motion.div>
      <motion.div {...base} transition={{ duration: 0.5, delay: 0.25 }}>
        <LogoMarquee />
      </motion.div>
      <motion.div {...base} transition={{ duration: 0.5, delay: 0.3 }}>
        <FAQ />
      </motion.div>
    </AppLayout>
  )
}

export default Home