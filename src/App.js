import './App.css';
import Header from './components/Header/Header';
import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import Highlight from './components/HighlightSection/Highlight';
import CarouselScreenWrapper from './components/CarouselScreen/CarouselScreenWrapper';
import Balance from "../src/components/CarouselScreen/balance.png";
import Colobrate from "../src/components/CarouselScreen/colobrate.png";
import Genai from "../src/components/CarouselScreen/genai.png";
import Suppot from "../src/components/CarouselScreen/support.png";
import Team from "../src/components/CarouselScreen/team.png";
import Web from "../src/components/CarouselScreen/web.png";
import Security from "../src/components/CarouselScreen/security.png";
function App() {

  const content = [
    {
      title:
        "Digital Platform for your Customers / Instant Experiences for your customers",
      imageSrc: Web,
      backgroundColor: "#FFF2E2",
      titleColor: "#7A1600",
    },
    {
      title: "AI first apps for more efficient teams",
      imageSrc: Team,
      backgroundColor: "#FEFFC7",
      titleColor: "#7A1600",
    },
    {
      title: "Actionable Insights for Faster Decisions",
      imageSrc: Genai,
      backgroundColor: "#FAE8FF",
      titleColor: "#60007B",
    },
    {
      title: "Productivity & Multi-Party Collaboration toolkit",
      imageSrc: Colobrate,
      backgroundColor: "#FFF2E2",
      titleColor: "#7A1600",
    },
    {
      title: "Personalised and Proactive Support you can count on",
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
    <CarouselScreenWrapper {...content[4]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque necessitatibus dignissimos quas illum magnam consectetur cupiditate, porro facilis quaerat atque praesentium obcaecati ut commodi recusandae incidunt a dolorum explicabo saepe!</CarouselScreenWrapper>
    <CarouselScreenWrapper {...content[5]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque necessitatibus dignissimos quas illum magnam consectetur cupiditate, porro facilis quaerat atque praesentium obcaecati ut commodi recusandae incidunt a dolorum explicabo saepe!</CarouselScreenWrapper>
    <CarouselScreenWrapper {...content[6]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque necessitatibus dignissimos quas illum magnam consectetur cupiditate, porro facilis quaerat atque praesentium obcaecati ut commodi recusandae incidunt a dolorum explicabo saepe!</CarouselScreenWrapper>
    </>
  );
}

export default App;
