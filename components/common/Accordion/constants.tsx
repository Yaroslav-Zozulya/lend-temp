import React, { ReactNode } from 'react'

export interface IAccordionProps {
  id: number
  title: string
  subtitle?: string
  content: ReactNode
}

// className = 'font-medium text-headerBg';
export const structuresAccordionData: IAccordionProps[] = [
  {
    id: 1,
    title: 'Fund launch',
    subtitle:
      'Drawing on experience from numerous Fund launches, we enable managers to devote more time to fundraising by ensuring that Fund admin aspects do not take-up unnecessary time',
    content: (
      <div>
        <p
          className={
            'text-xs/[1.5] text-mainText xl:mb-5 xl:mt-[30px] xl:hidden xl:w-[307px] xl:text-sm/[1.5]'
          }
        >
          {
            'Drawing on experience from numerous Fund launches, we enable managers\r'
          }
          {
            'to devote more time to fundraising by ensuring that Fund admin aspects\r'
          }
          {'do not take-up unnecessary time\r'}
        </p>
        <ul
          className={
            'mb-5 list-disc pl-[18px] text-xs/[1.5] text-mainText xl:ml-[430px] xl:w-[390px] xl:text-sm/[1.5]'
          }
        >
          <li>
            <p>{'Feedback to Fund operations aspect of LPA'}</p>
          </li>
          <li>
            <p>
              {
                'Supporting the Manager in Investor due diligence (questions on\r'
              }
              {'reporting, deadlines, format etc.)\r'}
            </p>
          </li>
          <li>
            <p>{'Technology including Investor portal setup'}</p>
          </li>
          <li>
            <p>
              {'Liaising and coordination of compliance and AML establishment'}
            </p>
          </li>
          <li>
            <p>{'Cash Management practices'}</p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Capital Contribution and Distribution Processing',
    subtitle:
      'Preparation and review of individually designed contribution and distribution notices to be communicated to Investors. If required, we will also prepare Notices in adherence to the ILPA standard while also ensuring compliance with Fund organisational documents, accounting and regulatory standards. Including but not limited to:',
    content: (
      <div>
        <p
          className={
            'mb-5 text-xs/[1.5] text-mainText xl:mt-[30px] xl:hidden xl:w-[307px] xl:text-sm/[1.5]'
          }
        >
          {'Preparation and review of individually designed contribution and\r'}
          {
            'distribution notices to be communicated to Investors. If required, we\r'
          }
          {
            'will also prepare Notices in adherence to the ILPA standard while also\r'
          }
          {
            'ensuring compliance with Fund organisational documents, accounting and\r'
          }
          {'regulatory standards. Including but not limited to:\r'}
        </p>
        <ul
          className={
            'mb-5 list-disc pl-[18px] text-xs/[1.5] text-mainText xl:ml-[430px] xl:w-[390px] xl:text-sm/[1.5]'
          }
        >
          <li>
            <p>{'Management fee'}</p>
          </li>
          <li>
            <p>{'Realised Carried Interest'}</p>
          </li>
          <li>
            <p>{'Limited Partner allocations'}</p>
          </li>
          <li>
            <p>
              {'Investment allocations across fund structure including\r'}
              {'co-investment vehicles\r'}
            </p>
          </li>
          <li>
            <p>{'Subsequent close equalisations'}</p>
          </li>
          <li>
            <p>{'Net capital calls and distributions'}</p>
          </li>
          <li>
            <p>{'Remaining commitment'}</p>
          </li>
          <li>
            <p>{'Capital gain or loss'}</p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Subsequent Close Equalisation',
    subtitle:
      'Ensuring that Equalisations are not just a process but a fair and LPA-compliant calculation.',
    content: (
      <div>
        <p
          className={
            'mb-5 text-xs/[1.5] text-mainText xl:mt-[30px] xl:hidden xl:w-[307px] xl:text-sm/[1.5]'
          }
        >
          {
            'Ensuring that Equalisations are not just a process but a fair and\r'
          }
          {'LPA-compliant calculation.\r'}
        </p>
        <ul
          className={
            'mb-5 list-disc pl-[18px] text-xs/[1.5] text-mainText xl:ml-[430px] xl:w-[390px] xl:text-sm/[1.5]'
          }
        >
          <li>
            <p>{'Calculate capital due from new partners'}</p>
          </li>
          <li>
            <p>{'Calculate subsequent close Equalisation interest'}</p>
          </li>
          <li>
            <p>{'Preparation of Equalisation notices'}</p>
          </li>
          <li>
            <p>{'Process the return of capital to existing partners'}</p>
          </li>
          <li>
            <p>
              {'Re-calculate investment allocations for funds with multiple\r'}
              {'vehicles\r'}
            </p>
          </li>
          <li>
            <p>{'Reflect equalisation in the accounting records'}</p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Carried Interest Calculations',
    subtitle:
      'Fund reporting in accordance with Fund documentation and in adherence with ILPA or Invest Europe guidelines while respecting the Fund’s visual identity.',
    content: (
      <div>
        <p
          className={
            'mb-5 text-xs/[1.5] text-mainText xl:mt-[30px] xl:hidden xl:w-[307px] xl:text-sm/[1.5]'
          }
        >
          {
            'Fund reporting in accordance with Fund documentation and in adherence\r'
          }
          {
            'with ILPA or Invest Europe guidelines while respecting the Fund’s\r'
          }
          {'visual identity.\r'}
        </p>
        <ul
          className={
            'mb-5 list-disc pl-[18px] text-xs/[1.5] text-mainText xl:ml-[430px] xl:w-[390px] xl:text-sm/[1.5]'
          }
        >
          <li>
            <p>{'Whole-fund, Deal-by-deal, Cross-collateralised methods'}</p>
          </li>
          <li>
            <p>{'Unrealised / accrued Carried Interest by partner'}</p>
          </li>
          <li>
            <p>{'Realised Carried Interest by partner'}</p>
          </li>
          <li>
            <p>{'Allocation of Carried Interest to carry partners.'}</p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 5,
    title: 'Fund Reporting',
    subtitle:
      'Fund reporting in accordance with Fund documentation and in adherence with ILPA or Invest Europe guidelines while respecting the Fund’s visual identity.',
    content: (
      <div>
        <p
          className={
            'mb-5 text-xs/[1.5] text-mainText xl:mt-[30px] xl:hidden xl:w-[307px] xl:text-sm/[1.5]'
          }
        >
          {
            'Fund reporting in accordance with Fund documentation and in adherence\r'
          }
          {
            'with ILPA or Invest Europe guidelines while respecting the Fund’s\r'
          }
          {'visual identity.\r'}
        </p>
        <ul
          className={
            'mb-5 list-disc pl-[18px] text-xs/[1.5] text-mainText xl:ml-[430px] xl:w-[390px] xl:text-sm/[1.5]'
          }
        >
          <li>
            <p>{'Quarterly financial statements'}</p>
          </li>
          <li>
            <p>{'Fund Net Asset Value and Partner capital accounts'}</p>
          </li>
          <li>
            <p>
              {
                'Maintaining portfolio Cap tables and calculating exit waterfalls\r'
              }
            </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 6,
    title: 'Investor Communications',
    subtitle:
      'Fund reporting in accordance with Fund documentation and in adherence with ILPA or Invest Europe guidelines while respecting the Fund’s visual identity.',
    content: (
      <div>
        <p
          className={
            'mb-5 text-xs/[1.5] text-mainText xl:my-[-16px] xl:mt-[30px] xl:hidden xl:w-[307px] xl:p-0 xl:text-sm/[1.5]'
          }
        >
          {
            'Drawing on experience from numerous Fund launches, we enable managers\r'
          }
          {
            'to devote more time to fundraising by ensuring that Fund admin aspects\r'
          }
          {'do not take-up unnecessary time.​\r'}
        </p>
      </div>
    ),
  },
  {
    id: 7,
    title: 'Regulatory Fillings',
    subtitle:
      ' Supporting all regulatory reporting required by local regulator such as FATCA and CRS, AIF reporting etc.',
    content: (
      <div>
        <p
          className={
            'mb-5 text-xs/[1.5] text-mainText xl:mt-[30px] xl:hidden xl:w-[307px] xl:text-sm/[1.5]'
          }
        >
          {
            'Supporting all regulatory reporting required by local regulator such\r'
          }
          {'as FATCA and CRS, AIF reporting etc.\r'}
        </p>
      </div>
    ),
  },
]

export const managerAccordionData: IAccordionProps[] = [
  {
    id: 1,
    title: 'Payroll Processing',
    subtitle:
      'Payroll processing ensuring that remuneration, holiday and absences is handled accurately and timely.',
    content: (
      <div>
        <p
          className={
            'mb-5 text-xs/[1.5] text-mainText xl:mt-[30px] xl:hidden xl:w-[307px] xl:text-sm/[1.5]'
          }
        >
          {
            'Payroll processing ensuring that remuneration, holiday and absences is\r'
          }
          {'handled accurately and timely.\r'}
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Travel and Expense Reporting',
    subtitle:
      'Assisting in establishing best practice for travel and expense reporting along with the associated accounting. Frequently underestimated as a critical domain, travel and expense management can pose risks for investment managers. Leveraging our experience, we aid in creating and maintaining a procedure that mitigates such risks.',
    content: (
      <div>
        <p
          className={
            'mb-5 text-xs/[1.5] text-mainText xl:mt-[30px] xl:hidden xl:w-[307px] xl:text-sm/[1.5]'
          }
        >
          {'Assisting in establishing best practice for travel and expense\r'}
          {'reporting along with the associated accounting. Frequently\r'}
          {
            'underestimated as a critical domain, travel and expense management can\r'
          }
          {
            'pose risks for investment managers. Leveraging our experience, we aid\r'
          }
          {
            'in creating and maintaining a procedure that mitigates such risks.\r'
          }
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Regulatory Fillings',
    subtitle:
      'Supporting all reporting required by local regulator such as AIFMD reporting etc.',
    content: (
      <div>
        <p
          className={
            'mb-5 text-xs/[1.5] text-mainText xl:mt-[30px] xl:hidden xl:w-[307px] xl:text-sm/[1.5]'
          }
        >
          {
            'Supporting all reporting required by local regulator such as AIFMD\r'
          }
          {'reporting etc.\r'}
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: 'CFO Support',
    subtitle:
      'We offer a supporting role to CFOs or Managers without a CFO. We support to better plan for changes caused by Fund events, such as the ratchet down of management fee income. We offer guidance on critical best practices, ensuring that the firm is established with the necessary foundations to fulfil its fiduciary responsibilities from day one.',
    content: (
      <div>
        <p
          className={
            'mb-5 text-xs/[1.5] text-mainText xl:mt-[30px] xl:hidden xl:w-[307px] xl:text-sm/[1.5]'
          }
        >
          {'We offer a supporting role to CFOs or Managers without a CFO. We\r'}
          {
            'support to better plan for changes caused by Fund events, such as the\r'
          }
          {
            'ratchet down of management fee income. We offer guidance on critical\r'
          }
          {'best practices, ensuring that the firm is established with the\r'}
          {
            'necessary foundations to fulfil its fiduciary responsibilities from\r'
          }
          {'day one.\r'}
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: 'Feeders, GPs, Carried Interest and other SPVs',
    subtitle:
      'Most Fund structures will include Special Purpose Vehicles (SPVs) such as Feeder Funds, General Partners, Carried Interest Vehicles and in some instances Co-Investment Funds or Portfolio Investment holding companies. Each entity type necessitates distinct reporting or filing requirements, services which we are pleased to extend.',
    content: (
      <div>
        <p
          className={
            'mb-5 text-xs/[1.5] text-mainText xl:mt-[30px] xl:hidden xl:w-[307px] xl:text-sm/[1.5]'
          }
        >
          {
            'Most Fund structures will include Special Purpose Vehicles (SPVs) such\r'
          }
          {
            'as Feeder Funds, General Partners, Carried Interest Vehicles and in\r'
          }
          {
            'some instances Co-Investment Funds or Portfolio Investment holding\r'
          }
          {
            'companies. Each entity type necessitates distinct reporting or filing\r'
          }
          {'requirements, services which we are pleased to extend.\r'}
        </p>
      </div>
    ),
  },
]

export const generalServicesAccordionData: IAccordionProps[] = [
  {
    id: 1,
    title: 'Accounting and Reconciliation',
    subtitle:
      'Financial records maintenance and assistance with everything from accounting to preparing financial statements',
    content: (
      <div>
        <p
          className={
            'mb-5 text-xs/[1.5] text-mainText xl:mt-[30px] xl:hidden xl:w-[307px] xl:text-sm/[1.5]'
          }
        >
          {
            'Financial records maintenance and assistance with everything from\r'
          }
          {'accounting to preparing financial statements\r'}
        </p>
        <ul
          className={
            'mb-5 list-disc pl-[18px] text-xs/[1.5] text-mainText xl:ml-[430px] xl:w-[390px] xl:text-sm/[1.5]'
          }
        >
          <li>
            <p>{'Ongoing accounting and reconciliation of general ledger'}</p>
          </li>
          <li>
            <p>{'Managing intercompany balances'}</p>
          </li>
          <li>
            <p>{'Commitment Ledgers'}</p>
          </li>
          <li>
            <p>
              {
                'Supporting the auditors by providing a reconciled general ledger\r'
              }
              {'and documentation\r'}
            </p>
          </li>
          <li>
            <p>
              {
                'Archiving and storage of bookkeeping materials, including ledgers,\r'
              }
              {'in accordance with applicable Law\r'}
            </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Cash Management and Banking transactions',
    subtitle:
      'Support cash management by reviewing and processing invoices in accordance with the Standard Operating Procedures, preparing banktransactions for payment of invoices and other distributions.',
    content: (
      <div>
        <p
          className={
            'mb-5 text-xs/[1.5] text-mainText xl:mt-[30px] xl:hidden xl:w-[307px] xl:text-sm/[1.5]'
          }
        >
          {'Support cash management by reviewing and processing invoices in\r'}
          {
            'accordance with the Standard Operating Procedures, preparing bank\r'
          }
          {'transactions for payment of invoices and other distributions.\r'}
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Cost allocation - Intercompany billing between entities',
    subtitle:
      'Ensuring accuracy and validity of any expenses charged to the Fund is a critical fiduciary responsibility for Fund managers. Sound Fund Services will control that cost allocation is done in accordance with fund documentation and accurate records associated with these affiliated transactions are kept',
    content: (
      <div>
        <p
          className={
            'mb-5 text-xs/[1.5] text-mainText xl:mt-[30px] xl:hidden xl:w-[307px] xl:text-sm/[1.5]'
          }
        >
          {
            'Ensuring accuracy and validity of any expenses charged to the Fund is\r'
          }
          {
            'a critical fiduciary responsibility for Fund managers. Sound Fund\r'
          }
          {
            'Services will control that cost allocation is done in accordance with\r'
          }
          {'fund documentation and accurate records associated with these\r'}
          {'affiliated transactions are kept.\r'}
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: 'AML and KYC Services',
    subtitle:
      'Compliance with Anti Money Laundering regulation is a critical Fiduciary responsibility, which we are pleased to support through:',
    content: (
      <div>
        <p
          className={
            'mb-5 text-xs/[1.5] text-mainText xl:mt-[30px] xl:hidden xl:w-[307px] xl:text-sm/[1.5]'
          }
        >
          {'Compliance with Anti Money Laundering regulation is a critical\r'}
          {
            'Fiduciary responsibility, which we are pleased to support through:\r'
          }
        </p>
        <ul
          className={
            'mb-5 list-disc pl-[18px] text-xs/[1.5] text-mainText xl:ml-[430px] xl:w-[390px] xl:text-sm/[1.5]'
          }
        >
          <li>
            <p>{'Entirely digital KYC-onboarding'}</p>
          </li>
          <li>
            <p>
              {
                'Review of AML policies and business procedures for the prevention\r'
              }
              {'of Money Laundering\r'}
            </p>
          </li>
          <li>
            <p>{'Ongoing screening of all investors'}</p>
          </li>
          <li>
            <p>
              {'Providing first draft of risk assestments of all Investors.'}
            </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 5,
    title: 'Board of Director Services',
    subtitle:
      'Providing a director with expertise in your industry to oversee compliance with local laws and regulations.',
    content: (
      <div>
        <p
          className={
            'mb-5 text-xs/[1.5] text-mainText xl:mt-[30px] xl:hidden xl:w-[307px] xl:text-sm/[1.5]'
          }
        >
          {'Providing a director with expertise in your industry to oversee\r'}
          {'compliance with local laws and regulations.\r'}
        </p>
      </div>
    ),
  },
  {
    id: 6,
    title: 'Company Secretarial',
    subtitle:
      'Sound Fund Services is well-equipped to facilitate the management of your corporate entities post-incorporation ensuring adherence to local laws and regulations. Including but not limited to providing registered address, fillings to Business Authorities, maintaining up-to-date records, coordinate board/shareholder meetings, and ensure the proper documentation of minutes.',
    content: (
      <div>
        <p
          className={
            'mb-5 text-xs/[1.5] text-mainText xl:mt-[30px] xl:hidden xl:w-[307px] xl:text-sm/[1.5]'
          }
        >
          {
            'Sound Fund Services is well-equipped to facilitate the management of\r'
          }
          {
            'your corporate entities post-incorporation ensuring adherence to local\r'
          }
          {'laws and regulations. Including but not limited to providing\r'}
          {
            'registered address, fillings to Business Authorities, maintaining\r'
          }
          {
            'up-to-date records, coordinate board/shareholder meetings, and ensure\r'
          }
          {'the proper documentation of minutes.\r'}
        </p>
      </div>
    ),
  },
]
