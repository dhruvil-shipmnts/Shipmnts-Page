import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import Highlight from './components/HighlightSection/Highlight';
import ScreenShotScreen from './components/ScreenShotScreen/ScreenShotScreen';
import AboutSection from './components/AboutSection/AboutSection';
// import Arcade from './components/Arcade/Arcade';
import PricingComponent from './components/PricingPage/PricingComponent';
import LearnAndGrowSection from './components/ColorScreens/LearnAndGrowSection';
import SecuritySection from './components/ColorScreens/SecuritySection';
import PricingModelAd from './components/ColorScreens/PricingModelAd';
import { SCREEN_SHOT_CONTENT } from './components/ScreenShotScreen/export';
import TabScreen from './components/TabScreen/TabScreen';
import { ConfigProvider } from 'antd';
import ImageViewerModal from './components/Common/ImageViewer';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#fe6533',
        },
      }}
    >
      <>
        <ImageViewerModal />

        <Header />
        <LandingPage />
        <Highlight />
        {/* <Arcade /> */}
        <ScreenShotScreen {...SCREEN_SHOT_CONTENT['customer_centric_features']} />
        <TabScreen />
        <ScreenShotScreen {...SCREEN_SHOT_CONTENT['actionable_insight']} />
        <ScreenShotScreen {...SCREEN_SHOT_CONTENT['productivity_and_multi_party_collaboration']} />
        <LearnAndGrowSection />
        <SecuritySection />
        <PricingModelAd />
        <PricingComponent />
        <AboutSection />
      </>
    </ConfigProvider>
  );
}

export default App;
