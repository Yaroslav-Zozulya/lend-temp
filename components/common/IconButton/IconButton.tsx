import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import clsx from 'clsx'
interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode
  className?: string
}

export const IconButton: FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx('inline-flex items-center justify-center', className)}
      {...props}
    >
      {children}
    </button>
  )
}
