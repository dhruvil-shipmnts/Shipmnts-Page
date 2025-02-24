import {
  AccountsReceivable1,
  AccountsReceivable2,
  AccountsReceivable3,
  AccountsReceivable4,
  AccountsReceivable5,
  SalesAndPricing1,
  SalesAndPricing2,
  SalesAndPricing3,
  SalesAndPricing4,
  SalesAndPricing5,
  SalesAndPricing6,
  TaxationControls1,
  TaxationControls2,
  TaxationControls3,
  TaxationControls4,
  TaxationControls5,
  TaxationControls6,
  AccountsPayable1,
  AccountsPayable2,
  AccountsPayable3,
  AccountsPayable4,
  AccountsPayable5,
  AccountsPayable6,
  Tracking,
  Workflow,
  Notifications,
  CreditControls,
  Alerts,
  HBL,
  DocWorkflow,
  Generation,
  Editor,
  Collaboration,
  Paperless,
  Transmission,
} from '../../assets';
import TabContainer from './TabContainer';

export const SALES_AND_PRICING = [
  {
    key: 'lead_activity_management',
    title: 'Lead and Activity Management',
    paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia eum nesciunt odio, numquam sunt minus accusamus, reiciendis consequatur vel maxime doloremque mollitia delectus itaque nam asperiores. Cum harum tenetur officia.',
    image: SalesAndPricing1,
  },
  {
    key: 'configurable_pipelines',
    title: 'Customizable Sales Pipelines',
    paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia eum nesciunt odio, numquam sunt minus accusamus, reiciendis consequatur vel maxime doloremque mollitia delectus itaque nam asperiores. Cum harum tenetur officia.',
    image: SalesAndPricing2,
  },
  {
    key: 'inquiry_quotations',
    title: 'Inquiry and Quotation Management',
    paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia eum nesciunt odio, numquam sunt minus accusamus, reiciendis consequatur vel maxime doloremque mollitia delectus itaque nam asperiores. Cum harum tenetur officia.',
    image: SalesAndPricing3,
  },
  {
    key: 'task_management',
    title: 'Task Tracking and Collaboration',
    paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia eum nesciunt odio, numquam sunt minus accusamus, reiciendis consequatur vel maxime doloremque mollitia delectus itaque nam asperiores. Cum harum tenetur officia.',
    image: SalesAndPricing4,
  },
  {
    key: 'rate_explorer',
    title: 'Rate Explorer and Comparison',
    paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia eum nesciunt odio, numquam sunt minus accusamus, reiciendis consequatur vel maxime doloremque mollitia delectus itaque nam asperiores. Cum harum tenetur officia.',
    image: SalesAndPricing5,
  },
  {
    key: 'lead_analytics_more',
    title: 'Lead Analytics and Insights',
    paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia eum nesciunt odio, numquam sunt minus accusamus, reiciendis consequatur vel maxime doloremque mollitia delectus itaque nam asperiores. Cum harum tenetur officia.',
    image: SalesAndPricing6,
  },
];

export const TAXATION_CONTROL = [
  {
    key: 'taxation_control_1',
    title: 'Tax Automation Tools',
    image: TaxationControls1,
  },
  {
    key: 'taxation_control_2',
    title: 'Profit and Loss with EBITDA Metrics',
    image: TaxationControls2,
  },
  {
    key: 'taxation_control_3',
    title: 'Robust Audit Trails',
    image: TaxationControls3,
  },
  {
    key: 'taxation_control_4',
    title: 'TDS Tracking & Compliance',
    image: TaxationControls4,
  },
  {
    key: 'taxation_control_5',
    title: 'Credit Control Rules to Reduce Bad Debt',
    image: TaxationControls5,
  },
  {
    key: 'taxation_control_6',
    title: 'Bank Reconciliation Suite',
    image: TaxationControls6,
  },
];

export const ACCOUNT_RECEIVABLE = [
  {
    key: 'account_receivable_1',
    title: 'Integrated Invoicing from Shipments',
    image: AccountsReceivable1,
  },
  {
    key: 'account_receivable_2',
    title: 'Automated Collection Reminders',
    image: AccountsReceivable2,
  },
  {
    key: 'account_receivable_3',
    title: 'AR with Profitability Insights',
    image: AccountsReceivable3,
  },
  {
    key: 'account_receivable_4',
    title: 'Collections Tracking & Management',
    image: AccountsReceivable4,
  },
  {
    key: 'account_receivable_5',
    title: 'Business Intelligence & Analytics',
    image: AccountsReceivable5,
  },
];

