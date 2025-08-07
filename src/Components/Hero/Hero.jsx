import dark_arrow from "../../assets/dark-arrow.png"
import React from "react";
import "./Hero.css"
const Hero=()=>{
return<>
<div id="hero">
    <div id="hero-text">
        <h1>We ensure better education for a better world.</h1>

        <p>Our cutting edge curriculum is designed to empower students with hathiyaar and what npot?
            everything you findd here is under construction or broken but believe me we are good to good.
        </p>
<br></br>           
        <button id="btn">Explore More     <img id="arrow" src={dark_arrow}></img></button>
    </div>
</div>
</>
}
export default Hero