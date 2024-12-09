import "./App.css";
import Header from "./components/Header/Header";
import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Highlight from "./components/HighlightSection/Highlight";
import ColorScreens from "./components/CarouselScreen/ColorScreens";
import Balance from "../src/components/CarouselScreen/balance.png";
import Colobrate from "../src/components/CarouselScreen/colobrate.png";
import Genai from "../src/components/CarouselScreen/genai.png";
import Suppot from "../src/components/CarouselScreen/support.png";
import Team from "../src/components/CarouselScreen/team.png";
import Web from "../src/components/CarouselScreen/web.png";
import Security from "../src/components/CarouselScreen/security.png";
import PricingComponent from "./components/PricingPage/PricingComponent";
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
      <ColorScreens {...content[4]}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
        laborum esse suscipit temporibus fugit numquam illo placeat eum eaque
        architecto excepturi dolor sint rem, ipsum error aspernatur qui
        explicabo veniam!
      </ColorScreens>
      <ColorScreens {...content[5]}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
        placeat aut totam fugit et explicabo recusandae vitae sunt sit quisquam
        officiis reprehenderit nostrum quidem rem, eos debitis magnam
        consequatur. Pariatur!
      </ColorScreens>
      <ColorScreens {...content[6]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit est quis
        earum nam doloremque, vero excepturi architecto repellat voluptatem
        laboriosam! Corporis repellat illum vero blanditiis quam itaque vel
        minus eum!
      </ColorScreens>
      <PricingComponent />
    </>
  );
}

export default App;
