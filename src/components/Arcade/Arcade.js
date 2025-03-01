import React from "react";
import "../Arcade/Arcade.css";

export default function Arcade() {
  return (
    <div className="arcade">
      <h1 className="title-highlight arcade-title">Take a Closer Look</h1>
      <div>
        <iframe
          style={{ height: "85vh", width: "90vw", border: "none" }}
          src="https://app.arcade.software/share/zVtYhb35Js2t5DcEHzFS?embed_referrer=http%3A%2F%2Flocalhost%3A3000%2F"
          allowFullScreen
          title="Arcade Experience"
        ></iframe>
      </div>
    </div>
  );
}
