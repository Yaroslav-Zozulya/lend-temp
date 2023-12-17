import React, { FC } from 'react'
import Link from 'next/link'

import Logo from '@/public/icons/logo.svg'

export const Footer: FC = () => {
  return (
    <footer
      className={
        'bg-headerBg pb-[42px] pt-[115px] text-[14px] text-lightColor md:pb-9 md:pt-16 md:text-base lg:pb-11 lg:pt-20 lg:text-[14px] xl:pb-9 xl:pt-16 xl:text-base'
      }
    >
      <div className={'container'}>
        <Link href={'/'} title={'logo Sound Fund Services'}>
          <Logo
            className={
              'mb-[9px] w-auto sm:w-[296px] md:mb-[3px] md:w-[420px] lg:w-[307px] xl:w-[420px]'
            }
          />
        </Link>
        <p
          className={
            'mb-[147px] text-center sm:ml-20 sm:text-left md:mb-[110px] md:ml-[108px] md:text-[22px] lg:ml-20 lg:text-[14px] xl:mb-[116px] xl:ml-28 xl:text-[22px]'
          }
        >
          {'Your fund administration partner\r'}
        </p>
        <p className={'text-center'}>
          {'Company registered in Denmark No. 44161524\r'}
          <br /> {'Copyright '}&copy;{' 2023 SoundFS ApS\r'}
        </p>
      </div>
    </footer>
  )
}
