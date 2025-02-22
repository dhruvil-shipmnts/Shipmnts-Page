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
    title: 'Instant experiences for your customers',
    backgroundColor: '#FFF2E2',
    titleColor: '#7A1600',
    images: [
      { imgSrc: PublicLink, title: 'No login public link' },
      {
        imgSrc: ShipperInsight,
        title: 'Shipper insight',
      },
      { imgSrc: DocumentCollaboration, title: 'Document collaboration' },
      { imgSrc: OrderManagement, title: 'Order management' },
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
      { imgSrc: Insights, title: 'Make Faster Decision with Insights' },
      {
        imgSrc: TrackReceivables,
        title: 'Track Receivables and Collections',
      },
      {
        imgSrc: AutoHoldShipment,
        title: 'Auto hold shipments with low margin or credit heavy customers',
      },
      {
        imgSrc: MonitorShipment,
        title: 'Monitor shipment progress, track and resolve exception faster',
      },
      {
        imgSrc: KnowYourCustomer,
        title: 'Know which customers to stop doing business with all metrics in one place',
      },
      {
        imgSrc: AIGeneratedReport,
        title: 'Gen AI Generated Report',
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
      { imgSrc: MobileApp, title: 'Mobile App' },
      { imgSrc: ContextualChat, title: 'Contextual Actions & Chat' },
      { imgSrc: ContextualEmail, title: 'Contextual Email Collaboration' },
      { imgSrc: UniversalSearch, title: 'Web - Universal Search - Table' },
    ],
    sectionId: 'collaboration',
  },
};
