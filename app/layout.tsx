import './globals.css'

import React, { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { NextFont } from 'next/dist/compiled/@next/font'
import clsx from 'clsx'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter: NextFont = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sound Fund Services',
  description: 'Sound Fund Services',
}

type Props = {
  children: ReactNode
}
// test
export default function RootLayout({ children }: Props) {
  return (
    <html lang={'en'}>
      <body
        className={clsx(
          inter.className,
          'bg-slate-50 flex h-full min-h-screen flex-col',
        )}
      >
        <Header />

        <main className={'relative flex-grow'}>{children}</main>

        <Footer />
      </body>
    </html>
  )
}
