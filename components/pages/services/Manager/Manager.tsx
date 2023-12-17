import { FC } from 'react'

import { Title } from '@/components/common/Title'
import { AccordionComponent } from '@/components/common/Accordion'
import { managerAccordionData } from '@/components/common/Accordion/constants'

export const Manager: FC = () => {
  return (
    <section id={'manager'} className={'relative'}>
      <div
        className={
          'md:none absolute left-[50%] top-0 h-[156px] w-[360px] translate-x-[-50%]  transform bg-manager-mobile-bg bg-cover bg-no-repeat pb-[61px] pt-[61px] md:hidden'
        }
      ></div>
      <div className={'container relative '}>
        <div
          className={
            'md:m-auto md:w-[403px] md:pl-4 lg:w-[602px] lg:pl-0 xl:w-[844px]'
          }
        >
          <Title
            text={'Fund Manager'}
            classes={
              'text-hover mb-[101px] pt-[61px] text-[20px] text-center md:m-0 md:bg-manager-bg md:pl-[18px] md:text-left md:bg-cover md: bg-no-repeat md:text-lightColor md:pt-8 md:text-[24px] md:absolute md:right-0 md:right-0 md:w-[171px] h-full lg:w-[175px] xl:w-[273px] xl:pt-[64px] xl:pl-[80px] xl:text-[32px] xl:text-left'
            }
          />

          <div className={'border-b border-t border-sidebarBg'}>
            <AccordionComponent data={managerAccordionData} />
          </div>
        </div>
      </div>
    </section>
  )
}
