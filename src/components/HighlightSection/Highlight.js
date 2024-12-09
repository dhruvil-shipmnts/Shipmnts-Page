import React from "react";
import "./Highlight.css";
import Balance from "../CarouselScreen/balance.png";
import Colobrate from "../CarouselScreen/colobrate.png";
import Genai from "../CarouselScreen/genai.png";
import Suppot from "../CarouselScreen/support.png";
import Team from "../CarouselScreen/team.png";
import Web from "../CarouselScreen/web.png";
import Security from "../CarouselScreen/security.png";
import CarouselScreenWrapper from "../CarouselScreen/CarouselScreenWrapper";
import CarouselWrapper from "../Carousel/CarouselWrapper";
const Highlight = () => {
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
    <div className="highlight-container">
      {/* Title Section */}
      <div className="highlight-center">
        <div className="title-container">
          <h1 className="title-highlight">Welcome to Our Platform</h1>
        </div>

          <CarouselWrapper >
            <CarouselScreenWrapper {...content[0]} />
            <CarouselScreenWrapper {...content[1]} />
            <CarouselScreenWrapper {...content[2]} />
            <CarouselScreenWrapper {...content[3]} />
            <CarouselScreenWrapper {...content[4]} />
            <CarouselScreenWrapper {...content[5]} />
            <CarouselScreenWrapper {...content[6]} />
          </CarouselWrapper>
      </div>
    </div>
  );
};

export default Highlight;
