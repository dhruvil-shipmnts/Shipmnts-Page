import {
  AIGeneratedReport,
  AutoHoldShipment,
  Box,
  Circles,
  ContextualChat,
  ContextualEmail,
  DocumentCollaboration,
  Eye,
  Globe,
  Insights,
  KnowYourCustomer,
  Mobile,
  MobileApp,
  MonitorShipment,
  OrderManagement,
  PublicLink,
  Scroll,
  ShipperInsight,
  TrackReceivables,
  UniversalSearch,
} from '../../assets';

export const SCREEN_SHOT_CONTENT = {
  customer_centric_features: {
    upperImage: Box,
    lowerImage: Globe,
    title: 'Instant Experiences for Your Customers',
    backgroundColor: '#FFF2E2',
    titleColor: '#7A1600',
    images: [
      { imgSrc: PublicLink, title: 'Seamless Access with No-Login Public Links' },
      {
        imgSrc: ShipperInsight,
        title: 'Actionable Shipper Insights for Smarter Decisions',
      },
      { imgSrc: DocumentCollaboration, title: 'Real-Time Document Collaboration Made Easy' },
      { imgSrc: OrderManagement, title: 'Effortless and Streamlined Order Management' },
    ],
    sectionId: 'digital_platform_section',
  },
  actionable_insight: {
    upperImage: Scroll,
    lowerImage: Eye,
    title: 'Controls & insights your  management will love',
    backgroundColor: '#FAE8FF',
    titleColor: '#60007B',
    images: [
      { imgSrc: Insights, title: 'Make Faster Decisions with Insights' },
      {
        imgSrc: TrackReceivables,
        title: 'Track Receivables and Collections',
      },
      {
        imgSrc: AutoHoldShipment,
        title: 'Auto-Hold Shipments for Low-Margin or Credit-Heavy Customers',
      },
      {
        imgSrc: MonitorShipment,
        title: 'Monitor Shipment Progress, Track and Resolve Exceptions Faster',
      },
      {
        imgSrc: KnowYourCustomer,
        title: 'Identify High-Risk Customers with All Key Metrics in One Place',
      },
      {
        imgSrc: AIGeneratedReport,
        title: 'Gen AI-Generated Reports',
      },
    ],
    sectionId: 'actionable_insight',
  },
  productivity_and_multi_party_collaboration: {
    upperImage: Mobile,
    lowerImage: Circles,
    title: 'Productivity & multi party collaboration',
    backgroundColor: '#FFF2E2',
    titleColor: '#7A1600',
    images: [
      { imgSrc: MobileApp, title: 'Mobile App for On-the-Go Access' },
      { imgSrc: ContextualChat, title: 'Contextual Actions & Real-Time Chat' },
      { imgSrc: ContextualEmail, title: 'Seamless Email Collaboration in Context' },
      { imgSrc: UniversalSearch, title: 'Powerful Universal Search Across Data' },
    ],
    sectionId: 'collaboration',
  },
};
