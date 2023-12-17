import React, { FC } from 'react'
import { NavLink } from './NavLink'

interface NavPanelProps {
  targets: string[]
  labels: string[]
}

export const NavPanel: FC<NavPanelProps> = ({ targets, labels }) => {
  return (
    <nav
      className={
        'sticky top-[320px] bg-panel lg:max-w-[205px] lg:pb-[35px] lg:pl-[20px] lg:pr-[30px] lg:pt-[58px] xl:max-w-[234px] xl:pb-[57px] xl:pl-[28px] xl:pt-[68px]'
      }
    >
      <ul className={'flex flex-col gap-[49px]'}>
        {targets.map((target, index) => (
          <NavLink key={target} target={target} label={labels[index] || ''} />
        ))}
      </ul>
    </nav>
  )
}
