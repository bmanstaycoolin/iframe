import React from "react";
import "./SecondPage.css";
import YoutubeEmbed from "../YoutubeEmbed";
import Navigation from "../Navigation/Navigation"

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <h1>Sex Offender Scenario #2</h1>
      <p className="secondScenario">
        This second scenario involves a woman in a job setting. Watch to see what's wrong with this scenario.
      </p>
      <YoutubeEmbed embedId="1ay1wr8veBA" />
    </div>
  );
}