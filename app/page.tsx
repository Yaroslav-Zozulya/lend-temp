import React from 'react'
import { NextPage } from 'next/types'

import { Hero } from '@/components/pages/home/Hero'
import { Welcome } from '@/components/pages/home/Welcome'
import { AboutUs } from '@/components/pages/home/AboutUs'
import { WhyUs } from '@/components/pages/home/WhyUs'
import { Services } from '@/components/pages/home/Services'
import { Contact } from '@/components/pages/home/Contact/Contact'

const Page: NextPage = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <AboutUs />
      <WhyUs />
      <Services />
      <Contact />
    </>
  )
}

export default Page
