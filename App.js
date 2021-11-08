import React from "react";
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";

export default function App() {
  return (
    <div className="App">
      <h1>Youtube Embed</h1>
      <YoutubeEmbed embedId="BuGgwyQ_U1U" />
    </div>
  );
}