import { FC } from 'react'

import { Title } from '@/components/common/Title'
import { AccordionComponent } from '@/components/common/Accordion'
import { structuresAccordionData } from '@/components/common/Accordion/constants'

export const Structures: FC = () => {
  return (
    <section className={'mb-[70px] md:mb-0'} id={'structures'}>
      <div className={'container relative'}>
        <div
          className={
            'md:m-auto md:w-[403px] md:pl-4 lg:w-[602px] lg:pl-0 xl:w-[844px]'
          }
        >
          <Title
            text={'Fund Structures'}
            classes={
              'text-headerBg text-[20px] text-center mb-[35px] md:m-0 md:bg-fund-structures-left md:bg-cover md: bg-no-repeat md:text-lightColor md:pt-8 md:text-[24px] md:absolute md:left-0 md:right-0 md:w-[171px] h-full lg:w-[175px] xl:w-[273px] xl:pt-[64px] xl:pl-[80px] xl:text-[32px] xl:text-left'
            }
          />

          <div className={'border-b border-t border-sidebarBg'}>
            <AccordionComponent data={structuresAccordionData} />
          </div>
        </div>
      </div>
    </section>
  )
}
