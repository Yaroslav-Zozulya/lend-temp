import React, { FC } from 'react'

import { NavbarLink, NavbarLinkProps } from '../NavbarLink'
import { menuItems } from '../constants'
import Linkedin from '@/public/icons/linkedin.svg'

export const Navbar: FC = () => {
  return (
    <>
      <nav
        className={
          ' hidden items-center md:flex md:w-auto md:border-none md:bg-transparent md:py-0 md:shadow-none'
        }
      >
        {menuItems.map((item: NavbarLinkProps) => (
          <NavbarLink
            key={item.title.toLowerCase()}
            href={item.href}
            title={item.title}
          />
        ))}
        <a
          href={'https://www.linkedin.com/company/sound-fund-services/about/'}
          target={'_blank'}
          title={'linkedin'}
          rel={'noreferrer'}
        >
          <Linkedin className={'xl: ml-8 h-6 w-6'} />
        </a>
      </nav>
    </>
  )
}