export const ACCOUNT_PAYABLE = [
  {
    key: 'account_payable_1',
    image: AccountsPayable1,
    title: 'Integrated Purchase Invoice Posting',
  },
  {
    key: 'account_payable_2',
    image: AccountsPayable2,
    title: 'Bulk Purchase Booking System',
  },
  {
    key: 'account_payable_3',
    image: AccountsPayable3,
    title: 'AP Tracking & Monitoring',
  },
  {
    key: 'account_payable_4',
    image: AccountsPayable4,
    title: 'Identify Risky Suppliers',
  },
  {
    key: 'account_payable_5',
    image: AccountsPayable5,
    title: 'Manage Supplier Disputes',
  },
  {
    key: 'account_payable_6',
    image: AccountsPayable6,
    title: 'Tax Reconciliation Suite',
  },
];

export const DOCUMENTATION = [
  {
    key: 'documentation_1',
    title: 'Manage Document-Level Workflow for Forwarding & NVO',
    image: DocWorkflow,
  },
  {
    key: 'documentation_2',
    title: 'Single-Click Multimodal Document Generation',
    image: Generation,
  },
  {
    key: 'documentation_3',
    title: 'Real-Time Document Editor with Credit Control',
    image: Editor,
  },
  {
    key: 'documentation_4',
    title: 'Easy In-App Collaboration for Internal Teams & CX',
    image: Collaboration,
  },
  {
    key: 'documentation_5',
    title: 'Go Paperless with Organized Digital Storage',
    image: Paperless,
  },
  {
    key: 'documentation_6',
    title: 'In-App E-AWB Transmission',
    image: Transmission,
  },
];

export const CS_OPERATIONS = [
  {
    key: 'cs_operations_1',
    title: 'Multimodal Tracking Automation',
    image: Tracking,
  },
  {
    key: 'cs_operations_2',
    title: 'Workflow & Milestone Management',
    image: Workflow,
  },
  {
    key: 'cs_operations_3',
    title: 'Single-Click Multichannel Notifications',
    image: Notifications,
  },
  {
    key: 'cs_operations_4',
    title: 'Operational-Level Credit Controls',
    image: CreditControls,
  },
  {
    key: 'cs_operations_5',
    title: 'DSR/Exception Monitoring & Alerts',
    image: Alerts,
  },
  {
    key: 'cs_operations_6',
    title: 'AI-Powered Auto Record Creation with Booking Copy/MBL/HBL',
    image: HBL,
  },
];

export const TAB_ITEMS = [
  {
    key: '1',
    label: 'Sales & Pricing',
    content: (
      <TabContainer
        items={SALES_AND_PRICING}
        colorHash={{
          even: '#FFFFE3',
          odd: '#FEFFC7',
        }}
      />
    ),
  },
  {
    key: '2',
    label: 'CS & Operations',
    content: (
      <TabContainer
        items={CS_OPERATIONS}
        colorHash={{
          even: '#FBDFBC',
          odd: '#FFF2E2',
        }}
      />
    ),
  },
  {
    key: '3',
    label: 'Documentation',
    content: (
      <TabContainer
        items={DOCUMENTATION}
        colorHash={{
          even: '#FFFFE3',
          odd: '#FEFFC7',
        }}
      />
    ),
  },
  {
    key: '4',
    label: 'Accounts Receivable',
    content: (
      <TabContainer
        items={ACCOUNT_RECEIVABLE}
        colorHash={{
          even: '#FBDFBC',
          odd: '#FFF2E2',
        }}
      />
    ),
  },
  {
    key: '5',
    label: 'Accounts Payable',
    content: (
      <TabContainer
        items={ACCOUNT_PAYABLE}
        colorHash={{
          even: '#FFFFE3',
          odd: '#FEFFC7',
        }}
      />
    ),
  },
  {
    key: '6',
    label: 'Taxation and Controls',
    content: (
      <TabContainer
        items={TAXATION_CONTROL}
        colorHash={{
          even: '#FBDFBC',
          odd: '#FFF2E2',
        }}
      />
    ),
  },
];
