import React from "react";
import { Link } from "react-router-dom";

export default function App(){
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/first">FirstPage</Link>

    </div>
  )
}