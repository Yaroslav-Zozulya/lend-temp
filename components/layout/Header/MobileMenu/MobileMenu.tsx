import React, { FC } from 'react'

import { NavbarLink, NavbarLinkProps } from '../NavbarLink'
import { menuItems } from '../constants'

export const MobileMenu: FC = () => {
  return (
    <nav
      className={
        'absolute right-0 top-full z-10 flex  w-40 flex-col gap-2  bg-headerBg shadow-sm md:hidden'
      }
    >
      {menuItems.map((item: NavbarLinkProps) => (
        <NavbarLink
          key={item.title.toLowerCase()}
          href={item.href}
          title={item.title}
        />
      ))}
    </nav>
  )
}
