import React from "react";
import "./FirstPage.css";
import YoutubeEmbed from "../YoutubeEmbed";
import Navigation from "../Navigation/Navigation"

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <h1>Sex Offender Scenario #1</h1>

      <p className="firstScenario">
        This is a first scenario involving ____
      </p>
      <YoutubeEmbed embedId="BuGgwyQ_U1U" />
    </div>
  );
}