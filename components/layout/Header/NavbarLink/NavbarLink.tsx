import React, { FC } from 'react'

export interface NavbarLinkProps {
  title: string
  href: string
}

export const NavbarLink: FC<NavbarLinkProps> = ({ title, href }) => {
  return (
    <a
      href={href}
      className={
        ' border-b-2 border-b-transparent py-2 pl-10 text-hover transition-all duration-300 hover:bg-navLinkHover md:px-3 md:hover:border-b-2 md:hover:border-b-hover md:hover:bg-transparent lg:px-4 xl:px-8'
      }
    >
      {title}
    </a>
  )
}
