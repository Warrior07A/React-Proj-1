import dark_arrow from "../../assets/dark-arrow.png"
import React from "react";
import "./Hero.css"
const Hero=()=>{
return<>
<div id="hero">
    <div id="hero-text">
        <h1>We don't chase Degree. We earn Skills</h1>

        <p>We teach real, in-demand skills that make you stand out in interviews, startups, and life.   
        </p>
<br></br>           
        <button id="btn">Explore More     <img id="arrow" src={dark_arrow}></img></button>
    </div>
</div>
</>
}
export default Hero