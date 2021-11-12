import React from "react";
import "./ThirdPage.css";
import YoutubeEmbed from "../YoutubeEmbed";
import Navigation from "../Navigation/Navigation"

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <h1>Sex Offender Scenario #3</h1>
      <p className="thirdScenario">
        This third scenario involves a little girl at a pool party. Watch to see what's wrong with this scenario.
      </p>
      <YoutubeEmbed embedId="JhiZMBfgHuU" />
    </div>
  );
}