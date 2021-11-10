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
        This first scenario involves a teacher and a kid where the teacher invites the child over to play with his child. Watch to see whats wrong with this scenario.
      </p>
      <YoutubeEmbed embedId="nP5rd2pGXHY" />
    </div>
  );
}