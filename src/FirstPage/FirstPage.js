import React from "react";
import "./FirstPage.css";
import YoutubeEmbed from "../YoutubeEmbed";
import Navigation from "../Navigation/Navigation"

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <h1>Youtube Embed</h1>
      <YoutubeEmbed embedId="BuGgwyQ_U1U" />
    </div>
  );
}