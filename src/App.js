import React from "react";
import { Link } from "react-router-dom"

export default function App(){
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/first">FirstPage</Link>
      <Link to="/second">SecondPage</Link>
      <Link to="/third">ThirdPage</Link>

    </div>
  )
}