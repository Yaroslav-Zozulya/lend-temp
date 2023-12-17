import { Title } from '@/components/common/Title'
import { FC } from 'react'
import { Hero as HeroComponent } from '@/components/common/Hero'

export const Hero: FC = () => {
  return (
    <HeroComponent
      classes={
        'bg-hero-home py-[61px] md:pb-[180px] md:pt-[141px] lg:py-[233px] xl:pb-[361px] xl:pt-[322px]'
      }
    >
      <Title
        text={'Specialised Fund Services'}
        tag={'h1'}
        classes={
          'text-2xl sm:text-2xl/[2.66] font-normal text-center text-lightColor md:text-5xl lg:text-[64px] xl:text-8xl'
        }
      />
    </HeroComponent>
  )
}
