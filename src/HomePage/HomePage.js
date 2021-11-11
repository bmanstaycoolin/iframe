import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation"

function Home(){
    return (
        <div className="background">
            {/* <h1 className="title">Home</h1>
            <Link to="/home">Home</Link>
            <Link to="/first">FirstPage</Link> */}
            <Navigation></Navigation>
            <p className="intro">
            Welcome! Child safety is very important. You want your child to be aware of their surroundings because not everyone has their best interest and they should know why. What is a sex offender? A sex offender is a person who has committed a sex crime. Some sex crimes include sexual assault, statutory rape, child sexual abuse, rape, and incest. If you click each link, there are a few scenarios you and your child should pay attention to.
            </p>
        </div>
    )
}
export default Home;