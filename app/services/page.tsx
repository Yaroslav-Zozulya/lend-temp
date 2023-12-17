'use client'
import { NextPage } from 'next/types'

import { Hero } from '@/components/pages/services/Hero'
import { Structures } from '@/components/pages/services/Structures'
import { Manager } from '@/components/pages/services/Manager'
import { GeneralServices } from '@/components/pages/services/GeneralServices/GeneralServices'
import { Delimiter } from '@/components/pages/services/Delimiter'
import { NavPanel } from '@/components/pages/services/NavPanel'

const Services: NextPage = () => {
  return (
    <>
      <Hero />
      <div className={'relative mx-auto lg:w-[1024px] xl:w-[1440px]'}>
        <Structures />
        <Delimiter />
        <Manager />
        <Delimiter />
        <GeneralServices />
        <div
          className={
            'absolute right-0 hidden h-[100%] lg:top-[68px] lg:block xl:top-[-80px] '
          }
        >
          <NavPanel
            targets={['structures', 'manager', 'generalServices']}
            labels={[
              'Fund Structures',
              'Fund Manager',
              'General Services across all entity types',
            ]}
          />
        </div>
      </div>
    </>
  )
}

export default Services
