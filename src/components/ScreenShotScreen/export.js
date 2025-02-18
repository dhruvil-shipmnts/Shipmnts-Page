import AIGeneratedReport from '../ScreenShotScreen/image/ControlInsight/AIGeneratedReport.svg';
import AutoHoldShipment from '../ScreenShotScreen/image/ControlInsight/AutoHoldShipment.svg';
import Insights from '../ScreenShotScreen/image/ControlInsight/Insights.svg';
import KnowYourCustomer from '../ScreenShotScreen/image/ControlInsight/KnowYourCustomer.svg';
import MonitorShipment from '../ScreenShotScreen/image/ControlInsight/MonitorShipment.svg';
import TrackReceviables from '../ScreenShotScreen/image/ControlInsight/TrackReceviables.svg';

import DocumentCollaboration from '../ScreenShotScreen/image/CustomerExperience/DocumentCollaboration.svg';
import OrderManagement from '../ScreenShotScreen/image/CustomerExperience/OrderManagement.svg';
import PublicLink from '../ScreenShotScreen/image/CustomerExperience/PublicLink.svg';
import ShipperInsight from '../ScreenShotScreen/image/CustomerExperience/ShipperInsight.svg';

import ContextualChat from '../ScreenShotScreen/image/ProductivityCollaboration/ContextualChat.svg';
import ContextualEmail from '../ScreenShotScreen/image/ProductivityCollaboration/ContextualEmail.svg';
import MobileApp from '../ScreenShotScreen/image/ProductivityCollaboration/MobileApp.svg';
import UniversalSearch from '../ScreenShotScreen/image/ProductivityCollaboration/UniversalSearch.svg';

import Box from '../ScreenShotScreen/image/UIElement/box.png';
import Circles from '../ScreenShotScreen/image/UIElement/circles.png';
import Eye from '../ScreenShotScreen/image/UIElement/eye.png';
import Globe from '../ScreenShotScreen/image/UIElement/globe.svg';
import Mobile from '../ScreenShotScreen/image/UIElement/mobile.png';
import Scroll from '../ScreenShotScreen/image/UIElement/scroll.png';

export const SCREEN_SHOT_CONTENT = [
  {
    upperImage: Box,
    lowerImage: Globe,
    title: 'Instant Experiences for your Customers',
    backgroundColor: '#FFF2E2',
    titleColor: '#7A1600',
    images: [
      { imgSrc: PublicLink, title: 'No login Public link' },
      {
        imgSrc: ShipperInsight,
        title: 'Shipper Insight',
      },
      { imgSrc: DocumentCollaboration, title: 'Document Collaboration' },
      { imgSrc: OrderManagement, title: 'Order Management' },
    ],
  },
  {
    upperImage: Scroll,
    lowerImage: Eye,
    title: 'Controls & insights your  management will love',
    backgroundColor: '#FAE8FF',
    titleColor: '#60007B',
    images: [
      { imgSrc: Insights, title: 'Make Faster Decision with Insights' },
      {
        imgSrc: TrackReceviables,
        title: 'Track Receviables and Collections',
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
        title: 'Gen AI Generted Report',
      },
    ],
  },
  {
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
  },
];
