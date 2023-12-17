import { FC, ReactNode } from 'react'
import clsx from 'clsx'
type HeroProps = {
  classes?: string
  children: ReactNode
}

export const Hero: FC<HeroProps> = ({ classes = '', children }) => {
  return (
    <section className={clsx('bg-cover bg-no-repeat', classes)}>
      {children}
    </section>
  )
}
