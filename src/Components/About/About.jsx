import React from "react"
import school from "../../assets/school.png"
import playicon from "../../assets/play-icon.png"
import "./About.css"

const About=()=>{
    return<>
    <div id="about">
        <div id="aboutleft">
            <img id = "aboutimg" src={school}></img>
            <img id="play_icon" src={playicon}></img>
        </div>
        <div id="aboutright">
    {/* <h3 >ABOUT UNIVERSITY</h3> */}
    <h2 >Nurturing Tomorrow's Leaders Today</h2>
    <p>

Founded with a vision to revolutionize tech education, 100xSchool has grown from a small community to a thriving ecosystem of developers, mentors, and industry leaders.
    </p>
    <p>
    With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.
    </p>
    <h1><u>Our Community</u></h1>
    <p>
We are a community of passionate learners of modern technology. A place where you can learn, grow, and connect with others who share your passion for technology. A place where you can be yourself and learn from each other.
    </p>
        </div>
    </div>
    </>

}


export default About