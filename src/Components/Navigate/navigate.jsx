import logo from "../../assets/logo.png"
import "./navigate.css"

const Navbar=()=>{
    return <>
        <nav id="container">
        <img src={logo} id="logo"></img>    
        
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