import { FC } from 'react'

import { Title } from '@/components/common/Title'
import { AccordionComponent } from '@/components/common/Accordion'
import { generalServicesAccordionData } from '@/components/common/Accordion/constants'

export const GeneralServices: FC = () => {
  return (
    <section
      className={'relative mb-9 md:mb-20 xl:mb-[106px]'}
      id={'generalServices'}
    >
      <div
        className={
          'md:none absolute left-[50%] top-0 h-[156px] w-[360px] translate-x-[-50%]  transform bg-general-services-mobile-bg bg-cover bg-no-repeat pb-[61px] pt-[61px] md:hidden'
        }
      ></div>
      <div className={'container relative'}>
        <div
          className={
            'md:m-auto md:w-[403px] md:pl-4 lg:w-[602px] lg:pl-0 xl:w-[844px]'
          }
        >
          <Title
            text={'General Services across all entity types'}
            classes={
              'mb-[84px] text-hover text-[24px] w-[268px] ml-auto mr-auto pt-[44px] text-center mb-[35px] md:m-0 md:bg-general-services-bg md:bg-cover md: bg-no-repeat md:text-lightColor md:pt-8 md:pl-8 md:pr-[34px] md:text-left md:text-[24px] md:absolute md:left-0 md:right-0 md:w-[171px] h-full lg:w-[175px] xl:w-[273px] xl:pt-[64px] xl:pl-[80px] xl:text-[32px] xl:pl-20'
            }
          />

          <div className={'border-b border-t border-sidebarBg'}>
            <AccordionComponent data={generalServicesAccordionData} />
          </div>
        </div>
      </div>
    </section>
  )
}
