import React from "react";
import "./ThirdPage.css";
import YoutubeEmbed from "../YoutubeEmbed";
import Navigation from "../Navigation/Navigation"

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <h1>Sex Offender Scenario #3</h1>
      <YoutubeEmbed embedId="JhiZMBfgHuU" />
    </div>
  );
}