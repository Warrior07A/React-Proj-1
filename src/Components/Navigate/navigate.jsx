// import logo from "../../assets/logo.png"
import "./navigate.css"
import icon from "../../assets/icon.png"


const Navbar=()=>{
    return <>
        <nav id="container" class="dark-nav">
         <ul>
        <li><img src={icon} id="logo"></img></li>   
        <li id="icon-name">100XSchool</li>
        </ul>
        
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About Us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button id="contactbtn">Contact Us</button></li>
        </ul>
        </nav>
    </>
}

export default Navbar