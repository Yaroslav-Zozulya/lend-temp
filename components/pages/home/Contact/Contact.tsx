import { FC } from 'react'
import Image from 'next/image'
import { Title } from '@/components/common/Title'
import { Text } from '@/components/common/Text'
import Link from 'next/link'

export const Contact: FC = () => {
  return (
    <section
      className={
        'pb-[79px] pt-[60px] md:pb-[195px] md:pt-[112px] lg:pb-[125px] lg:pt-[160px] xl:pb-[175px] xl:pt-[288px]'
      }
      id={'contacts'}
    >
      <div className={'container'}>
        <Title
          text={'Let Us Join Your Journey'}
          tag={'h2'}
          classes={
            'text-2xl/[1.4] text-headerBg font-medium text-center mb-8 md:text-2xl/[1] md:text-left md:mb-[27px] lg:text-[32px]/[1] lg:mb-8 xl:text-[64px]/[1] xl:mb-4 xl:max-w-[444px] lg:hidden'
          }
        />
        <Text
          text={
            'Thank you for considering Sound Fund Services as your partner. Every partnership starts with a conversation. We invite you to get in touch with us so we can understand your needs better.'
          }
          classes={
            'mb-8 xl:text-base/[1.6] lg:mb-[46px] xl:mb-[25px] md:max-w-[444px] lg:hidden'
          }
        />
        <div className={'items-end md:flex md:justify-between'}>
          <div className={'lg:pb-[52px]'}>
            <Title
              text={'Let Us Join Your Journey'}
              tag={'h2'}
              classes={
                'hidden lg:block text-2xl/[1.4] text-headerBg font-medium text-center mb-8 md:text-2xl/[1] md:text-left md:mb-[27px] lg:text-[32px]/[1] lg:mb-8 xl:text-[64px]/[1] xl:mb-4 xl:max-w-[444px]'
              }
            />
            <Text
              text={
                'Thank you for considering Sound Fund Services as your partner. Every partnership starts with a conversation. We invite you to get in touch with us so we can understand your needs better.'
              }
              classes={
                'hidden lg:block mb-8 xl:text-base/[1.6] lg:mb-[46px] xl:mb-[25px] md:max-w-[444px]'
              }
            />
            <address className={'mb-10 not-italic md:mb-0'}>
              <div className={'mb-8'}>
                <p
                  className={
                    'mb-[15px] text-base/[1.5] font-medium text-headerBg md:mb-5 md:text-xl/[1.5]'
                  }
                >
                  {'Contact:\r'}
                </p>
                <ul>
                  <li className={'mb-3'}>
                    {' '}
                    <Link
                      href={'mailto:contact@soundfundservices.com'}
                      className={
                        'flex gap-4 text-base/[1.5] text-mainText lg:text-sm/[1.5] xl:text-base/[1.5]'
                      }
                    >
                      {' '}
                      <Image
                        src={'/icons/icon_email.svg'}
                        width={24}
                        height={24}
                        alt={'mail icon'}
                      />
                      {'contact@soundfundservices.com\r'}
                    </Link>
                  </li>
                  <li>
                    {' '}
                    <Link
                      href={'tel:+4530684565'}
                      className={
                        'flex gap-4 text-base/[1.5] text-mainText lg:text-sm/[1.5] xl:text-base/[1.5]'
                      }
                    >
                      {' '}
                      <Image
                        src={'/icons/icon_phone.svg'}
                        width={24}
                        height={24}
                        alt={'phone icon'}
                      />
                      {'+45 3068 4565\r'}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p
                  className={
                    'mb-[15px] text-base/[1.5] font-medium text-headerBg md:mb-5 md:text-xl/[1.5]'
                  }
                >
                  {'Our address:\r'}
                </p>
                <Link
                  href={'https://maps.app.goo.gl/iCwjfMebHmdiawrW7'}
                  target={'_blank'}
                  rel={'noopener no-referrer nofollow'}
                  className={
                    'flex items-start gap-4 text-base/[1.5] text-mainText lg:text-sm/[1.5] xl:text-base/[1.5]'
                  }
                >
                  <Image
                    src={'/icons/icon_location.svg'}
                    width={32}
                    height={32}
                    alt={'navigate icon'}
                  />{' '}
                  {'Havnegade 23 '}
                  <br />
                  {'1058 Copenhagen K\r'}
                </Link>
              </div>
            </address>
          </div>
          <Image
            src={'/images/home/contact/navigate.png'}
            width={628}
            height={484}
            alt={'address indicator on the map'}
            className={
              'md:h-[276px] md:w-[359px] lg:h-[362px] lg:w-[470px] xl:h-[484px] xl:w-[628px]'
            }
          />
        </div>
      </div>
    </section>
  )
}
