import { Title } from '@/components/common/Title'
import { FC } from 'react'
import { Text } from '@/components/common/Text/Text'

export const WhyUs: FC = () => {
  return (
    <section
      className={
        'pb-[120px] pt-[93px] md:py-[112px] lg:pb-[125px] lg:pt-20 xl:pb-[224px] xl:pt-[193px]'
      }
    >
      <div className={'container'} id={'whyUs'}>
        <Title
          text={'Why Us?'}
          tag={'h2'}
          classes={
            'mb-8 text-2xl text-headerBg text-center md:text-left lg:text-[32px]/[1.4] xl:text-[64px]/[1.4]'
          }
        />
        <div className={'lg:flex lg:gap-5 xl:gap-10'}>
          <div
            className={
              'mb-4 flex items-center justify-center bg-lightColor p-6 lg:mb-0 lg:h-[309px] lg:w-[388px] lg:shrink-0 xl:h-[300px] xl:w-[374px]'
            }
          >
            <Text
              text={
                'Managers do not become successful merely as a result of outstanding fund administration but some outstanding Managers have failed due to poor administration'
              }
              classes={
                'font-medium leading-[1.6] tracking-[-0.8px] italic text-base/[1.6] md:text-xl/[1.5] xl:text-xl/[1.6]'
              }
            />
          </div>
          <div>
            <Text
              text={
                'Establishing, managing, and concluding Alternative Assets Funds necessitates that the Manager develops a back-office that is efficient and transparent for long-term functionality. Outsourcing all or segments of the back-office often proves advantageous for Managers, enabling them to direct their attention towards investment activities. Our offerings include both complete back-office packages and specialized services in areas where Managers prefer to only outsource a segment of their in-house back office. With a deep understanding of the industry’s best practices and a proven track record of success, we dedicate ourselves to tailor a solution to your needs.'
              }
              classes={'mb-4 xl:mb-[38px]'}
            />

            <Text
              text={
                'Having worked with managers within different strategies within Private Equity, Venture Funds, Incubators, Fund of Funds, Life Science, Shipping, Real Estate, Energy Transition, and Infrastructure, we have the skills and experience to meet your needs. Whether you are a multiple fund manager or just launching your first fund, we welcome the partnership. Our service portfolio encompasses all legal entities within your structure. This includes the administration of Fund Structures, Fund Management and SPV vehicles, such as Feeders, Co-investment Vehicles, Carried Interest Vehicles and Private Investment Holding Companies. Our geographic reach covers onshore and offshore Scandinavian Funds.'
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}
