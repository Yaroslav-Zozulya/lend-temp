import { Title } from '@/components/common/Title'
import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

export const Welcome: FC = () => {
  const sectionClasses: string = clsx(
    'pt-[32px] pb-[48px]',
    'md:py-[112px]',
    'lg:pt-[118px] lg:pb-[120px]',
    'xl:pt-[95px] xl:pb-[128px]',
  )

  const titleClasses: string = clsx(
    'mb-[16px] text-base/[1.22] text-headerBg',
    'md:mb-[14px] md:text-2xl/[1.22]',
    'lg:text-[32px]/[1.22] lg:mb-[28px]',
    'xl:text-5xl/[1.22]',
  )

  const imageClasses: string = clsx(
    'w-[95px] h-[109px]',
    'md:w-[196px] md:h-[205px]',
    'lg:w-[306px] lg:h-[357px]',
    'xl:w-[381px] xl:h-[437px]',
  )

  return (
    <section className={sectionClasses}>
      <div className={'container  flex items-center justify-between'}>
        <div
          className={
            'max-w-[210px] md:max-w-[403px] lg:max-w-[552px] xl:max-w-[780px]'
          }
        >
          <Title
            text={
              'Welcome to Sound Fund Services, your trusted fund service partner'
            }
            tag={'h2'}
            classes={titleClasses}
          />
          <p
            className={
              'text-xs/[1.3] text-mainText md:text-sm/[1.5] md:font-medium lg:text-xl/[1.5]'
            }
          >
            {
              'Our backbone is one of commitment, expertise, and a passion for\r'
            }
            {'simplifying the complexities of fund operations.\r'}
          </p>
        </div>
        <div className={'shrink-0'}>
          <Image
            src={'/icons/union.svg'}
            width={95}
            height={109}
            alt={'Welcome logo'}
            className={imageClasses}
          />
        </div>
      </div>
    </section>
  )
}
