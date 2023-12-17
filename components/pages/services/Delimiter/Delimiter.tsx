import { FC } from 'react'

import Union from '@/public/icons/union.svg'

export const Delimiter: FC = () => {
  return (
    <div
      className={
        'mb-[120px] mt-[120px] flex justify-center gap-[10px] md:mb-20 md:mt-20 xl:mb-[120px] xl:mt-[120px]'
      }
    >
      <Union className={'w-[31px]'} />
      <Union className={'w-[31px]'} />
      <Union className={'w-[31px]'} />
    </div>
  )
}
