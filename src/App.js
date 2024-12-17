import "./App.css";
import Header from "./components/Header/Header";
import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Highlight from "./components/HighlightSection/Highlight";
import ColorScreens from "./components/CarouselScreen/ColorScreens";
import Balance from "../src/components/CarouselScreen/colorScreenImage/Balance.svg";
import Suppot from "../src/components/CarouselScreen/colorScreenImage/Support.svg";
import Security from "../src/components/CarouselScreen/colorScreenImage/Security.svg";
import ScreenShotScreen from "./components/ScreenShotScreen/ScreenShotScreen";
import Circles from "../src/components/ScreenShotScreen/image/circles.png";
import Mobile from "../src/components/ScreenShotScreen/image/mobile.png";
import SceenShot from "../src/components/ScreenShotScreen/image/screenshot.png";
import MobileApp from "../src/components/ScreenShotScreen/image/ProductivityCollaboration/MobileApp.svg";
import ContextualChat from "../src/components/ScreenShotScreen/image/ProductivityCollaboration/ContextualChat.svg";
import ContextualEmail from "../src/components/ScreenShotScreen/image/ProductivityCollaboration/ContextualEmail.svg";
import PublicLink from "../src/components/ScreenShotScreen/image/CustomerExperience/PublicLink.svg";
import ShipperInsight from "../src/components/ScreenShotScreen/image/CustomerExperience/ShipperInsight.svg";
import OrderManagement from "../src/components/ScreenShotScreen/image/CustomerExperience/OrderManagement.svg";
import DocumentCollaboration from "../src/components/ScreenShotScreen/image/CustomerExperience/DocumentCollaboration.svg";
import Box from "../src/components/ScreenShotScreen/image/box.png";
import Globe from "../src/components/ScreenShotScreen/image/globe.svg";
import Scroll from "../src/components/ScreenShotScreen/image/scroll.png";
import Eye from "../src/components/ScreenShotScreen/image/eye.png";
import TabScreen from "./components/TabScreen/TabScreen";
import TabContainer from "./components/TabScreen/TabContainer";
import WhiteTeam from "../src/components/TabScreen/team.png";
import WhiteCircles from "../src/components/TabScreen/whiteCircles.png";
import AboutSection from "./components/AboutSection/AboutSection";
import Arcade from "./components/Arcade/Arcade";
function App() {
  const content = [
    {
      title: "Learn and grow better with excellent support and resources",
      imageSrc: Suppot,
      backgroundColor: "#FEFFC7",
      titleColor: "#7A1600",
    },
    {
      title: "With Great Power comes Great Security",
      imageSrc: Security,
      backgroundColor: "#FAE8FF",
      titleColor: "#60007B",
    },
    {
      title: "With Great Power comes Great Security",
      imageSrc: Balance,
      backgroundColor: "#FFF2E2",
      titleColor: "#7A1600",
    },
  ];
  const screenShotContent = [
    {
      upperImage: Box,
      lowerImage: Globe,
      title: "Instant Experiences for your Customers",
      backgroundColor: "#FFF2E2",
      titleColor: "#7A1600",
      images: [
        { imgSrc: PublicLink, title: "No login Public link" },
        {
          imgSrc: ShipperInsight,
          title: "Shipper Insight",
        },
        { imgSrc: DocumentCollaboration, title: "Document Collaboration" },
        { imgSrc: OrderManagement, title: "Order Management" },
      ],
    },
    {
      upperImage: Scroll,
      lowerImage: Eye,
      title: "Controls & insights your  management will love",
      backgroundColor: "#FAE8FF",
      titleColor: "#60007B",
      images: [
        { imgSrc: SceenShot, title: "Get Ai Generated reports" },
        {
          imgSrc: SceenShot,
          title:
            "Make faster decisions with instant insights around customers, trade lanes, revenue, volume & margins",
        },
        {
          imgSrc: SceenShot,
          title: "Monitor shipment progress, track & resolve exceptions faster",
        },
        { imgSrc: SceenShot, title: "Track collections and outstanding" },
        {
          imgSrc: SceenShot,
          title: "Auto hold business with low margin or credit heavy customers",
        },
      ],
    },
    {
      upperImage: Mobile,
      lowerImage: Circles,
      title: "Productivity & multi party collaboration",
      backgroundColor: "#FFF2E2",
      titleColor: "#7A1600",
      images: [
        { imgSrc: MobileApp, title: "Mobile App" },
        { imgSrc: ContextualChat, title: "Contextual Actions & Chat" },
        { imgSrc: ContextualEmail, title: "Contextual Email Collaboration" },
      ],
    },
  ];
  const items = [
    {
      key: "1",
      label: "Sales & Pricing",
      children: (
        <TabContainer
          items={[
            "Lead & Activity management",
            "Configurable Pipelines",
            "Inquiry & Quotations",
            "Task Management",
            "Rate Explorer",
            "Lead Analytics & more",
          ]}
        />
      ),
    },
    {
      key: "2",
      label: "CS & Operations",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Documentation",
      children: "Content of Tab Pane 3",
    },
    {
      key: "4",
      label: "Accounts Receivable",
      children: "Content of Tab Pane 5",
    },
    {
      key: "5",
      label: "Accounts Payable",
      children: "Content of Tab Pane 6",
    },
    {
      key: "6",
      label: "Finance Controls & Taxation",
      children: "Content of Tab Pane 7",
    },
  ];
  return (
    <>
      <Header />
      <LandingPage />
      <Highlight />
      <Arcade />

      <ScreenShotScreen {...screenShotContent[0]} />
      <TabScreen
        upperImage={WhiteTeam}
        lowerImage={WhiteCircles}
        title="AI-Driven Apps for More Efficient Teams"
        items={items}
      />
      <ScreenShotScreen {...screenShotContent[1]} />
      <ScreenShotScreen {...screenShotContent[2]} />
      <ColorScreens {...content[0]}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
        laborum esse suscipit temporibus fugit numquam illo placeat eum eaque
        architecto excepturi dolor sint rem, ipsum error aspernatur qui
        explicabo veniam!
      </ColorScreens>
      <ColorScreens {...content[1]}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
        placeat aut totam fugit et explicabo recusandae vitae sunt sit quisquam
        officiis reprehenderit nostrum quidem rem, eos debitis magnam
        consequatur. Pariatur!
      </ColorScreens>
      <ColorScreens {...content[2]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit est quis
        earum nam doloremque, vero excepturi architecto repellat voluptatem
        laboriosam! Corporis repellat illum vero blanditiis quam itaque vel
        minus eum!
      </ColorScreens>
      {/* <PricingComponent /> */}
      <AboutSection />
    </>
  );
}

export default App;
