import React, { FC } from 'react'
import { Link } from 'react-scroll'
import { useInView } from 'react-intersection-observer'
import './navLink.css'

interface NavLinkProps {
  target: string
  label: string
}

export const NavLink: FC<NavLinkProps> = ({ target, label }) => {
  const [ref] = useInView({ triggerOnce: true })

  return (
    <li ref={ref}>
      <Link
        activeClass={'text-sidebarBg st'}
        to={target}
        href={`${target}/link`}
        spy={true}
        smooth={true}
        offset={-180}
        duration={200}
        className={
          'row-rewerse group flex cursor-pointer items-center justify-end gap-2 text-lg/[1] transition-colors duration-300 ease-linear  hover:text-sidebarBg'
        }
        title={`link to ${label}`}
      >
        <span
          className={
            'active opacity-0 transition-colors transition-opacity duration-300 ease-linear group-hover:opacity-100'
          }
        >
          {label}
        </span>
        <span
          className={
            'status block h-[10px] w-[10px] shrink-0 rounded-[50%] border-2 transition-colors duration-300 ease-linear border-sidebarBg'
          }
        ></span>
      </Link>
    </li>
  )
}
