import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import Hero from '../components/home/Hero'
import TestimonialCarousel from '../components/home/TestimonialCarousel'
import WhySynthesia from '../components/home/WhySynthesia'
import LogoMarquee from '../components/home/LogoMarquee'
import FAQ from '../components/home/FAQ'

const Home = () => {
  return (
    <AppLayout>
      <Hero />
      <TestimonialCarousel />
      <WhySynthesia />
      <LogoMarquee />
      <FAQ />
    </AppLayout>
  )
}

export default Home