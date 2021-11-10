import React from "react";
import "./SecondPage.css";
import YoutubeEmbed from "../YoutubeEmbed";
import Navigation from "../Navigation/Navigation"

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <h1>Sex Offender Scenario #2</h1>
      <YoutubeEmbed embedId="84qJttZjp94" />
    </div>
  );
}