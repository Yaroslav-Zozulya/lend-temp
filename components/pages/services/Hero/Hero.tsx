import { Title } from '@/components/common/Title'
import { FC } from 'react'
import { Hero as HeroComponent } from '@/components/common/Hero'

export const Hero: FC = () => {
  return (
    <HeroComponent
      classes={
        'mb-[38px] bg-hero-services py-[30px] md:py-[103px] lg:py-[130px] xl:py-[170px] md:mb-[66px] lg:mb-[87px] xl:mb-[116px]'
      }
    >
      <Title
        text={'Our Services'}
        tag={'h1'}
        classes={
          'text-2xl sm:text-2xl/[2.66] font-normal text-center text-lightColor md:text-5xl lg:text-[64px] xl:text-8xl '
        }
      />
    </HeroComponent>
  )
}
