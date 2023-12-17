'use client'

import React, { FC, useEffect, useState } from 'react'
import { useMedia, useToggle } from 'react-use'
import Link from 'next/link'

import { IconButton } from '@/components/common/IconButton'
import { Navbar } from './Navbar'
import { MobileMenu } from './MobileMenu'

import Logo from '@/public/icons/logo.svg'
import Linkedin from '@/public/icons/linkedin.svg'
import Burger from '@/public/icons/burger.svg'
import Close from '@/public/icons/close.svg'

export const Header: FC = () => {
  const [isBrowser, setIsBrowser] = useState<boolean>(false)
  const [isMenuOpen, toggleMenu] = useToggle(false)
  const isMobile = useMedia('(max-width: 743px)', false)
  const isTablet = useMedia('(min-width: 744px)', false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsBrowser(true)
    }
  }, [])

  useEffect(() => {
    if (isBrowser && !isMobile) {
      toggleMenu(false)
    }
  }, [isBrowser, isMobile, toggleMenu])

  return (
    <header className={'relative bg-headerBg py-5'} role={'banner'}>
      <div className={'container flex items-center justify-between'}>
        <Link href={'/'} title={'logo Sound Fund Services'}>
          <Logo className={'w-28  md:w-32 lg:w-72'} />
        </Link>

        {isBrowser && isMobile && (
          <div className={'flex items-center gap-6'}>
            <a
              href={
                'https://www.linkedin.com/company/sound-fund-services/about/'
              }
              target={'_blank'}
              title={'linkedin'}
              rel={'noreferrer'}
            >
              <Linkedin className={'h-6 w-6'} />
            </a>
            <IconButton
              type={'button'}
              aria-label={'open mobile menu'}
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <Close className={'h-8 w-8'} />
              ) : (
                <Burger className={'h-6 w-8'} />
              )}
            </IconButton>
          </div>
        )}

        {isBrowser && isMenuOpen && <MobileMenu />}

        {isBrowser && isTablet && <Navbar />}
      </div>
    </header>
  )
}
