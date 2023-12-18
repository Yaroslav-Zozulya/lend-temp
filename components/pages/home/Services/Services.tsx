import { FC } from 'react'
import { Title } from '@/components/common/Title'
import { Text } from '@/components/common/Text'
import Link from 'next/link'
import Image from 'next/image'

export const Services: FC = () => {
  return (
    <section
      className={
        'relative pb-[60px] pt-[15px] md:mx-auto md:max-w-[744px] md:pb-[47px] md:pt-16 lg:max-w-[1024px] xl:max-w-[1440px] xl:pb-0'
      }
    >
      <div
        className={
          'absolute right-0 top-0 z-[-1] h-16 w-[100%] bg-sidebarBg md:h-[100%] md:w-[171px] lg:w-[257px] xl:w-[491px]'
        }
      ></div>
      <div className={'container'}>
        <Title
          text={'Services'}
          tag={'h2'}
          classes={
            'text-2xl/[1.4] text-lightColor text-center mb-[47px] md:font-medium md:text-right md:mb-[54px] lg:text-[32px] lg:mb-[50px] xl:text-[64px] xl:mb-0'
          }
        />
        <ul className={''}>
          <li
            className={
              'group relative mb-12  md:mb-[33px] md:py-[26px] md:pl-[19px] lg:mb-[49px]'
            }
          >
            <div
              className={
                'w-100% absolute left-0 top-0 z-[-1] h-[100%] transition-colors duration-300 ease-linear group-hover:bg-hover md:w-[541px] lg:w-[735px] xl:w-[869px]'
              }
            ></div>
            <Title
              text={'Fund Structures'}
              tag={'h3'}
              classes={
                'text-headerBg text-xl/[1] mb-4 lg:mb-5 lg:text-2xl/[1] '
              }
            />
            <span className={'mb-4 block h-1 bg-sidebarBg md:opacity-0'}></span>
            <Image
              src={'/icons/line_services.svg'}
              width={668}
              height={668}
              className={
                'absolute left-[19px] top-[59px] hidden w-[608px] md:block lg:w-[834px] xl:w-[990px]'
              }
              alt={'decore line'}
            />
            <div
              className={
                'ml-auto max-w-[268px] md:ml-[60px] md:max-w-[440px] lg:max-w-[633px] xl:max-w-[746px]  '
              }
            >
              <Text
                text={
                  'We provide expertise from Fund launch to liquidation. This includes: handling administrative tasks, compliance, and cash management. We prepare contribution and distribution notices, equalisations, carried interest calculations, fund reporting, investor communications, and regulatory filings for efficient and compliant fund operations'
                }
                classes={'mb-4'}
              />
              <Link
                href={'/services#structures'}
                className={'text-base/[1.6] text-sidebarBg underline'}
                title={'link to Fund Structures'}
                aria-label={'Fund Structures'}
              >
                {'Learn More\r'}
              </Link>
            </div>
          </li>
          <li
            className={
              'group relative mb-12  md:mb-[33px] md:py-[26px] md:pl-[19px] lg:mb-[49px]'
            }
          >
            <div
              className={
                'w-100% absolute left-0 top-0 z-[-1] h-[100%] transition-colors duration-300 ease-linear group-hover:bg-hover md:w-[541px] lg:w-[735px] xl:w-[869px]'
              }
            ></div>
            <Title
              text={'Fund Manager'}
              tag={'h3'}
              classes={
                'text-headerBg text-xl/[1] mb-4 lg:mb-5 lg:text-2xl/[1] '
              }
            />
            <span className={'mb-4 block h-1 bg-sidebarBg md:opacity-0'}></span>
            <Image
              src={'/icons/line_services.svg'}
              width={668}
              height={668}
              className={
                'absolute left-[19px] top-[59px] hidden w-[608px] md:block lg:w-[834px] xl:w-[990px]'
              }
              alt={'decore line'}
            />
            <div
              className={
                'ml-auto max-w-[268px] md:ml-[60px] md:max-w-[440px] lg:max-w-[633px] xl:max-w-[746px]  '
              }
            >
              <Text
                text={
                  'We provide comprehensive support for fund managers, including payroll processing, travel and expense reporting, regulatory filings (e.g., AIFMD reporting), CFO support, and assistance with various special purpose vehicles (SPVs) like feeder funds, general partner, and carried interest vehicles.'
                }
                classes={'mb-4'}
              />
              <Link
                href={'/services#manager'}
                className={'text-base/[1.6] text-sidebarBg underline'}
                title={'link to Fund Manager'}
                aria-label={'link to Fund Manager'}
              >
                {'Learn More\r'}
              </Link>
            </div>
          </li>
          <li 
            className={
              'group relative  md:py-[26px] md:pl-[19px]'
             }
          >
            <div
              className={
                'w-100% absolute left-0 top-0 z-[-1] h-[100%] transition-colors duration-300 ease-linear group-hover:bg-hover md:w-[541px] lg:w-[735px] xl:w-[869px]'
              }
            ></div>
            <Title
              text={'General Services across all entity types'}
              tag={'h3'}
              classes={
                'text-headerBg text-xl/[1] mb-4 md:mb-10  lg:text-2xl/[1]'
              }
            />
            <span 
              className={
                'mb-4 block h-1 bg-sidebarBg md:opacity-0 md:hidden'
              }
            ></span>
            <Image
              src={'/icons/line_services.svg'}
              width={668}
              height={668}
              className={
                'absolute left-[19px] top-[63px] hidden w-[608px] md:block lg:w-[834px] xl:w-[990px]'
              }
              alt={'decore line'}
            />
            <div
              className={
                'ml-auto max-w-[268px] md:ml-[60px] md:max-w-[440px] lg:max-w-[633px] xl:max-w-[746px]'
               }
            >
              <Text
                text={
                  'We offer comprehensive general support across all entity types, including accounting and reconciliation, cash management, cost allocation, AML and KYC services, board of director services for regulatory compliance, and company secretarial services ensuring adherence to local laws and regulations.'
                }
                classes={'mb-4'}
              />
              <Link
                href={'/services#generalServices'}
                className={'text-base/[1.6] text-sidebarBg underline'}
                title={'link to General Services across all entity types'}
                aria-label={'General Services across all entity types'}
              >
                {'Learn More\r'}
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
