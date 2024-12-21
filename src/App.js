import "./App.css";
import Header from "./components/Header/Header";
import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Highlight from "./components/HighlightSection/Highlight";
import ColorScreens from "./components/CarouselScreen/ColorScreens";
import Balance from "../src/components/CarouselScreen/ColorScreenImage/Balance.svg";
import Suppot from "../src/components/CarouselScreen/ColorScreenImage/Support.svg";
import Security from "../src/components/CarouselScreen/ColorScreenImage/Security.svg";
import ScreenShotScreen from "./components/ScreenShotScreen/ScreenShotScreen";
import TabScreen from "./components/TabScreen/TabScreen";
import WhiteTeam from "../src/components/TabScreen/team.png";
import WhiteCircles from "../src/components/TabScreen/whiteCircles.png";
import AboutSection from "./components/AboutSection/AboutSection";
import Arcade from "./components/Arcade/Arcade";
import PricingComponent from "./components/PricingPage/PricingComponent";
import { TAB_ITEMS } from "./components/TabScreen/exports";
import { SCREEN_SHOT_CONTENT } from "./components/ScreenShotScreen/export";
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
      title: "Cutting-edge software at Forwarder Friendly Prices",
      imageSrc: Balance,
      backgroundColor: "#FFF2E2",
      titleColor: "#7A1600",
    },
  ];
  return (
    <>
      <Header />
      <LandingPage />
      <Highlight />
      <Arcade />

      <ScreenShotScreen {...SCREEN_SHOT_CONTENT[0]} />
      <TabScreen
        upperImage={WhiteTeam}
        lowerImage={WhiteCircles}
        title="AI-Driven Apps for More Efficient Teams"
        items={TAB_ITEMS}
      />
      <ScreenShotScreen {...SCREEN_SHOT_CONTENT[1]} />
      <ScreenShotScreen {...SCREEN_SHOT_CONTENT[2]} />
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
      <PricingComponent />
      <AboutSection />
    </>
  );
}

export default App;
