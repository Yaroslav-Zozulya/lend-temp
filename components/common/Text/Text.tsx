import React, { FC } from 'react'
import clsx from 'clsx'

type TextProps = {
  text: string
  classes?: string
}

export const Text: FC<TextProps> = ({ text, classes = '' }) => {
  return (
    <p
      className={clsx(classes, 'text-xs/[1.5] text-mainText xl:text-sm/[1.5]')}
    >
      {text}
    </p>
  )
}
