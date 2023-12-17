import { Title } from '@/components/common/Title'
import Image from 'next/image'
import { FC } from 'react'

export const AboutUs: FC = () => {
  return (
    <section
      className={
        'relative  pt-[15px] md:mx-auto md:max-w-[744px] md:pb-[166px] md:pt-16 lg:max-w-[1024px] lg:pb-[131px] xl:max-w-[1440px] xl:pb-[129px]'
      }
      id={'about'}
    >
      <div
        className={
          'absolute left-0 top-0 z-[-1] h-16 w-[100%] bg-headerBg md:h-[100%] md:w-[171px] lg:w-[257px] xl:w-[491px]'
        }
      ></div>
      <div className={'container'}>
        <Title
          text={'About Us'}
          tag={'h2'}
          classes={
            'text-2xl/[1.4] text-lightColor text-center mb-[47px] md:font-medium md:text-left md:mb-[60px] lg:text-[32px] lg:mb-[81px] xl:text-[64px] xl:mb-[36px]'
          }
        />
        <ul className={'md:pl-[54px] lg:pl-[143px] xl:pl-[217px]'}>
          <li
            className={
              'mb-20 transition-colors duration-300 ease-linear hover:cursor-pointer hover:bg-hover md:mb-10 md:flex md:gap-4 lg:gap-6 xl:gap-12'
            }
          >
            <Image
              src={'/images/home/aboutUs/about_us_1.png'}
              width={293}
              height={196}
              alt={'The Sound Philosophy Image'}
              className={
                'mb-6 h-[220px] w-[328px] md:mb-0 md:h-[196px] md:w-[293px]'
              }
            />
            <div className={'lg:pt-4'}>
              <Title
                text={'The Sound Philosophy'}
                tag={'h3'}
                classes={
                  'text-headerBg text-xl/[1] mb-4 lg:mb-5 lg:text-2xl/[1] '
                }
              />
              <p className={'text-xs/[1.5] text-mainText xl:text-sm/[1.5]'}>
                {
                  'We founded Sound Fund Services with a vision: to excel in Fund\r'
                }
                {'services by providing exceptional, high-touch service. Our\r'}
                {
                  'commitment to becoming the best in the industry drives every\r'
                }
                {
                  'aspect of our business. By prioritising a hands-on approach\r'
                }
                {'combined with the right software solutions, we deliver\r'}
                {
                  'unparalleled excellence in Fund services to our clients. We\r'
                }
                {'consider this the Sound Advantage.\r'}
              </p>
            </div>
          </li>
          <li
            className={
              'mb-20 transition-colors duration-300 ease-linear hover:cursor-pointer hover:bg-hover md:mb-10 md:flex md:gap-4 lg:gap-6 xl:gap-12'
            }
          >
            <Image
              src={'/images/home/aboutUs/about_us_2.png'}
              width={293}
              height={196}
              alt={'Across the Sound Image'}
              className={
                'mb-6 h-[220px] w-[328px] md:mb-0 md:h-[196px] md:w-[293px]'
              }
            />
            <div className={'lg:pt-4'}>
              <Title
                text={'Across the Sound'}
                tag={'h3'}
                classes={
                  'text-headerBg text-xl/[1] mb-4 lg:mb-5 lg:text-2xl/[1] '
                }
              />
              <p className={'text-xs/[1.5] text-mainText xl:text-sm/[1.5]'}>
                {
                  'Our name not only refers to the Sound Advantage but also pays\r'
                }
                {
                  'homage to "the Sound" (Øresund), the iconic sea that unites\r'
                }
                {'Denmark and Sweden. While we are located at the Copenhagen\r'}
                {
                  'harbour, we proudly serve clients from both sides of the Sound,\r'
                }
                {
                  'offering elite fund administration solutions to managers seeking\r'
                }
                {'excellence and precision in their financial operations.\r'}
              </p>
            </div>
          </li>
          <li
            className={
              'transition-colors duration-300 ease-linear hover:cursor-pointer hover:bg-hover md:flex md:gap-4 lg:gap-6 xl:gap-12'
            }
          >
            <Image
              src={'/images/home/aboutUs/about_us_3.png'}
              width={293}
              height={196}
              alt={'The Sound Software Image'}
              className={
                'mb-6 h-[220px] w-[328px] md:mb-0 md:h-[196px] md:w-[293px]'
              }
            />
            <div className={'lg:pt-4'}>
              <Title
                text={'The Sound Software'}
                tag={'h3'}
                classes={
                  'text-headerBg text-xl/[1] mb-4 lg:mb-5 lg:text-2xl/[1] '
                }
              />
              <p className={'text-xs/[1.5] text-mainText xl:text-sm/[1.5]'}>
                {
                  'We actually like what we do. Therefore, we build software that\r'
                }
                {
                  'improves quality but does not compromise our personal engagement\r'
                }
                {
                  "ensuring and adherence with each Fund's unique characteristics.\r"
                }
                {
                  'Every Fund is different, and your Fund administration must be\r'
                }
                {
                  'able to accommodate that. With Sound Fund Services, you will\r'
                }
                {
                  'experience a service that goes beyond a clever piece of software\r'
                }
                {'attempting to fit you into a one-size-fits-all format.\r'}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
