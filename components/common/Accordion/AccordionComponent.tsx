'use client'

import { Accordion, AccordionItem } from '@nextui-org/react'
import { AccordionItemIndicatorProps } from '@nextui-org/react'

import { IAccordionProps } from './constants'

import Plus from '@/public/icons/plus.svg'
import Minus from '@/public/icons/minus.svg'

import s from './styles.module.css'

function MyIndicator({ isOpen }: AccordionItemIndicatorProps) {
  return isOpen ? (
    <Minus className={'h-10 w-10'} />
  ) : (
    <Plus className={'h-10 w-10'} />
  )
}

export function AccordionComponent({ data }: { data: IAccordionProps[] }) {
  return (
    <Accordion
      hideIndicator={false}
      itemClasses={{
        base: s.base,
        indicator: s.indicator,
        subtitle: s.subtitle,
        trigger: s.trigger,
        titleWrapper: s.titleWrapper,
        heading: s.heading,
        content: s.content,
      }}
    >
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          aria-label={`Accordion ${item.id}`}
          title={item.title}
          subtitle={item.subtitle}
          indicator={MyIndicator}
          classNames={{
            trigger: `flex justify-between pb-6 pt-6  md:pl-0 hover:bg-hover outline-none xl:pl-[255px] xl:text-[30px] ${s.title} duration-300 transition-all`,
            title: `font-medium text-headerBg text-left  max-w-[211px] xl:max-w-full ${s.titleText}`,
          }}
        >
          {item.content}
        </AccordionItem>
      ))}
    </Accordion>
  )
}
